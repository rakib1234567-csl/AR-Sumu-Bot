const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("bal")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("kuttar bacca")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("madar chud")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("magi")==0) {
		var msg = {
				body: "(Boss Dk , Gali delete kor naile kintu khobor ace koiya dilam)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
