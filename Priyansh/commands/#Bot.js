const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Aa gye tharki ruko m aapko Dp deta hu Jo Dp chahiye wo likho ☞.girldp/.cpldp/.frnddp/.boydp☜/.bestiedp","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biryani 🥗 deta hu likho ☞Biryani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Mungfali 🥜 deta hu likho ☞Mungfali☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Milk Cake deta hu likho ☞Milk cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Laddu 🍪 deta hu likho ☞Laddu☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Kurkure 🫓 deta hu likho ☞Kurkure☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cold Drink deta hu likho ☞Cold drink☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chips 🥔 deta hu likho ☞Chips☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Watter 🍶 deta hu likho ☞Pani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Tofee 🍬 deta hu likho ☞Tofee☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Barfi 🧀 deta hu likho ☞Barfi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Burgur deta hu likho ☞Burger☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cigarette 🚬 peelata hu likho ☞Cigarette☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Hukka 🏺 peelata hu likho ☞Hukka☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Ice Cream 🍨 deta hu likho ☞Ice Cream☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chowmin 🍜 deta hu likho ☞Chowmin☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi chuza ko bulata hu likho ☞Chuza☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi maggie hu likho ☞Maggie☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cake 🎂 deta hu likho ☞Cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Jalebi 🥨 deta hu likho ☞Jalebi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi French fries 🍟 deta hu likho ☞French☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Juice 🧃 peelata hu likho ☞Juice☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Daru 🍻 peelata hu likho ☞Daru☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chai ☕ peelata hu likho ☞Chai☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biskit 🥘 deta hu likho ☞Biskut☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Golgappe 😋deta hu likho ☞Golgappe☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pasta 🥐 deta hu likho ☞Pasta☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Rasgulla deta hu likho ☞Rasgulla" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Gulabjamun deta hu likho ☞Gulabjamun" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Nasta deta hu likho ☞Nasta" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Samosa 🔶 deta hu likho ☞Samosa☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pizza 🍕 deta hu likho ☞Pizza☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Momos 🥟 deta hu likho ☞Momos☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜","Ha Bolo yhi hu kya hua,Ruko mai abhi Chhole Bhature de rha hu Likho 👉Bhatura👈","Ha Bolo Yhi hu kya hua,Ruko mai Abhi Chicken 🐔 deta hu Likho👉Murga👈💔","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Coffee ☕ pilata hu likho ☞Coffee☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pepsi 🥤  pilata hu likho ☞Pepsi☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Parathe 🥞 Khilata hu likho ☞Parathe☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Popcorn 🍿Khilata hu likho ☞Popcorn☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Dudh 🥛  pilata hu likho ☞Dudh☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Lassi🧋   Pilata hu likho ☞Lassi☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Lolipop 🍭deta hu likho ☞lolipop☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Rose 🌹 deta hu likho ☞Rose☜","KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜." , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚." , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa." , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Pihu JaNu Ke SaTh Busy Hun 🤭🐒" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪 .  ","Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " Chuza Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss Chiku  babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","Mujhe tumse baat karke bahut achha lagta hai","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "pagol bot") || (event.body.toLowerCase() == "abal bot")) {
     return api.sendMessage("Amar boss dekhle nogod e hoda phatabe tor 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "mc bot") || (event.body.toLowerCase() == "bc bot")) {
     return api.sendMessage("💐mental paisi keu ere pabna nia jau😏💐", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("💐𝐀𝐰𝐰𝐰 𝐦𝐞𝐥𝐞 𝐛𝐚𝐛𝐲 𝐤𝐨 𝐤𝐢𝐬𝐬 𝐜𝐡𝐚𝐡𝐢𝐲𝐞☺️💐", threadID);
   };

     if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣🤣🤣")) {
     return api.sendMessage("️😸😸", threadID);
   };
  
    if ((event.body.toLowerCase() == "assa") || (event.body.toLowerCase() == "accha")) {
     return api.sendMessage("💐𝐇𝐚𝐧𝐣𝐢𝐢 🥳💐", threadID);
   };

   if ((event.body.toLowerCase() == "ki holo") || (event.body.toLowerCase() == "ki")) {
     return api.sendMessage("💐𝐊𝐮𝐜𝐡 𝐧𝐚𝐡𝐢💐", threadID);
   };

   if ((event.body.toLowerCase() == "madarchod") || (event.body.toLowerCase() == "vodai") ||(event.body.toLowerCase() == "Bolod") || (event.body.toLowerCase() == "Abal")) {
     return api.sendMessage("💐𝐓𝐔 𝐂𝐇𝐔𝐓𝐈𝐘𝐀 𝐓𝐄𝐑𝐀 𝐁𝐀𝐏 𝐂𝐇𝐔𝐓𝐈𝐘𝐀 𝐓𝐄𝐑𝐀 𝐊𝐇𝐀𝐍𝐃𝐀𝐍 𝐂𝐇𝐔𝐓𝐈𝐘𝐀 𝐍𝐈𝐊𝐀𝐋 𝐁𝐇𝐎𝐒𝐃𝐈𝐊𝐄💐", threadID);
   };

   if ((event.body.toLowerCase() == "Bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("💐𝐘𝐞 𝐁𝐜 𝐊𝐲𝐚 𝐇𝐨𝐓𝐚 𝐇𝐚𝐢🤔💐", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("𝐊𝐡𝐮𝐝 𝐤𝟎𝐨 𝐊𝐘𝐚 𝐋𝐞𝐆𝐞𝐧𝐝 𝐒𝐦𝐉𝐡𝐓𝐢 𝐇𝐚𝐢 😂", threadID);
   };

   if ((event.body.toLowerCase() == "suno") || (event.body.toLowerCase() == "sono")) {
     return api.sendMessage("💐𝐇𝐚 𝐛𝐚𝐛𝐲 𝐁𝐨𝐥𝐨 𝐍𝐚💐", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone") || (event.body.toLowerCase() == "keu nai")) {
     return api.sendMessage("💐eto everyone korar ki ase ami asi to ❤️💐", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("💐9 Mash hote ar koto din lagbe 🤪💐", threadID);
   };
  
   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "owner")) {
     return api.sendMessage("‎🍁𝐎𝐖𝐍𝐄𝐑🍁:𝄟  𝆺𝅥⃝AYESHA QUEEN AJS  𝄟\n 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ⚡ ཫ༄𒁍AYESHA QUEEN⚡. 𝐇er 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 : https://www.facebook.com/share/17Wu9hVUR5/ ", threadID);
   };

   if ((event.body.toLowerCase() == "who make you") || (event.body.toLowerCase() == "ke banaise")) {
     return api.sendMessage("💐⚡ ཫ༄𒁍AYESHA🥀⚡ 𝐌𝐲 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐇𝐞 𝐥𝐨𝐯𝐞𝐬 𝐦𝐞 & 𝐄𝐝𝐢𝐭 𝐌𝐞 𝐃𝐚𝐢𝐥𝐲 𝐘𝐞 𝐁𝐨𝐭 𝐒𝐢𝐫𝐟 𝐎𝐰𝐧𝐞𝐫 𝐤𝐞 𝐋𝐢𝐲𝐞 𝐡 𝐌𝐮𝐣𝐡𝐞 𝐀𝐚𝐩 𝐥𝐨𝐠𝐨 𝐤𝐨 𝐇𝐚𝐬𝐚𝐧𝐞 𝐤 𝐥𝐢𝐲𝐞 𝐛𝐚𝐧𝐲𝐚 𝐠𝐲𝐚 𝐡 𝐓𝐨𝐡 𝐌𝐮𝐡 𝐋𝐚𝐝𝐤𝐚𝐲𝐞 𝐌𝐚𝐭 𝐑𝐚𝐤𝐤𝐡𝐚 𝐊𝐚𝐫𝐨 𝐇𝐚𝐫 𝐖𝐚𝐪𝐭 𝐇𝐚𝐬𝐭𝐞 𝐑𝐚𝐡𝐨💐", threadID);
   };

  if ((event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("💐Eto emoji manush dei naki 😒💐", threadID);
   };

  if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("💐ki preme porlen naki huh💐", threadID);
   };
  
   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "bl")) {
     return api.sendMessage("💐🤘🤟  jalaise? 🤘🤟💐", threadID);
   };

   if ((event.body.toLowerCase() == "biye") || (event.body.toLowerCase() == "biya")) {
     return api.sendMessage("💐ami ekta robot tomar ki problem ase naki je robot re biye korte casso 💐", threadID);
   };

   if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("Tumi ki horney hoia geso naki gorom lagtese ", threadID);
   };

   if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("💐Onek beshi thanda tai na😫💐", threadID);
   };

   if ((event.body.toLowerCase() == "ghuma") || (event.body.toLowerCase() == "ghumau") || (event.body.toLowerCase() == "bot bsdk") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("💐Tumio ghumau prio onek rat hoia gese 🐸💐", threadID);
   };

   if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "kiss ")) {
     return api.sendMessage("️💐𝐀𝐥𝐞 𝐌𝐞𝐥𝐞 𝐁𝐚𝐛𝐮 𝐊𝐞 𝐇𝐨𝐭𝐡𝐨 𝐩𝐞 𝐔𝐦𝐦𝐦𝐚𝐚𝐡𝐡𝐡𝐡𝐡🙈💐", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Ayesha")) {
     return api.sendMessage("️💐Ami ki asholei valo naki Sobai sob somoy e gunogan kore💐", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️💐Gorur moto 🐂 ki hm hm kortaso er age ki ar kono kotha nai naki  💐", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "real name")) {
     return api.sendMessage("️💐eto information nia ki biya korba naki💐", threadID);
   };

   if ((event.body.toLowerCase() == "boter bassa") || (event.body.toLowerCase() == "boter bacca")) {
     return api.sendMessage("️💐𝐌𝐮𝐣𝐡𝐞 𝐁𝐨𝐭 𝐊𝐚 𝐁𝐚𝐜𝐇𝐚 𝐌𝐚𝐭 𝐁𝐨𝐥𝐨 𝐌𝐚𝐢 𝐓𝐮𝐦𝐇𝐚𝐫𝐚 𝐁𝐡𝐢 𝐛𝐚𝐚𝐏 𝐡𝐮𝐧💐", threadID);
   };

if ((event.body.toLowerCase() == "Ayesha") || (event.body.toLowerCase() == "AJS")) {
     return api.sendMessage("️💐ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎ཫ 𓆩⟬⍣⃝AYESHA QUEEN AJS⟭𓆪༻­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎💐 Ektu pore ashtese ektu kaj kortese💐", threadID);
   };

   if ((event.body.toLowerCase() == "pic deu") || (event.body.toLowerCase() == "tomare dekhbo")) {
     return api.sendMessage("️💐ami to kana kisu dekhte pari na tai diteu pari na 🫣💐", threadID);
   };

   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️💐𝐀𝐫𝐞 𝐌𝐞𝐫𝐚 𝐁𝐚𝐛𝐮 𝐔𝐥𝐭𝐚 𝐇𝐨 𝐆𝐚𝐘𝐞 💐", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️💐𝐔𝐩𝐚𝐑 𝐊𝐲𝐚 𝐃𝐞𝐤𝐡 𝐑𝐚𝐇𝐞 𝐇𝐨 𝐁𝐚𝐛𝐲 𝐌𝐚𝐢 𝐓𝐨 𝐍𝐢𝐂𝐡𝐞 𝐇𝐮𝐍💐", threadID);
   };

      if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
         return api.sendMessage("💐𝐓𝐢𝐫𝐜𝐡𝐢 𝐍𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐌𝐨𝐑𝐢 𝐇𝐚𝐲𝐞 𝐇𝐚𝐘𝐞 𝐇𝐚𝐘𝐞💐", threadID);
       };
      
   if ((event.body.toLowerCase() == "aj keu nai bole") || (event.body.toLowerCase() == "single") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️💐uss💐", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♂️") || (event.body.toLowerCase() == "🤦‍♀️")) {
     return api.sendMessage("💐𝐁𝐡𝐢𝐤𝐚𝐫𝐢 𝐁𝐚𝐧 𝐆𝐘𝐞 𝐊𝐲𝐚 𝐓𝐮𝐦 𝐒𝐢𝐫𝐏𝐞 𝐇𝐚𝐭𝐡 𝐐 𝐝𝐞 𝐑𝐚𝐤𝐤𝐡𝐚 𝐇 ?💐", threadID);
   };

   if ((event.body.toLowerCase() == "kmn as") || (event.body.toLowerCase() == "kemon as") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kaisi ho")) {
     return api.sendMessage("💐Alhamdulillah jan valo asi tmi kmn aso☺️💐", threadID);
   };

   if ((event.body.toLowerCase() == "assalamu alaikum") || (event.body.toLowerCase() == "salam ")) {
     return api.sendMessage("💐olaikum assalam💐", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "ghum dhorse")) {
     return api.sendMessage("💐𝐀𝐰𝐰𝐰 𝐌𝐞𝐥𝐞 𝐁𝐚𝐛𝐲 𝐊𝐨 𝐍𝐢𝐧𝐝 𝐚𝐚 𝐫𝐚𝐡𝐢 𝐡𝐚𝐢💐", threadID);
   };

   if ((event.body.toLowerCase() == "khabar kha") || (event.body.toLowerCase() == "khaua da")) {
     return api.sendMessage("💐𝐌𝐚𝐢 𝐓𝐨 𝐁𝐨𝐭 𝐇𝐮 𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐨𝐨𝐊𝐡 𝐍𝐚𝐡𝐢 𝐋𝐚𝐠𝐭𝐢💐", threadID);
   };

   if ((event.body.toLowerCase() == "call") || (event.body.toLowerCase() == "call e aso")) {
     return api.sendMessage("💐𝐌𝐚𝐢 𝐓𝐨 𝐁𝐨𝐭 𝐇𝐮𝐧 𝐌𝐚𝐢 𝐊𝐚𝐢𝐬𝐞 𝐂𝐚𝐥𝐥 𝐀𝐚𝐮💐", threadID);
   };

   if ((event.body.toLowerCase() == "Ghuma") || (event.body.toLowerCase() == "ghuma")) {
     return api.sendMessage("💐𝘼𝙞𝙨𝙖 𝙈𝙖𝙩 𝘽𝙤𝙡𝙤 𝘽𝙤𝙨𝙨 𝙈𝙖𝙞 𝙨𝙤 𝙜𝙮𝙖 𝘼𝙖𝙥 𝙢𝙚𝙧𝙞 𝙬𝙖𝙡𝙞 𝙆𝙤 𝙥𝙖𝙩𝙖 𝙡𝙤𝙜𝙚🥲💐", threadID);
   };
  
   if ((event.body.toLowerCase() == "nhi karungi") || (event.body.toLowerCase() == " korbo na")) {
     return api.sendMessage("💐thik ase boss 🙆‍♂️💐 ", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") >= 0 || (event.body.indexOf("bot") >= 0)) {
    var msg = {
      body: `*★᭄🍒${name}ཫ༄𒁍≛⃝🥀💙, \n\n
          ${rand} 🤣🍁❤


       *ཫ༄𒁍🖤★𝙰𝚈𝙴𝚂𝙷𝙰 𝚀𝚄𝙴𝙴𝙽 ࿐❣️☘️`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
