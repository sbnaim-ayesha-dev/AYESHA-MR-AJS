module.exports.config = {
  name: "chup",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("chup")>=0 || event.body.indexOf("Chup")>=0 || event.body.indexOf("CHUP")>=0 || event.body.indexOf("chup kor")>=0 || event.body.indexOf("Chup kor")>=0 || event.body.indexOf("CHUP KOR")>=0 || event.body.indexOf("cupp")>=0 ||   event.body.indexOf("cup")>=0 ) { 
    var msg = {
        body: `  ${name} Why should I remain silent? I will speak. Who are you to silence me? You remain silent, I will speak।😒😏👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
