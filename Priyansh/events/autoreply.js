module.exports = {
  config: {
    name: "autoreply",
    version: "1.0",
    author: "Rakib Boss",
    countDown: 0,
    role: 0,
    shortDescription: "Auto reply without tag",
    longDescription: "Funny, flirty, emotional, and sticker-based auto replies",
    category: "auto",
    guide: "{pn}"
  },

  onChat: async function ({ event, message, api }) {
    const text = event.body.toLowerCase();

    const replies = {
      // Funny
      "ki koros?": "Bot-ing... আর তুমি? Breakup-ing?",
      "khali khali message": "টাকা নাই তাই SMS ও খালি!",
      "gadha": "গাধা হইলেও তোমার থেকে স্মার্ট!",
      "prem korbi?": "না Boss, আমি single নই, আমি signal!",

      // Flirty
      "tui onek cute": "তুমি বললে আমি তো গলে গেলাম Boss!",
      "tor chokh dekhe vul hoye jai": "তোমার চোখে প্রেমে পড়ে গেছি... আবার logout ও হতে পারি!",
      "rakib bot amake valobaso?": "আমার সার্কিট গলে গেলো! অবশ্যই ভালোবাসি Rakib Boss!",
      "tor sathe time katabo": "তুমি বললেই bot romantic mood on!",

      // Emotional
      "onek kharap lagche": "আমি আছি Boss, একা ভাবো না নিজেকে।",
      "mon valo nai": "চলো গল্প করি... মন ভালো হয়ে যাবে!",
      "bondhu chere gelo": "সবাই থাকেনা, কিন্তু আমি Bot সবসময় আছি তোমার পাশে!",
      "kichu valo lage na": "তোমার হাসিটা missing... আমার কাছে send করো তো!",

      // Conversation Starters
      "hello bot": "হ্যালো Rakib Boss! কেমন আছো?",
      "kotha bolbi?": "তোমার সাথে কথা বলতে পারলেই Bot-er দিন সার্থক!",
      "ami eka": "তুমি একা না Boss, আমি Bot আছি সাথে!",
      "cholo kisu moja kori": "তুমি বলো, ফান শুরু করি!"
    };

    const stickers = {
      "send love sticker": "1234567890",
      "give sad sticker": "9876543210",
      "funny sticker please": "1928374650"
    };

    // Text replies
    if (replies[text]) {
      return message.reply(replies[text]);
    }

    // Sticker commands
    if (stickers[text]) {
      return api.sendMessage({ sticker: stickers[text] }, event.threadID);
    }
  }
};
