const fs = require("fs");
module.exports.config = {
  name: "gand",
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
  if(react.includes("peson mar") ||
     react.includes("hoga mar") || react.includes("Gand") || react.includes("gand") ||
react.includes("sex") ||
react.includes("dhukai de")) {
    var msg = {
        body: `It's not an ass, it's an iron dick, take it and keep it overnight and give it to me in the morning to pee।😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
