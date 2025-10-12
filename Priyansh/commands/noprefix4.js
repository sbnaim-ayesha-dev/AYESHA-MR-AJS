const fs = require("fs");
module.exports.config = {
	name: "India",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "india",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Inddfgsdgia")==0 || event.body.indexOf("Hisdgsgnd")==0 || event.body.indexOf("Bhsgdsgarat")==0 || event.body.indexOf("dessdgsgh")==0) {
		var msg = {
				body: "Mera Desh Bharat🇮🇳 Jai hind 🇮🇳🇮🇳 jai bhaarat❤❤❤🇮🇳",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad/india.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇮🇳", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
