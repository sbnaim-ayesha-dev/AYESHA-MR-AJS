const fs = require("fs");
module.exports.config = {
  name: "radhe",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed By Arun", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Ishika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Radhefghjfh")==0 || event.body.indexOf("Jai shrfgjfgjfjee kris")==0 || event.body.indexOf("Krishfgjfjgna")==0 || event.body.indexOf("rafxjfdxjfgjdhe")==0) {
    var msg = {
        body: "❤Shree Radhe radhe radhe , Barsane wali radhe❤",
        attachment: fs.createReadStream(__dirname + `/noprefix/radhe.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💓", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
