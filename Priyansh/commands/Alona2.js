module.exports.config = {
  name: "Anaya2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Aaryan",
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
      var msg = [" Don't call madam, she is also resting. ━━•☆__❤️__🤸‍♂️", " she is currently busy 🏃🙅❁•═════", " Look, don't disturb her, she is also resting ━━•☆__🤸‍♂️---❤️ ", "😘 Tell us first what you do 🥺____❤️ ❀❁•════", " Look, don't mention her unnecessarily, okay, she is having rest ━━•☆🤸‍♂️______❤️ ", " Wait, let us call him, Ayesha ji, please come here 🏃━━•☆🤣" , " she on an IB call with someone right now_____🤸‍♂️_😁😁😄" , " Don't disturb Ayesha, she is resting, you understood now, right?______❤️ __🤸‍♂️💜" , " Whenever I see you, whenever I see you, you do something without any reason, do some work ━━•☆❤️ 🏃_______🤸‍♂️" , " her recharge is over, go get it recharged and call her again ━━•☆❤️______❤️____🤸‍♂️" , " Look, I am requesting you again and again not to disturb my mam Ayesha ... please ━━•☆___❤️ ___❤️ 🤸‍♂️ " , " she is having a headache, okay, I understand, now go away from here and don't call her again. ━━•☆❤️_🏃___🤸‍♂️" , " Dude, what useless people they are, you should at least make them work ━━•☆🥺___❤️____🏃__🤸‍♂️" , " First make coffee for Ayesha and then tag her__❤___💜___🤸‍♂️" , " This is too much, why is she not being mentioned again and again, she must be doing some work__❤️__💜━━•☆🤸‍♂️" , "  Don't disturb her, she is busy with Anime, I understand. ━━•☆❤️___❤️___🤸‍♂️" , " Ayesha's data is over, recharge 1GB now━━•☆❤️___🤸‍♂️💜" , " She is talking to her brother on call 😁😍" , " Ayesha ji is eating food 😁💜💠 " , " _❤️ If you guys have some work to do, then do it. Ayesha ji is cleaning the utensils_❤️ _❤️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
