const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "ramisha",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "Rakib Boss",
  description: "Romantic AI GF Ramisha (Voice, Context & Emoji)",
  commandCategory: "chat",
  cooldowns: 2
};

// store conversations in-memory (restart clears context)
const chatContext = {};

module.exports.run = async function ({ api, event, args }) {
  await handleMessage({ api, event, args });
};

// handle both command & direct message
module.exports.handleEvent = async function({ api, event }) {
  const text = event.body ? event.body.trim() : "";
  if (!text) return;
  const isCmd = text.toLowerCase().startsWith("!ramisha");
  const message = isCmd ? text.replace(/^!ramisha\s*/, "") : text;
  await handleMessage({ api, event, args: [message] });
};

async function handleMessage({ api, event, args }) {
  const userMsg = args.join(" ").trim();
  if (!userMsg) return api.sendMessage("🥺 কি বলবা জান?", event.threadID, event.messageID);

  const uid = event.senderID;
  if (!chatContext[uid]) chatContext[uid] = [];
  chatContext[uid].push({ role: "user", content: userMsg });

  // keep context to last 5 messages
  const recent = chatContext[uid].slice(-5);

  const prompt = recent.map(m => `${m.role === "user" ? "User" : "Bot"}: ${m.content}`).join("\n") +
    "\nBot:";

  try {
    const res = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `তুমি এখন “Ramisha”, মিষ্টি, রোমান্টিক GF, emoji আর voice সহ মেসেজ দাও:\n${prompt}`,
        max_tokens: 150,
        temperature: 0.9,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.6,
        stop: ["User:", "Bot:"]
      },
      {
        headers: {
          Authorization: `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`,
          "Content-Type": "application/json"
        }
      }
    );

    let botMsg = res.data.choices[0].text.trim();
    chatContext[uid].push({ role: "bot", content: botMsg });

    // Voice (TTS)
    const ttsUrl = `https://api.streamelements.com/kappa/v2/speech?voice=Joanna&text=${encodeURIComponent(botMsg)}`;
    const mp3Path = path.join(__dirname, `ramisha_${uid}.mp3`);
    const voiceRes = await axios.get(ttsUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(mp3Path, voiceRes.data);

    // Send text + voice
    api.sendMessage({ body: botMsg, attachment: fs.createReadStream(mp3Path) }, event.threadID, () => {
      fs.unlinkSync(mp3Path);
    }, event.messageID);

  } catch (e) {
    console.error("Ramisha ERROR:", e);
    api.sendMessage("🥺 কিছু একটা ভুল হইছে এখন, একটু পরে আবার চেষ্টা করো!", event.threadID, event.messageID);
  }
}a
