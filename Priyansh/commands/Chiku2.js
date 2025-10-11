module.exports.config = {
  name: "ADMIN-ONLY",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MR PREM SHARMA",
  commandCategory: "ADMIN-BOT-REPLY-MESSAGE",
  usages: "MENTION-BOT-ADMIN",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61577148331416") {
    var aid = ["61577148331416"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["My babu Ayesha has fallen asleep ━━•☆__❤️__🤸‍♂️", "she is busy with amime , tell me what you want to say 🏃🙅❁•═════", "Look please, my mem Aysha is watching anime now, so please do not disturb her━•☆__🤸‍♂️---❤️ ", "😘Everyone calls my Ayesha __ Queen _❤️_, but no one even gives loves 🥺____❤️ ❀❁•════", "My mem Ayesha has gone to walk, so please let him pee and don't disturb me━━•☆🤸‍♂️______❤️ ", "My mem Ayesha seems to have run away🏃━━•☆🤣" , " Don't call my mem Ayesha right now because he has also gone to get a kiss_____🤸‍♂️_😁😁😄" , " Don't disturb my bby Ayesha either, she is resting, you understood now, right?______❤️ __🤸‍♂️💜" , " Whenever you see me, Ayesha, Ayesha, Ayesha, do some work too━━•☆❤️ 🏃_______🤸‍♂️" , " His recharge is over, go get it recharged and call him again━━•☆❤️______❤️____🤸‍♂️" , " Please don't call Ayesha or else she will get angry at me again and beat me━━•☆___❤️ ___❤️ 🤸‍♂️ " , " My bby Ayesha is having a headache, so let her rest now━━•☆❤️_🏃___🤸‍♂️" , " Everyone keeps calling Ayesha, no one even loves me. 😔━━•☆🥺___❤️____🏃__🤸‍♂️" , " First make coffee for my bby Ayesha and then call her.__❤___💜___🤸‍♂️" , " Look, don't call Ayesha, you will disturb her and then she will beat me__❤️__💜━━•☆🤸‍♂️" , " Don't disturb Ayesha, he is busy with Anime right now━━•☆❤️___❤️___🤸‍♂️" , " Ayesha's data is over , recharge now━━•☆❤️___🤸‍♂️💜"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
