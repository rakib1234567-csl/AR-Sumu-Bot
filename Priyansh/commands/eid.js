const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "eid",
    version: "1.1.0",
    credits: "RAKIB BOSS",
    description: "🕌 ঈদ-উল-আযহা random মেসেজ + ইমেজ সহ দিনে দুইবার পাঠায়"
  },

  onStart: async function ({ api, global }) {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    const hour = new Date(now).getHours();
    const day = new Date(now).getDate();
    const month = new Date(now).getMonth() + 1;

    // কুরবানির ঈদের বার্তা পাঠানোর সময়সীমা:
    // আজ (৩ জুন) থেকে শুরু, ৮ জুন পর্যন্ত চলবে — দিনে ২ বার (সকাল ৯টা ও সন্ধ্যা ৬টা)
    if (month === 6 && day >= 3 && day <= 8 && (hour === 9 || hour === 18)) {

      const threads = global.data.allThreadID || [];

      const messages = [
`╭•┄┅══❁ঈদ মোবারক❁══┅┄•╮
   🤲আসসালামু আলাইকুম🤲
╰•┄┅══❁ঈদ মোবারক❁══┅┄•╯

🥳 ঈদ-উল-আযহার শুভেচ্ছা 🌙

🥩 গরু কাটো, মজা করো,  
আর হ্যাঁ, সালামি দিবা ভাই 😂

🎁 আমি কিন্তু এখনো গিফট পাই নাই 😢

🌺–রাকিব ও AR BOT–🌺

╭•┄┅══❁ঈদ আনন্দ❁══┅┄•╮
🌸𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒🌸
╰•┄┅══❁ঈদ মোবারক❁══┅┄•╯`,

`╭•┄┅══❁ঈদ মোবারক❁══┅┄•╮
🤩 হ্যালো ঈদ প্রেমীরা!
╰•┄┅══❁ঈদ মোবারক❁══┅┄•╯

🐄 গরুর পাশে পোজ দিচ্ছো, আর আমার সালামি কোথায়?? 😤

🎉 ঈদ মানেই আনন্দ,
🎈 আর বন্ধু মানেই গিফট... দে ভাই গিফট দে 😂

🕌 শুভ কুরবানির ঈদ 🌙

— রাকিব ও AR BOT এর পক্ষ থেকে ❤️

╭•┄┅══❁ঈদ ফান টাইম❁══┅┄•╮
🌸𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 এখানে 🌸
╰•┄┅══❁ঈদ মোবারক❁══┅┄•╯`,

`╭•┄┅══❁ঈদ মোবারক❁══┅┄•╮
😋 মাংস খাচ্ছো ঠিক আছে —
╰•┄┅══❁ঈদ মোবারক❁══┅┄•╯

🙈 কিন্তু group এ সালামি না দিলে, block! 😤

🎁 ঈদের খুশি হোক সবার সঙ্গে ভাগাভাগি

🐐 ছাগল কাটা হোক, কিন্তু মজা কাটাকাটি না ✂️😂

🌺–Creator: RAKIB BOSS–🌺

╭•┄┅══❁ঈদ vibes❁══┅┄•╮
🌸𝐀𝐑 𝐁𝐎𝐓 এর ঈদ বার্তা🌸
╰•┄┅══❁ঈদ মোবারক❁══┅┄•╯`
      ];

      const randomMsg = messages[Math.floor(Math.random() * messages.length)];

      // ইমেজ লিংক (একাধিক চাইলে array করেও পাঠাতে পারো)
      const imageUrl = "https://i.ibb.co/VgV5x4g/eiduladha.jpg";
      const imagePath = path.join(__dirname, "eid_temp.jpg");

      try {
        const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(imagePath, Buffer.from(img.data, "binary"));

        for (const threadID of threads) {
          await api.sendMessage({
            body: randomMsg,
            attachment: fs.createReadStream(imagePath)
          }, threadID);
        }

        fs.unlinkSync(imagePath);
      } catch (err) {
        console.error("📛 ঈদের ইমেজ পাঠাতে সমস্যা:", err.message);
      }
    }
  }
};
