const {cmd , commands} = require('../command')

cmd({
    pattern: "rukshan",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `

ABOUT ME – RED SAMURAY

Name: Rukshan
Alias: RED SAMURAY
Age: 19+
Location: Gampaha, Sri Lanka
Languages: Sinhala, English, Currently Learning Japanese
Profession: Creative Technologist, Bot Developer, Digital Designer
Team: LEGION OF DOOM
Dream Destinations: Japan & South Korea
Life Goal: Build a powerful future through tech and business — create Sri Lanka’s largest pawnshop network and the biggest vehicle yard, while giving my mother the life she deserves.


---

WHO I AM

I’m not just another face in the crowd — I’m RED SAMURAY, a self-made digital warrior. Born in the shadows of struggle, but trained in the light of purpose. I live not to follow trends, but to create legacies. I’ve made a vow: To rise, no matter how deep the fall.


---

WHAT I DO

Web Development:
I craft and code with HTML & JavaScript — from building websites to creating powerful panels and bot interfaces.

Bot Creator & DevOps:
I’m the mind behind RED-SAMURAY-MD — a multi-functional WhatsApp bot featuring custom commands, automation, and system control. From .news to .apk, my bot does it all.

Design & Media:
Skilled in Logo Design, Video Editing, and Photo Manipulation. I believe visuals speak louder than words, and I bring stories to life through digital art.

Tech & AI Enthusiast:
I explore AI tools, automation systems, and even ethical hacking. I stay updated, learn fast, and adapt faster.

Purpose-Driven Learning:
Currently studying Japanese to prepare for my next journey — either to Japan or South Korea, where I plan to expand both my knowledge and my empire.



---

MY PHILOSOPHY

> “When the world turns dark, I don’t hide — I evolve. I am not afraid to walk alone in the shadows. I am the shadow. I am RED SAMURAY.”


====================••••••••==========
*මමත් ආසයි...🙂*

*හැමදේම කියන්න කෙනෙක් හිටියා නම්,*

*හැමවෙලේම මැසේජ් කරන්න,*

*කරදර කර කර හොයල බලන්න කෙනෙක් හිටියා නම්,*

*පරිස්සමෙන් ඉන්න මේ දවස් වල*
*මට ඉන්නෙ ඔයා විතරනෙ කියන්න කෙනෙක් හිටියා නම්,*

*මට දැනෙන තරම් මාව දැනෙන කෙනෙක් හිටියා නම්,*

*ඔව් ආදරේ කියන්නෙ*
*පරිස්සම් කරන එකට තමයි,*
*පරිස්සම් කරන්නෙ ආදරේ හින්දා තමයි,*

*ඉතින් ආදරේ කියන්නෙම පරිස්සම් කරන එකට තමයි...!❤‍🩹🥺*

*ස්තූතිය....!*

> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ꜱᴏʟᴏ ʟᴇᴠᴇʟɪɴɢ ᴊɪɴʜᴜᴡᴀ
> ® 𝐃. 𝐑𝐔𝐊𝐒𝐇𝐀𝐍⛩️
`
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/9gnp53.jpeg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
