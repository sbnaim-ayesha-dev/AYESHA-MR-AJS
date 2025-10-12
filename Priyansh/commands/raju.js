const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nayem")==0 || event.body.indexOf("Nayem")==0 || event.body.indexOf("Sb Naim")==0 || event.body.indexOf("naim")==0) {
		var msg = {
				body: "😍😍 SB NAIM MERE OWNER KI SOTI VAI HE JO MEREKO BANAYA 😘😘😘r ",
				attachment: fs.createReadStream(__dirname + `/noprefix/---.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
