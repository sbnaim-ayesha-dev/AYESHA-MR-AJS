const fs = require("fs");
module.exports.config = {
	name: "chiku3",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ayesha")==0 || event.body.indexOf("ayesha")==0 || event.body.indexOf("AYESHA")==0 || event.body.indexOf("AYESHA QUEEN")==0) {
		var msg = {
				body: "❤️😒🐸🙈",
				attachment: fs.createReadStream(__dirname + `/cache/h---.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
