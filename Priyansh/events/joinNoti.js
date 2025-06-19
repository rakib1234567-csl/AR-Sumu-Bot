module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinvideo");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `🌺••• Ɓ❍ʈ Ƈøɳɳɛƈʈɛɗ •••🌺

       🌸 Ɦɛɭɭ❍ Ɠɣus 🌸
     🌻 Ɱɣ Ɲɑɱɛ 𝐈𝐬 🌻
       ✦★ 𝐀𝐑 Ramisha ★✦

╭•┄┅══❁🌻❁══┅┄•╮
     ✪ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐈𝐧𝐟𝐨 ✪
╰•┄┅══❁🌻❁══┅┄•╯

✦ 𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱: [ - ]

✦ 𝐒𝐭𝐚𝐭𝐮𝐬: ⧫ Online & Active ⧫

📢 প্রিয় ভাই-বোন, কমান্ড দেওয়ার আগে দয়া করে Prefix [ - ] দিন।

📎 উদাহরণ: -help, -menu, -song

❓ প্রশ্ন থাকলে এডমিনের সাথে যোগাযোগ করুন।

<<<<<------------------------------>>>>>

A̸N̸D̸ F̸O̸R̸ A̸N̸Y̸ 𝐑𝐄𝐏𝐎𝐑𝐓 ⧫ 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐁𝐎𝐓 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 💙🍫

━═(🪪 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎)═━

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
`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "‎╭•┄┅══❁🌺❁══┅┄•╮\n   -আসসালামু আলাইকুম-\n╰•┄┅══❁🌺❁══┅┄•╯ \n\n🌹🆆🅴🅻🅻 🅲🅾🅼🅴🌹\n\n            🏵️𝐍𝐄𝐖🏵️ \n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n  [   {name} ] \n\n༆-✿ আপনাকে আমাদের  ࿐\n\n   👩‍👩‍👧‍👦-[{threadName}]-👩‍👩‍👧‍👦\n\n       👏গ্রুপ ও\n🌺!!-রাকিব-এর পক্ষ-থেকে-!!🌺\n  শুভেচ্ছা ও অভিনন্দন\n\n    ⚠️ মিনি রুলস:-⚠️\n👉 এডমিনের কথা না শুনলে গ্রুপ থেকে Remove করে দেওয়া হবে। 👈\n\n🤗এখন কতা অইলো হকলর লগে সুন্দর করি মাতবায় মজা করবায়\n নিজর পরিছয় দিবায়\n বাকি হক্কলে ও তারার পরিছয় দিবা। 🤗\n\n ❤️🫰_ভালোবাস_অভিরাম_🫰❤️\n\n🫵আপনি_এই_গ্রুপের 👩‍👩‍👧‍\n  🙎‍♂️[ {soThanhVien} ] নং মেম্বার🙎‍♂️\n\n╭•┄┅══❁🌺❁══┅┄•╮\n🌸 Creator By RAKIB 🌸\n╰•┄┅══❁🌺❁══┅┄•╯" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
