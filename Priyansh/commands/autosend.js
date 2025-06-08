const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
`‎╭•┄┅═══❁🪷❁═══┅┄•╮
𝐓𝐢𝐦𝐞: {time}
-আসসালামু আলাইকুম-
"দোয়া কখনো ব্যর্থ হয় না, সময় মতোই কবুল হয়।"
– •ঈমানী সাহস রাখুন•
╰•┄┅═══❁🪷❁═══┅┄•╯`,

`╭─❉•【🕰️ ${time}】•❉─╮
ইচ্ছে করে বিছানায় গড়িয়ে থাকি...
কিন্তু মনে পড়ে, **রিযিক খুঁজে বের হও** - আল্লাহ বলেছেন!
•︵•✿ AR Bot ✿•︵• 
╰──────────────╯`,

`╭────❁✨❁────╮
🕌 নামাজ হচ্ছে শান্তির Therapy!
টাইমঃ ${time}
ওঠো ওঠো! জান্নাত তোমার অপেক্ষায়!
– AR Bot ডাক দিলো!
╰────❁✨❁────╯`,

`╭─❁🕋❁─╮
এই দুনিয়া ফিতনার ভরা,
তাই বলি ভাই, **নমাজ পড়ো আর AR Bot-er কথা শোনো!**
📿 সময়ঃ ${time}
╰─❁AR Islamic Reminder❁─╯`,

`╭────❀────╮
${time} বাজে আর তুমি এখনো চিন্তা করছো?
বলি ভাই, "যে আল্লাহকে বিশ্বাস করে, সে কখনো হারবে না।"
– তোমার Digital মুরব্বি: AR Bot
╰────❀────╯`,

`╭────•ೋ🌙ೋ•────╮
আল্লাহর রহমত কখনো শেষ হয় না...
তুমি শুধু এক কদম আগাও,
উনি দশ কদম এগিয়ে আসবেন!
🕰️ এখন সময়ঃ ${time}
╰────•ೋAR Botೋ•────╯`,

`╭───✧───╮
একটা কথা মনে রেখো:
**"নামাজ হলো সফলতার চাবি"**
⏰ টাইমঃ ${time}
– AR Bot তোমার প্রেরণা!
╰───✧───╯`,

`╭🌸 ${time} 🌸╮
মন খারাপ? আল্লাহর জিকিরে শুরু করো।
"লা ইলাহা ইল্লাল্লাহ"
মুহূর্তেই শান্তি আসবে ইনশাআল্লাহ।
– বলছে তোমার বন্ধু AR Bot
╰────────────╯`,

`╭────•❀•────╮
হাসো, জিকির করো, দোয়া করো।
এই সময়টা ${time} – জিন্দেগি একটাই!
Funny Bot, but Real Talk – AR Bot
╰────•❀•────╯`,

`╭━━⊱༻❁༺⊰━━╮
কি ভাই? এত মন খারাপ ক্যানো?
"তুমি যদি আল্লাহর উপর ভরসা করো,
তাহলে দুনিয়ার চিন্তা তোমার লাগবে না!"
⏰ ${time}
– AR Bot ও তোমার পক্ষে!
╰━━⊱༻❁༺⊰━━╯`,

`╭─╼╾═ঔৣ۝ঔৣ═╼╾─╮
যে নামাজ পড়ে, তার চিন্তা আল্লাহ করে।
তাই আর দেরি নয়, উঠে যাও ভাই!
⏰ সময়ঃ ${time}
AR Bot always watching you!
╰─╼╾═ঔৣ۝ঔৣ═╼╾─╯`,

`╭──────•ೋ🌸ೋ•──────╮
হাসো, Positive থাকো,
আর ভুলেও কারো মন কষ্ট দিও না!
Time: ${time} – Bot বান্ধবী বলছে!
╰──────•ೋ🌸ೋ•──────╯`,

`╭────┄┅┄────╮
"আল্লাহ আমাদের কাছাকাছি,
শুধু একবার ডাকলেই সাড়া দেন।"
⏰ টাইমঃ ${time}
– AR Bot-এর Islamic Whisper
╰────┄┅┄────╯`,

`╭────✿────╮
ওঠো ভাই, ঘুম থেকে উঠো!
দুনিয়া দৌড়াচ্ছে, আর তুমি ঘুমাও?
🕰️ ${time} – Bot তো আর ঘুমায় না!
╰────✿────╯`,

`╭─❁•═════•❁─╮
জীবনে যারা কাঁদে, তারাই জয়ী হয়।
Bot দেখে সব!
⏰ সময়ঃ ${time}
AR Bot আপনার পাশে আছি ভাই!
╰─❁•═════•❁─╯`,

`╭─✨ Bot Reminder ✨─╮
"ফেরেশতারা বলে – একজন মুসলিম যখন দোয়া করে,
আমরা তার জন্য আমীন বলি।"
তোমার দোয়া আজ কবুল হোক!
${time} বাজে এখন!
╰────────────────╯`,

`╭──•👑•───────╮
আল্লাহ যাদের ভালোবাসেন,
তাদেরকে কখনো হারতে দেন না!
তাই বিশ্বাস হারিও না!
Time: ${time} – তুমি এক যোদ্ধা!
╰────────────╯`,

`╭•┄❁┄•╮
"জীবনে ক্লান্তি আসবে,
কিন্তু থেমে যাওয়া যাবে না।"
⏰ টাইমঃ ${time}
– Powered by AR Bot Inspiration
╰•┄❁┄•╯`,

`╭─💫 Motivation Station ─╮
মুসলমান কখনো হারে না,
তার ইমানই তার Power!
⏰ ${time}
– AR Bot ভাইয়া বলছে এইটা মনে রাখো!
╰───────────────────╯`,

`╭───🕊️───╮
দিনের এই সময়ে (${time})
একটু হাসো, একটু শুকরিয়া আদায় করো,
তুমি এখনো বেঁচে আছো – এটা অনেক বড় নিয়ামত!
– AR Bot | Islamic Fun!
╰────────╯`,

`╭─❁•┄┅┄•❁─╮
পাপ করলে ফিরে এসো...
আর যদি মন খারাপ থাকে, তাহলে AR Bot-এর সাথে গল্প করো!
⏰ এখন ${time}
╰─❁•┄┅┄•❁─╯`,

`╭─🕋 AR Reminder ─╮
"পৃথিবীর সব কিছু ছেড়ে যাবে,
শুধু আমল যাবে তোমার সাথে।"
⏰ ${time} বাজে – শুরু করো ভালো কাজ!
╰──────────────╯`,

`╭────🌿────╮
তুমি যদি মনে করো কেউ নেই,
তবে ভুল করো – **আল্লাহ আছেন**।
AR Bot তো আছেই!
⏰ টাইমঃ ${time}
╰────🌿────╯`,

`╭────💙────╮
একটু হাসো, একটু দোয়া করো,
একটু পরিশ্রম করো – Success তোমার হবেই ইনশাআল্লাহ!
⏰ ${time}
– তোমার Bot বন্ধু | AR Bot
╰────💙────╯`
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Dhaka').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
