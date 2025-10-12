module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61577148331416") {
    var aid = ["61577148331416"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Abee Mere se baat Kar ..Ayesha Bbby Ko mention kyu kar rhe ho😒" , "Kya Hua Ayesha bby ko q Bula Rhe Ho?" , "Wo Shayad Busy h😐🙄" , "Tujhe sunai nhi deta mere admin ko tang na kr😒😒" , "Mere Ayesha BBY ko tang naa karo" , "Abee Bola na mere Admin ko bar bar mention mat karo ek bar me smjh nahi ata" , "Kya kaam hai mujhe bol" , "Ek Baar me samjh ni ata kyu mention kar rhe ho Ayesha Bby Ko" ];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
