module.exports.config = {
  name: "theme",
  version: "1.0.0",
  permission: 1,
  credits: "Rakib Boss",
  description: "Change group theme by command",
  commandCategory: "group",
  usages: "/theme [name]",
  cooldowns: 5,
};

const themes = {
  baby: "244451421235176",
  cat: "234833873526682", 
  love: "2129984390566328",
  nature: "2138596692716325",
  cute: "2276959095951855",
  sun: "379139964757774",
  dark: "1962413017262304",
  space: "1807051676070134"
};

module.exports.run = async function({ api, event, args }) {
  const threadID = event.threadID;
  const themeName = args[0]?.toLowerCase();

  if (!themeName || !themes[themeName]) {
    const list = Object.keys(themes).map(t => `- ${t}`).join("\n");
    return api.sendMessage(
      `❌ Invalid theme!\n\n✅ Available themes:\n${list}`,
      threadID
    );
  }

  try {
    await api.changeThreadTheme(themes[themeName], threadID);
    api.sendMessage(`✅ Theme changed to "${themeName}" successfully!`, threadID);
  } catch (err) {
    api.sendMessage("❌ Failed to change theme. Make sure I'm admin.", threadID);
    console.error(err);
  }
};
