const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "shayri",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Ranmdom a Shayri",
  commandCategory: "group",
  usages: "shayri",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
  "😍❤️ ...তুই হাসলে আমি হই পাগল, তোর নামটা হৃদয়ে আগল",
  "🤍🌼 ...ভালোবাসা ছিল না ভুল, তুই ছিলি শুধু স্বার্থের ফুল",
  "💫😢 ...চোখে চোখ রাখলে কাঁপে মন, তুই হইলি নয়ন শত্রুজন",
  "💔📖 ...তুই আছিস অন্য কারো সাথে, আমি একা, শুধু স্মৃতির পাতে",
  "🕊️🔍 ...পৃথিবী জুড়ে তোরই খোঁজ, তুই নাই তাই মনটা বেজায় খোঁজ",
  "👀🖊️ ...একটু কথা, একটু দেখা, এইটুকুই ছিলো জীবনের রেখা",
  "🐍😓 ...স্মৃতিগুলো এখন বিষের মতো, তোর নাম শুনলেই কষ্ট হয় কত!",
  "💌⌛ ...মন চায় তোকে আবার পেতে, কিন্তু বাস্তব বলে “ভুলে যেতে”",
  "🌈🌧️ ...ভালো থেকো, সুখে থেকো, আমার কষ্টগুলা মুছে রেখো",
  "🌀😶 ...তুই হাসলে, আমি গলি হারাই, তুই না থাকলে, নিঃশ্বাসও ঠেকাই",
  "😞🚶‍♀️ ...ভালবাসি বলা হইলো না কখনো, তুই চলে গেলি চিরদিনের মতো",
  "🙅‍♀️⏳ ...তোর মনে আমি ছিলাম না, তবু তোকে ভেবেই কেটেছে দিন-রাত",
  "🕊️✍️ ...তুই ফিরবি জানি ভুল বুঝে একদিন, ততদিন চোখের জলে লিখি কবিতা তিন-দিন",
  "💞😔 ...তুই বললি – 'ভালোবাসি', আর আমি বিশ্বাস করে হারালাম সবই",
  "📱🌫️ ...তোর মেসেজ আসলে হাসি আসে, এখন শুধু নীরবতা ভাসে",
  "📚🤷 ...তুই সুখের নাম, আমি দুঃখের বই, একসাথে হতেই পারলাম না, হায়রে কই?",
  "🫶🍂 ...ভুলে যাস না, আমি ছিলাম তোর আপন, ভুল হলেও তুই ছিলি আমার জীবন",
  "🙃😩 ...তুই চলে গেছিস, তাতে কষ্ট নাই, কিন্তু যেভাবে গেছিস, তার ব্যথা কোথাও নাই",
  "😅🎭 ...কান্না লুকিয়ে হাসি দেখাই, তুই চিনবি না, কারণ মনটা আমি ঢাকাই",
  "🚫🌌 ...শেষটা এমন হবে ভাবিনি কখনো, ভালোবাসা হারিয়ে গেলো নিঃশব্দে অজানাতে যানো…"
];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  if (event.body.indexOf("Shayri") == 0 || (event.body.indexOf("shayri") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
