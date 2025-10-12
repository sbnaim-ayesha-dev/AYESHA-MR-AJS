const fs = require("fs");
module.exports.config = {
	name: "mahadev2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mahadev",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("owner")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("admin")==0 || event.body.indexOf("ADMIN")==0) {
		var msg = {
				body: "≛⃝𝙰𝚈𝙴𝙰𝙷𝙰 𝚀𝚄𝙴𝙴𝙽👑",
				attachment: fs.createReadStream(__dirname + `/noprefix/---.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
