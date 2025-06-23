const config = require('../settings')
const os = require('os')
const fs = require('fs')
const prefix = config.PREFIX
const { cmd, commands } = require('../lib/command')
const devlopernumber = "94711453361"
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson,clockString, jsonformat} = require('../lib/functions')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get, updb,updfb } = require("../lib/database")
const {
    default: makeWASocket,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')


 function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 

const reportedMessages = {}
//const isBan = banUser.includes(mek.sender)
	    

	
var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"


cmd({
  pattern: "alive",
  react: "🎀",
  alias: ["big thaks","system","speed1","owner"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const cap = `🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️

╭───═❮ *📜 ᴍᴇɴᴜ ʟɪsᴛ 📜* ❯═───❖
│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}
│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* ${runtime(process.uptime())}
│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* ${hostname}
╰━━━━━━━━━━━━━━━┈⊷`
var vajiralod = [
"LOADING ●●○○○○",
"LOADING ●●●●○○",
"LOADING ●●●●●●",
"`🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	


if (config.MODE === 'nonbutton') {

const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} I,AM ALIVE NOW──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){

menuc += `• *${commands[i].pattern}*\n`
}}};
  menuc += `\n⭓ *🚀Version:* ${require("../package.json").version}


*⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB


*🕒Runtime:* ${runtime(process.uptime())}


*📍Platform:* ${hostname}

🎀 i am zanta-xmd, a whatsapp bot based on nodejs java script. i was created based on code, and the person who created me is suranga chamith official 💖
                    
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`

let menuc1 = `*◈╾──────${category} SEARCH COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){

menuc1 += `• *${commands[i].pattern}*\n`
}}};
  menuc1  += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`



let menuc2 = `*◈╾──────${category} CONVERT COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){

menuc2 += `• *${commands[i].pattern}*\n`
}}};
  menuc2 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`


let menuc3 = `*◈╾──────${category} LOGO COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖 \n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
  if(!commands[i].dontAddCommandList){

menuc3 += `• *${commands[i].pattern}*\n`
}}};
  menuc3 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`


let menuc4 = `*◈╾──────${category} MAIN COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){

menuc4 += `• *${commands[i].pattern}*\n`
}}};
  menuc4 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc5 = `*◈╾──────${category} GROUP COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
  if(!commands[i].dontAddCommandList){

menuc5 += `• *${commands[i].pattern}*\n`
}}};
  menuc5 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

let menuc6 = `*◈╾──────${category} BUG COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
  if(!commands[i].dontAddCommandList){

menuc6 += `• *${commands[i].pattern}*\n`
}}};
  menuc6 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc7 = `*◈╾──────${category} OTHER COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
  if(!commands[i].dontAddCommandList){

menuc7 += `• *${commands[i].pattern}*\n`
}}};
  menuc7 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc8 = `*◈╾──────${category} MOVIE COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
  if(!commands[i].dontAddCommandList){

menuc8 += `• *${commands[i].pattern}*\n`
}}};
  menuc8 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `` },
              carouselMessage: {
                cards: [
                  {
                    
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/iex8ou.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: '' },
                    nativeFlowMessage: {
                      
                    },
                  },
                  {                   

header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/e0o2mw.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc1,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {

                    },
                  },
                  {                   

header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/p1t4kk.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc2,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },
                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/ird8ce.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc3,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    

                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/cvkpl6.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc4,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    
                      {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/50rv6h.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc5,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },        
	                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/l72poi.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc6,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },         
	                  {             
	                  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/wm37xc.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc8,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },         
	                  {                                                 
			  			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/q7e5va.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc7,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    		
                ],
                            messageVersion: 1,
                        },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363421846535301@newsletter',
                         newsletterName: `🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️`,
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: m })
        
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
    

} if (config.MODE === 'button') {


        let sections = [{
                title: 'ᴛ💖 ᴀᴘ ᴏɴ ᴛʜᴇ ᴍᴇɴᴜ ʏᴏᴜ ᴘʀᴇꜰᴇʀ ꜰʀᴏᴍ ʜᴇʀᴇ ᴀɴᴅ ᴘʀᴇꜱꜱ ᴛʜᴇ ꜱᴇʟᴇᴄᴛ ʙᴜᴛᴛᴏɴ. 💖',
                rows: [{
                        title: 'DOWNLOAD MENU',
                        description: `Download commands`,
                        id: `${prefix}downmenu`
                    },
                    {
                        title: `SEARCH MENU`,
                        description: 'Search commands',
                        id: `${prefix}searchmenu`
                    },
		    {
                        title: `CONVERT MENU`,
                        description: 'Convert commands',
                        id: `${prefix}convertmenu`
                    },
                    {
                        title: `MAIN MENU`,
                        description: 'Convert commands',
                        id: `${prefix}mainmenu`
                    },
		    {
                        title: `GROUP MENU`,
                        description: 'Group commands',
                        id: `${prefix}groupmenu`
                    },
                    {
                        title: `LOGO MENU`,
                        description: 'Logo commands',
                        id: `${prefix}logomenu`
                    },
		    {
                        title: `BUG MENU`,
                        description: 'Bug commands',
                        id: `${prefix}bugmenu`
                    },
                    {
                        title: `MOVIE MENU`,
                        description: 'Movie commands',
                        id: `${prefix}moviemenu`
                    },   
		    {
                        title: `OTHER MENU`,
                        description: 'Other commands',
                        id: `${prefix}othermenu`
                    },      
                ]
            }
        ]

        let listMessage = {
            title: 'Click Here⎙ 💖',
            sections
        };
        conn.sendMessage(from, {
            image: { url: config.LOGO },
    caption: cap,
    footer: config.FOOTER,
                buttons: [
			{
                    buttonId: `${prefix}alive`,
                    buttonText: {
                        displayText: 'ALIVE 💖'
                    },
                },
		{
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: 'PING 💖'
                    },
                },	
                {
                    buttonId: 'action',
                    buttonText: {
                        displayText: 'ini pesan interactiveMeta'
                    },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify(listMessage),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        }, {
            quoted: m
        });
	
}
	
} catch (e) {
reply()
l(e)
}
})   











//============================================================================	

cmd({
    pattern: "downloadmenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){

menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "moviemenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
  if(!commands[i].dontAddCommandList){

menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "searchmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "convertmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "logomenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
  pattern: "mainmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
  pattern: "groupmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
  pattern: "bugmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

  
        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

  
        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
 
//============================================================================