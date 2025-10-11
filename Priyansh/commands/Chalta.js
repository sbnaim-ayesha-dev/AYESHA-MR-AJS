const fs = require("fs");
module.exports.config = {
  name: "chalta hu",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gelam") ||
     react.includes("Gelam") || react.includes("Jaiga") || react.includes("jaiga") ||
react.includes("tata") ||
react.includes("bst")) {
    var msg = {
        body: `Come on, get out quickly,😐👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
