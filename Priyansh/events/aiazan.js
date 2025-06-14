// File: aiazan.js
const axios = require("axios");
const schedule = require("node-schedule");

module.exports.config = {
  name: "aiazan",
  version: "1.0.0",
  role: 0,
  credits: "Rakib Boss",
  description: "Auto namaz message sender",
  hasPrefix: false,
  usages: "auto namaz",
  cooldowns: 5,
};

module.exports.run = async ({ api, event }) => {
  const threadID = "9902688179785851"; // Rakib Boss group ID

  const waqtMessages = {
    fajr: `
╭•┄┅══❁🌺❁══┅┄•╮
•»✨"ফজর"-এর আজান✨«•
╰•┄┅══❁🌺❁══┅┄•╯

আসসালামু আলাইকুম!
ভোরের আলো উঠেছে, এবার "ফজর" এর নামাজে চলুন ভাই ও বইন অকল।

অনুরোধে -
AR Sumu Bot & RAKIB BOSS
`,

    dhuhr: `
╭•┄┅══❁🌺❁══┅┄•╮
•»✨"যোহর"-এর আজান✨«•
╰•┄┅══❁🌺❁══┅┄•╯

আসসালামু আলাইকুম!
দিনের মাঝখানে শান্তির নামাজ - "যোহর" শুরু হইছে, সবাই নামাজে চলুন।

অনুরোধে -
AR Sumu Bot & RAKIB BOSS
`,

    asr: `
╭•┄┅══❁🌺❁══┅┄•╮
•»✨"আসর"-এর আজান✨«•
╰•┄┅══❁🌺❁══┅┄•╯

আসসালামু আলাইকুম!
বিকেলের আলোতে আসরের আজান হইছে, সবাই নামাজে যাবার প্রস্তুতি নিন।

অনুরোধে -
AR Sumu Bot & RAKIB BOSS
`,

    maghrib: `
╭•┄┅══❁🌺❁══┅┄•╮
•»✨"মাগরিব"-এর আজান✨«•
╰•┄┅══❁🌺❁══┅┄•╯

আসসালামু আলাইকুম!🖤
সূর্য অস্ত যাচ্ছে, "মাগরিব" এর সময় হয়ে গেছে — সবাই নামাজে চলুন।

অনুরোধে -
AR Sumu Bot & RAKIB BOSS
`,

    isha: `
╭•┄┅══❁🌺❁══┅┄•╮
•»✨"এশা"-এর আজান✨«•
╰•┄┅══❁🌺❁══┅┄•╯

আসসালামু আলাইকুম!
রাতের নীরবতায় আল্লাহর ডাকে সাড়া দিন, এশার নামাজ পড়ি সবাই।

অনুরোধে -
AR Sumu Bot & RAKIB BOSS
`,
  };

  async function getPrayerTimes() {
    const res = await axios.get(
      "https://api.aladhan.com/v1/timingsByCity?city=Sylhet&country=Bangladesh&method=2"
    );
    return res.data.data.timings;
  }

  async function scheduleNamaz() {
    const timings = await getPrayerTimes();

    const waqtList = {
      fajr: timings.Fajr,
      dhuhr: timings.Dhuhr,
      asr: timings.Asr,
      maghrib: timings.Maghrib,
      isha: timings.Isha,
    };

    for (const waqt in waqtList) {
      const [hour, min] = waqtList[waqt].split(":").map(Number);

      schedule.scheduleJob({ hour, minute: min, tz: "Asia/Dhaka" }, () => {
        const msg = waqtMessages[waqt];
        api.sendMessage(msg, threadID, (err) => {
          if (err) console.error(`❌ ${waqt} মেসেজ পাঠাতে সমস্যা:`, err);
          else console.log(`✅ ${waqt} আজান মেসেজ পাঠানো হয়েছে`);
        });
      });
    }

    api.sendMessage("✅ আজান অটো মেসেজ চালু হয়েছে! (Sylhet অনুযায়ী)", threadID);
  }

  scheduleNamaz();
};
