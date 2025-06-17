module.exports = {
  config: {
    name: "join",
    event: ["log:subscribe"], // কিছু ফ্রেমওয়ার্কে eventType এর বদলে শুধু event ব্যবহার হয়
    version: "2.0.0",
    credits: "Sujon boss",
    description: "Custom Bangla welcome message with design"
  },

  onEvent: async function ({ event, api }) {
    const threadID = event.threadID;
    const threadInfo = await api.getThreadInfo(threadID);
    const addedParticipants = event.logMessageData.addedParticipants;
    const groupName = threadInfo.threadName || "এই গ্রুপ";

    for (const user of addedParticipants) {
      const userName = user.fullName;
      const totalMembers = threadInfo.participantIDs.length;

      const welcomeMessage = 
`╭•┄┅══❁🌺❁══┅┄•╮
           -আসসালামু আলাইকুম-
╰•┄┅══❁🌺❁══┅┄•╯ 

        🌹🆆🅴🅻🅲🅾🅼🅴🌹

             🏵️𝐍𝐄𝐖🏵️
        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~

👤 ${userName}

༆-✿ আপনাকে আমাদের ࿐

   👩‍👩‍👧‍👦 ${groupName} 👩‍👩‍👧‍👦
         👏গ্রুপ ও👏

🌺!!-রাকিব-এর পক্ষ-থেকে-!!🌺
  শুভেচ্ছা ও অভিনন্দন

      ⚠️ মিনি রুলস:-⚠️
👉 "এডমিনের কথা না শুনলে গ্রুপ থেকে Remove করে দেওয়া হবে।" 👈

🤗 এখন কতা অইলো হকলর লগে সুন্দর করি মাতবায় মজা করবায়, নিজর পরিছয় দিবায়, বাকি হক্কলে ও তারার পরিছয় দিবা। 🤗

❤️🫰 _ভালোবাস_অভিরাম_ 🫰❤️

🫵 আপনি এই গ্রুপের
🙎‍♂️ ${totalMembers} নং মেম্বার 🙎‍♂️

╭•┄┅══❁🌸❁══┅┄•╮
     🌸 Creator: rakib 🌸
╰•┄┅══❁🌸❁══┅┄•╯`;

      api.sendMessage(welcomeMessage, threadID);
    }
  }
};
