module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imghippo.com/files/lJ8376Tkc.jpg"];
var callback = () => api.sendMessage({body:` ━═(🪪 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎)═━

☄️ 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 ☄️  
❖★ 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 ★❖

🙈 𝐎𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 🙈  
🔗 [Click Here](https://www.facebook.com/profile.php?id=100044487340424) 💞🕊️

📞 WhatsApp: +8801616-092343  
✉️ Email: rakib.ali.csl@gmail.com  
📱 Mobile: +8801616-092343

✧═══•❁❀❁•═══✧

❤️ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫  
☞︎︎︎ ★ 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 ★ ☜︎︎︎

✅ ধন্যবাদ ✦𝐀𝐑 Ramisha✦ ব্যবহার করার জন্য 🖤

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤

✮☸✮
✮┼ 💞 ┼✮
☸🕊️━━• 🌸 •━━🕊️☸
✮☸✮
✮┼ 🍫 ┼✮
☸🎀━━• 🧸 •━━🎀☸
✮┼ 🦢 ┼✮
✮☸✮
☸🌈━━• 🤍 •━━🌈☸
✮☸✮
✮┼ ❄️ ┼✮

░▒▓█ Creator By █▓▒░  
┏━🕊️-❀-°:🎀:°-❀-💞━┓  
  🌸✦ 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 ✦🌸  
┗━🕊️-❀-°:🎀:°-❀-💞━┛
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
