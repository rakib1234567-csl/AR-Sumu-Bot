// commands/kickgroup.js
module.exports = {
  config: {
    name: "kickgroup",
    version: "1.0.0",
    permission: 2, // Admin only
    credits: "Rakib Boss",
    description: "Remove bot from a group by ID",
    category: "admin",
    usages: "kickgroup [threadID]",
    cooldowns: 5,
  },

  run: async function ({ api, event, args }) {
    const threadID = args[0];
    if (!threadID) return api.sendMessage("⚠️ দয়া করে গ্রুপের ThreadID দাও!", event.threadID);

    try {
      await api.removeUserFromGroup(api.getCurrentUserID(), threadID);
      return api.sendMessage(`✅ Bot কে ${threadID} থেকে রিমুভ করা হয়েছে।`, event.threadID);
    } catch (err) {
      return api.sendMessage(`❌ রিমুভ করতে ব্যর্থ: ${err.message}`, event.threadID);
    }
  }
};
