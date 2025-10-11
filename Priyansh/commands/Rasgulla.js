const fs = require("fs");
module.exports.config = {
	name: "rasgulaa",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "barfi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ayesha")==0 || event.body.indexOf("ayesha")==0 || event.body.indexOf("Queen")==0 || event.body.indexOf("queen")==0) {
		var msg = {
				body: "Ayesha meri mem he \n\n➜𝗙𝗥𝗜𝗘𝗡𝗗✪\n     *┏━━ೋ•  •ೋ━━┓*\n                Ayesha\n    *┗━━ೋ•  •ೋ━━┛*\n\n✦𝐅𝐁 𝐋𝐢𝐧𝐤✦\n\nhttps://www.facebook.com/share/16okTbQZdZ/",
				attachment: 
fs.createReadStream(__dirname + `/noprefix/Shayan.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
