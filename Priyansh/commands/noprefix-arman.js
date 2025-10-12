const fs = require("fs");
module.exports.config = {
	name: "arman",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ayesha")==0 || event.body.indexOf("AYESHA")==0 || event.body.indexOf("ayesha")==0 || event.body.indexOf("ajs")==0) {
		var msg = {
				body: "She Is the best one \n 💞 \n 🌹≛⃝𝙰𝚈𝙴𝙰𝙷𝙰 𝚀𝚄𝙴𝙴𝙽👑😘♥️🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/----.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
