const fs = require("fs");
module.exports.config = {
	name: "sweety",
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
	if (event.body.indexOf("Ayesha")==0 || event.body.indexOf("ayesha")==0 || event.body.indexOf("@A Y E S H A    Q U E E N    A J S ")==0 || event.body.indexOf("admin")==0) {
		var msg = {
				body: "😍SHE IS BUSY MAYBEE WHAT YOU WENT SAY IT I WILOL SEND HER INBOX😍  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/sweety.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
