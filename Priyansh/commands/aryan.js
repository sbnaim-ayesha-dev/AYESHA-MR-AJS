const fs = require("fs");
module.exports.config = {
	name: "Aryan",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Admin")==0 || event.body.indexOf("admin")==0 || event.body.indexOf("Ayesha")==0 || event.body.indexOf("ayesha")==0) {
		var msg = {
				body: "i will call her weit some time🙂🌍🌸",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
