const fs = require("fs");
module.exports.config = {
	name: "anaya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ARuN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Trisha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("AYESHA")==0 || event.body.indexOf("Ayesha")==0 || event.body.indexOf("ayesha")==0 || event.body.indexOf("AJS")==0) {
		var msg = {
				body: "===AYESHA MERI OWNER HE=== 😘❤❤😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/---.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
