module.exports.config = {
  name: "call",
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
  if (event.body.indexOf("call")>=0 || event.body.indexOf("Call me")>=0 || event.body.indexOf("CALL")>=0 || event.body.indexOf("Bot call")>=0 || event.body.indexOf("CLL")>=0 || event.body.indexOf("CL")>=0 || event.body.indexOf("Call e ")>=0 || event.body.indexOf("Call E")>=0 || event.body.indexOf("call e")>=0 || event.body.indexOf("Call")>=0 ) { 
    var msg = {
        body: ` ${name} Friend, how can I get a call, I am a bot।🥺🥺👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
