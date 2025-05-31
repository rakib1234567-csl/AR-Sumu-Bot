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
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imghippo.com/files/lJ8376Tkc.jpg"];
var callback = () => api.sendMessage({body:` ╾━═(🇮 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮
)═━一-

☄️ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 ☄️  
❖ 𝐀𝐑 ✦𝐁𝐨𝐭✦ ❖

🔥 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 🔥  
☞︎︎︎ 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 ☜︎︎︎ ✰💔🥀

🙈 𝐎𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 🙈  
➪ [𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐩𝐫𝐨𝐟𝐢𝐥𝐞.𝐩𝐡𝐩?𝐢𝐝=𝟏𝟎𝟎𝟎𝟒𝟒𝟒𝟖𝟕𝟑𝟒𝟎𝟒𝟐𝟒](https://www.facebook.com/profile.php?id=100044487340424) 💞🕊️

📞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: +𝟖𝟖𝟎𝟏𝟔𝟎𝟏-𝟏𝟓𝟎𝟔𝟔𝟎  
✉️ 𝐄𝐦𝐚𝐢𝐥: 𝐫𝐚𝐤𝐢𝐛.𝐚𝐥𝐢.𝐜𝐬𝐥@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦  
📱 𝐌𝐨𝐛𝐢𝐥𝐞: +𝟖𝟖𝟎𝟏𝟔𝟎𝟏-𝟏𝟓𝟎𝟔𝟔𝟎

✧═══•❁❀❁•═══✧

🌸 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 🌸  
☞︎︎︎ `/` ☜︎︎︎ ✰

♥️ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ♥️  
☞︎︎︎ 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 ☜︎︎︎ ✰

✅ 𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐀𝐑 ✦𝐁𝐨𝐭✦ 🖤

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤

🦢•••❍┼❍ωɳɜɽ ɳaʍɜ •••💞  
┏━🕊️━°❀•°:🎀:°•❀°━💞━┓  
🌸✦✧ 𝐑𝐀𝐊𝐈𝐁 𝐁𝐎𝐒𝐒 ✧✦🌸  
┗━🕊️━°❀•°:🎀:°•❀°━💞━┛

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
