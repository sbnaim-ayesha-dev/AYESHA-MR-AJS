const fs = require("fs");
module.exports.config = {
  name: "tharki",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tharki",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("abal")==0 || event.body.indexOf("bolod")==0 || event.body.indexOf("hol")==0 || event.body.indexOf("dhon")==0) {
    var msg = {
        body: "😹tu chutiya he kya😹",
        attachment: fs.createReadStream(__dirname + `/cache/Tharki.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
