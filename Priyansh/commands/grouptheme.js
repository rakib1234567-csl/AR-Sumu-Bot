const axios = require("axios");

module.exports.config = {
  name: "grouptheme",
  version: "2.0.0",
  hasPermssion: 1,
  credits: "Rakib Boss",
  description: "Change your group theme color (cute auto themes added)",
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

const cuteThemes = [
  { name: "Cute Cat (Pink)", id: "169463077092846" },
  { name: "Love (Red)", id: "2129984390566328" },
  { name: "Nature (Green)", id: "2136751179887052" },
  { name: "Sun (Yellow)", id: "2058653964378557" },
  { name: "Sky (Blue)", id: "196241301102133" }
];

module.exports.run = async function({ api, event, args }) {
  const input = args[0]?.toLowerCase();

  if (!input) {
    const list = Object.keys(themes).map(c => `• ${c}`).join("\n");
    return api.sendMessage(`❌ Please provide a theme color or 'auto'\n\nAvailable colors:\n${list}`, event.threadID, event.messageID);
  }

  if (input === "auto") {
    const random = cuteThemes[Math.floor(Math.random() * cuteThemes.length)];
    try {
      await api.changeThreadColor(random.id, event.threadID);
      return api.sendMessage(`✨ Auto Theme Activated!\nChanged to: ${random.name}`, event.threadID, event.messageID);
    } catch (e) {
      console.error(e);
      return api.sendMessage("❌ Failed to change theme. Make sure bot is admin.", event.threadID, event.messageID);
    }
  }

  if (!themes[input]) {
    const list = Object.keys(themes).map(c => `• ${c}`).join("\n");
    return api.sendMessage(`❌ Invalid theme color!\n\nAvailable colors:\n${list}`, event.threadID, event.messageID);
  }

  try {
    await api.changeThreadColor(themes[input], event.threadID);
    return api.sendMessage(`✅ Theme has been changed to '${input}'`, event.threadID, event.messageID);
  } catch (err) {
    console.error(err);
    return api.sendMessage("❌ Failed to change theme. Make sure the bot is admin.", event.threadID, event.messageID);
  }
};
