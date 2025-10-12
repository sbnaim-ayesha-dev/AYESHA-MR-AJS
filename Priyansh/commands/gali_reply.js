const fs = require("fs");
module.exports.config = {
	name: "gali5",
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
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("bolod")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("abal")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("Abal")==0 || event.body.indexOf("Bolod")==0) {
		var msg = {
				body: "(Mem Dekho , Gali Derahe He. Lund Katke Hath M rakh Dungi)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
