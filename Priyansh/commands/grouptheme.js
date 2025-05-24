const fs = require("fs");
const axios = require("axios");

module.exports.config = {
  name: "grouptheme",
  version: "3.0.0",
  hasPermssion: 1,
  credits: "Rakib Boss",
  description: "Change group theme with colors or cute images (via reply or auto)",
  commandCategory: "Box",
  usages: "grouptheme [color/auto]",
  cooldowns: 5
};

const themes = {
  blue: "196241301102133",
  coral: "980963458735625",
  green: "2136751179887052",
  orange: "174636906462322",
  pink: "169463077092846",
  purple: "1928399724138152",
  red: "2129984390566328",
  turquoise: "2442142322678320",
  violet: "234137870477637",
  yellow: "2058653964378557"
};

const cuteThemeImages = [
  { name: "Cute Cat", url: "https://i.imgur.com/yQGd9pE.jpg" },
  { name: "Anime", url: "https://i.imgur.com/Vo6pU0T.jpg" },
  { name: "Sky", url: "https://i.imgur.com/evMw4Fj.jpg" },
  { name: "Nature", url: "https://i.imgur.com/K2bohBe.jpg" },
  { name: "Love", url: "https://i.imgur.com/O9sNQrc.jpg" }
];

module.exports.run = async function({ api, event, args }) {
  const input = args[0]?.toLowerCase();

  // If replied to a photo
  if (event.type === "message_reply" && event.messageReply.attachments?.[0]?.type === "photo") {
    const imgURL = event.messageReply.attachments[0].url;
    const pathImg = __dirname + "/cache/theme.jpg";
    try {
      const imgData = (await axios.get(imgURL, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(pathImg, Buffer.from(imgData, "utf-8"));
      api.changeGroupImage(fs.createReadStream(pathImg), event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
      return api.sendMessage("✅ Group theme image updated from photo reply!", event.threadID, event.messageID);
    } catch (e) {
      console.error(e);
      return api.sendMessage("❌ Failed to set image theme. Try again.", event.threadID, event.messageID);
    }
  }

  // Auto mode: apply random cute image
  if (input === "auto") {
    const pick = cuteThemeImages[Math.floor(Math.random() * cuteThemeImages.length)];
    const pathImg = __dirname + "/cache/cute-theme.jpg";
    try {
      const res = await axios.get(pick.url, { responseType: "arraybuffer" });
      fs.writeFileSync(pathImg, Buffer.from(res.data, "utf-8"));
      api.changeGroupImage(fs.createReadStream(pathImg), event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
      return api.sendMessage(`✨ Auto Theme: ${pick.name} image set successfully!`, event.threadID, event.messageID);
    } catch (e) {
      console.error(e);
      return api.sendMessage("❌ Couldn't apply auto theme.", event.threadID, event.messageID);
    }
  }

  // Set theme by color
  if (themes[input]) {
    try {
      await api.changeThreadColor(themes[input], event.threadID);
      return api.sendMessage(`✅ Theme color changed to '${input}'`, event.threadID, event.messageID);
    } catch (e) {
      console.error(e);
      return api.sendMessage("❌ Failed to change color theme. Ensure bot is admin.", event.threadID, event.messageID);
    }
  }

  // Help message
  const colorList = Object.keys(themes).map(c => `• ${c}`).join("\n");
  return api.sendMessage(
    `❌ Please reply to an image or use:\n- grouptheme auto\n- grouptheme [color]\n\nAvailable colors:\n${colorList}`,
    event.threadID,
    event.messageID
  );
};
