const fs = require("fs");
module.exports.config = {
	name: "follow",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Aaryan", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "follow",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("kotha bolbo")==0 || event.body.indexOf("ekta kotha")==0 || event.body.indexOf("request")==0 || event.body.indexOf("Ayesha")==0) {
		var msg = {
				body: "OFFLINE MAYBEE ",
				attachment: fs.createReadStream(__dirname + `/noprefix/---.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
