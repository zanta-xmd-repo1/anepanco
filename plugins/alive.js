
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["alive", "online"],
    desc: "Bot online test",
    react: "⚡",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let cap = `
╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⛩️ 𝐎𝐰𝐧𝐞𝐫: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ☺️*
┃◈└───────────┈⊷
╰──────────────┈
┏━❮ 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ❯━
┃◈┃🤖 ʙᴏᴛ ɴᴀᴍᴇ :ᴢᴀɴᴛᴀ-xᴍᴅ ᴏꜰᴄ
┃◈┃🔖 ᴠᴇʀsɪᴏɴ : 1.0
┃◈┃📟 ᴘʟᴀᴛғᴏʀᴍ : Linux
┃◈┃👨‍💻ᴏᴡɴᴇʀ: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ 
┃◈┃📆 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())} 
┃◈┃📈ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃◈┗━━━━━━━━━━━━━━𖣔𖣔
╰──────────────┈⊷
┏━❮🔢𝗥𝗘𝗟𝗣𝗬 𝗡𝗨𝗠𝗕𝗘𝗥❯━
┃◈╭─────────────·
┃◈┃•𝟏 || 𝐙𝐀𝐍𝐓𝐀 𝐗-𝐌𝐃 𝐒𝐏𝐄𝐄𝐃
┃◈┃•𝟐 || 𝐙𝐀𝐍𝐓𝐀 𝐗-𝐌𝐃 𝐌𝐄𝐍𝐔
┃◈└───────────┈⊷
┗━━━━━━━━━━━━━━𖣔𖣔
> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

const aliveMessage = await conn.sendMessage(from, { 
            video: { url: `https://files.catbox.moe/54zqi9.mp4` }, 
            mimetype: "video/mp4",
            ptv: true,
            contextInfo: {
                externalAdReply: {
                    title: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
                    body: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
                    mediaType: 1,
                    sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28/226",
                    thumbnailUrl: "https://files.catbox.moe/56gtnw.jpg",
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });

var vajiralod = [
"LOADING ●●○○○○",
"LOADING ●●●●○○",
"LOADING ●●●●●●",
"`COMPLETED ✅`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	

        const sentMsg = await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/68rzgj.jpg` },
            caption: cap,
            contextInfo: {
                mentionedJid: ['94727163302@s.whatsapp.net'],
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421846535301@newsletter',
                    newsletterName: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                    body: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                    mediaType: 1,
                    sourceUrl: "https://files.catbox.moe/56gtnw.jpg",
                    thumbnailUrl: 'https://files.catbox.moe/17wyje.jpg',
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });

        const aliveMessageID = sentMsg.key.id; // Save the alive message ID

        // Define all menu lists
        const menu1 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*==❒⁠⁠⁠⛩️ ⁠𝐃𝐎𝐖𝐍𝐋𝐎𝐃 𝐌𝐄𝐍𝐔 📥 ❒==*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛ�depart: true,
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

🌐 *Social Media Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: facebook
│ 🏷️ᴜsᴇ: prefix facebook [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: mediafire
│ 🏷️ᴜsᴇ: prefix mediafire [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tiktok
│ 🏷️ᴜsᴇ: prefix tiktok [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: twitter
│ 🏷️ᴜsᴇ: prefix twitter [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: insta
│ 🏷️ᴜsᴇ: prefix insta [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: apk
│ 🏷️ᴜsᴇ: prefix apk [app]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: img
│ 🏷️ᴜsᴇ: prefix img [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tt2
│ 🏷️ᴜsᴇ: prefix tt2 [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: pins
│ 🏷️ᴜsᴇ: prefix pins [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: apk2
│ 🏷️ᴜsᴇ: prefix apk2 [app]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: fb2
│ 🏷️ᴜsᴇ: prefix fb2 [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: pinterest
│ 🏷️ᴜsᴇ: prefix pinterest [url]
╰────────────────────✵✵

🎵 *Music/Video Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: spotify
│ 🏷️ᴜsᴇ: prefix spotify [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: play
│ 🏷️ᴜsᴇ: prefix play [song]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: play2-10
│ 🏷️ᴜsᴇ: prefix play2-10 [song]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: audio
│ 🏷️ᴜsᴇ: prefix audio [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: video
│ 🏷️ᴜsᴇ: prefix spotify
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: .spotify
│ 🏷️ᴜsᴇ: prefix video [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: videos
│ 🏷️ᴜsᴇ: prefix videos [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ytmp3
│ 🏷️ᴜsᴇ: prefix ytmp3 [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ytmp4
│ 🏷️ᴜsᴇ: prefix ytmp4 [url]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: song
│ 🏷️ᴜsᴇ: prefix song [name]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: epi
│ 🏷️ᴜsᴇ: prefix epi [name]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: darama
│ 🏷️ᴜsᴇ: prefix darama [name]
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;
        const menu2 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ ⛩️ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 👥 ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

 🛠️ *Management Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: grouplink
│ 🏷️ᴜsᴇ: prefix grouplink
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kickall
│ 🏷️ᴜsᴇ: prefix kickall
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kickall2
│ 🏷️ᴜsᴇ: prefix kickall2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kickall3
│ 🏷️ᴜsᴇ: prefix kickall3
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: add
│ 🏷️ᴜsᴇ: prefix add @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: remove
│ 🏷️ᴜsᴇ: prefix remove @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kick
│ 🏷️ᴜsᴇ: prefix kick @user
╰────────────────────✵✵

⚡ *Admin Tools*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: promote
│ 🏷️ᴜsᴇ: prefix promote @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: demote
│ 🏷️ᴜsᴇ: prefix demote @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: dismiss
│ 🏷️ᴜsᴇ: prefix dismiss
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: revoke
│ 🏷️ᴜsᴇ: prefix revoke
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: mute
│ 🏷️ᴜsᴇ: prefix mute [time]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: unmute
│ 🏷️ᴜsᴇ: prefix unmute
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: lockgc
│ 🏷️ᴜsᴇ: prefix lockgc
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: unlockgc
│ 🏷️ᴜsᴇ: prefix unlockgc
╰────────────────────✵✵

🏷️ *Tagging Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tag
│ 🏷️ᴜsᴇ: prefix tag @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: hidetag
│ 🏷️ᴜsᴇ: prefix hidetag [message]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tagall
│ 🏷️ᴜsᴇ: prefix tagall
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tagadmins
│ 🏷️ᴜsᴇ: prefix tagadmins
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: invite
│ 🏷️ᴜsᴇ: prefix invite
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;
        const menu3 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒⁠⁠⁠⛩️ ⁠𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 😹 ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

🎭 *Interactive Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: shapar
│ 🏷️ᴜsᴇ: prefix shapar
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: rate
│ 🏷️ᴜsᴇ: prefix rate @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: insult
│ 🏷️ᴜsᴇ: prefix insult @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: hack
│ 🏷️ᴜsᴇ: prefix hack @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ship
│ 🏷️ᴜsᴇ: prefix ship @user1 @user2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: character
│ 🏷️ᴜsᴇ: prefix character
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: pickup
│ 🏷️ᴜsᴇ: prefix pickup
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: joke
│ 🏷️ᴜsᴇ: prefix joke
╰────────────────────✵✵

😂 *Reaction Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: hrt
│ 🏷️ᴜsᴇ: prefix hrt
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: hpy
│ 🏷️ᴜsᴇ: prefix hpy
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: syd
│ 🏷️ᴜsᴇ: prefix syd
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: anger
│ 🏷️ᴜsᴇ: prefix anger
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: shy
│ 🏷️ᴜsᴇ: prefix shy
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kiss
│ 🏷️ᴜsᴇ: prefix kiss
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: mon
│ 🏷️ᴜsᴇ: prefix mon
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: cunfuzed
│ 🏷️ᴜsᴇ: prefix cunfuzed
╰────────────────────✵✵


> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;
        const menu4 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒⁠⁠⁠⁠⛩️ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 💀 ❒⁠⁠⁠⁠=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*
⚠️ *Restricted Commands*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: block
│ 🏷️ᴜsᴇ: prefix block @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: unblock
│ 🏷️ᴜsᴇ: prefix unblock @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: fullpp
│ 🏷️ᴜsᴇ: prefix fullpp [img]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: setpp
│ 🏷️ᴜsᴇ: prefix setpp [img]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: restart
│ 🏷️ᴜsᴇ: prefix restart
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: shutdown
│ 🏷️ᴜsᴇ: prefix shutdown
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: updatecmd
│ 🏷️ᴜsᴇ: prefix updatecmd
╰────────────────────✵✵

ℹ️ *Info Tools*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: gjid
│ 🏷️ᴜsᴇ: prefix gjid
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: jid
│ 🏷️ᴜsᴇ: prefix jid @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: listcmd
│ 🏷️ᴜsᴇ: prefix listcmd
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: allmenu
│ 🏷️ᴜsᴇ: prefix allmenu
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: botabout
│ 🏷️ᴜsᴇ: prefix botabout
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: botinfo
│ 🏷️ᴜsᴇ: prefix botinfo
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: system
│ 🏷️ᴜsᴇ: prefix system
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: dinu
│ 🏷️ᴜsᴇ: prefix dinu
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;
       const menu5 = `
◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒⁠⁠⁠⁠⛩️ 𝐀𝐈 𝐌𝐄𝐍𝐔 😑 ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

💬 *Chat AI*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ai
│ 🏷️ᴜsᴇ: prefix ai [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: gpt3
│ 🏷️ᴜsᴇ: prefix gpt3 [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ai2
│ 🏷️ᴜsᴇ: prefix ai2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: gemini2
│ 🏷️ᴜsᴇ: prefix gemini2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: totext
│ 🏷️ᴜsᴇ: prefix totext
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: botai
│ 🏷️ᴜsᴇ: prefix botai
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: geminj2
│ 🏷️ᴜsᴇ: prefix gemini2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: blackbox
│ 🏷️ᴜsᴇ: prefix blackbox
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: meta
│ 🏷️ᴜsᴇ: prefix meta [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: gpt2
│ 🏷️ᴜsᴇ: prefix gpt2 [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: applesiri
│ 🏷️ᴜsᴇ: prefix applesiri
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: gptmini
│ 🏷️ᴜsᴇ: prefix gptmini [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: gpt
│ 🏷️ᴜsᴇ: prefix gpt [query]
╰────────────────────✵✵

🖼️ *Image AI*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: aiimgs
│ 🏷️ᴜsᴇ: prefix aiimgs
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: aiimgs2
│ 🏷️ᴜsᴇ: prefix aiimgs2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: aiimgs3
│ 🏷️ᴜsᴇ: prefix aiimgs3
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: imagine
│ 🏷️ᴜsᴇ: prefix imagine [text]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: imagine3
│ 🏷️ᴜsᴇ: prefix imagine3 [name]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: imagine4
│ 🏷️ᴜsᴇ: prefix imagine4 [name]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: imagine2
│ 🏷️ᴜsᴇ: prefix imagine2 [text]
╰────────────────────✵✵

🔍 *Specialized*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: blackbox
│ 🏷️ᴜsᴇ: prefix blackbox [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: luma
│ 🏷️ᴜsᴇ: prefix luma [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: dj
│ 🏷️ᴜsᴇ: prefix dj [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: khan
│ 🏷️ᴜsᴇ: prefix khan [query]
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;
        const menu6 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ ⛩️𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔 🐉 ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🐉𝐐𝐔𝐄𝐄𝐍 𝐃𝐈𝐍𝐔 𝐌𝐃 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓🐉」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ᴄʏʙᴇʀ ᴅɪɴᴜ ɪᴅ*
*╰──────────●●*
🖼️ *𝐈mages*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: fack
│ 🏷️ᴜsᴇ: prefix fack
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: dog
│ 🏷️ᴜsᴇ: prefix dog
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: awoo
│ 🏷️ᴜsᴇ: prefix awoo
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: garl
│ 🏷️ᴜsᴇ: prefix garl
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: waifu
│ 🏷️ᴜsᴇ: prefix waifu
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: neko
│ 🏷️ᴜsᴇ: prefix neko
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: megnumin
│ 🏷️ᴜsᴇ: prefix megnumin
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: maid
│ 🏷️ᴜsᴇ: prefix maid
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: loli
│ 🏷️ᴜsᴇ: prefix loli
╰────────────────────✵✵

🎭 *Characters*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: animegirl
│ 🏷️ᴜsᴇ: prefix animegirl
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: animegirl1-5
│ 🏷️ᴜsᴇ: prefix animegirl1
│ 🏷️ᴜsᴇ: prefix animegirl2
│ 🏷️ᴜsᴇ: prefix animegirl3
│ 🏷️ᴜsᴇ: prefix animegirl4
│ 🏷️ᴜsᴇ: prefix animegirl5
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: anime1-5
│ 🏷️ᴜsᴇ: prefix anime1
│ 🏷️ᴜsᴇ: prefix anime2
│ 🏷️ᴜsᴇ: prefix anime3
│ 🏷️ᴜsᴇ: prefix anime4
│ 🏷️ᴜsᴇ: prefix anime5
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: malaysia
│ 🏷️ᴜsᴇ: prefix vietnam
│ 🏷️ᴜsᴇ: prefix korea
│ 🏷️ᴜsᴇ: prefix indonesia
│ 🏷️ᴜsᴇ: prefix japan
│ 🏷️ᴜsᴇ: prefix china
│ 🏷️ᴜsᴇ: prefix asupan
│ 🏷️ᴜsᴇ: prefix thailand
│ 🏷️ᴜsᴇ: prefix gore
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: foxgirl
│ 🏷️ᴜsᴇ: prefix foxgirl
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: naruto
│ 🏷️ᴜsᴇ: prefix naruto
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 🗿*
`;

        const menu7 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ ⛩️ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🛠️ ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*
🖼️ *Media*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: sticker
│ 🏷️ᴜsᴇ: prefix sticker [img]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: sticker2
│ 🏷️ᴜsᴇ: prefix sticker2 [img]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: emojimix
│ 🏷️ᴜsᴇ: prefix emojimix 😎+😂
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: take
│ 🏷️ᴜsᴇ: prefix take [name,text]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tomp3
│ 🏷️ᴜsᴇ: prefix tomp3 [video]
╰────────────────────✵✵

📝 *Text*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: fancy
│ 🏷️ᴜsᴇ: prefix fancy [text]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tts
│ 🏷️ᴜsᴇ: prefix tts [text]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: trt
│ 🏷️ᴜsᴇ: prefix trt [text]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: base64
│ 🏷️ᴜsᴇ: prefix base64 [text]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: unbase64
│ 🏷️ᴜsᴇ: prefix unbase64 [text]
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

        const menu8 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=;;⛩️ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 🫗 =*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

🕒 *Utilities*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: timenow
│ 🏷️ᴜsᴇ: prefix timenow
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: date
│ 🏷️ᴜsᴇ: prefix date
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: count
│ 🏷️ᴜsᴇ: prefix count [num]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: calculate
│ 🏷️ᴜsᴇ: prefix calculate [expr]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: countx
│ 🏷️ᴜsᴇ: prefix countx
╰────────────────────✵✵

🎲 *Random*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: flip
│ 🏷️ᴜsᴇ: prefix flip
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: coinflip
│ 🏷️ᴜsᴇ: prefix coinflip
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: rcolor
│ 🏷️ᴜsᴇ: prefix rcolor
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: roll
│ 🏷️ᴜsᴇ: prefix roll
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: fact
│ 🏷️ᴜsᴇ: prefix fact
╰────────────────────✵✵

🔍 *Search*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: define
│ 🏷️ᴜsᴇ: prefix define [word]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: news
│ 🏷️ᴜsᴇ: prefix news [query]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: movie
│ 🏷️ᴜsᴇ: prefix movie [name]
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: weather
│ 🏷️ᴜsᴇ: prefix weather [loc]
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

             const menu9 = `
❢◥ ▬▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬▬ ◤❢
*=❒ ⛩️ 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𝐌𝐄𝐍𝐔 😑 ❒=*
❢◥ ▬▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

❤️‍🩹 *Affection*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: cuddle
│ 🏷️ᴜsᴇ: prefix cuddle @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: hug
│ 🏷️ᴜsᴇ: prefix hug @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kiss
│ 🏷️ᴜsᴇ: prefix kiss @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: lick
│ 🏷️ᴜsᴇ: prefix lick @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: pat
│ 🏷️ᴜsᴇ: prefix pat @user
╰────────────────────✵✵

😂 *Funny*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: bully
│ 🏷️ᴜsᴇ: prefix bully @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: bonk
│ 🏷️ᴜsᴇ: prefix bonk @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: yeet
│ 🏷️ᴜsᴇ: prefix yeet @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: slap
│ 🏷️ᴜsᴇ: prefix slap @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: kill
│ 🏷️ᴜsᴇ: prefix kill @user
╰────────────────────✵✵

😊 *Expressions*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: blush
│ 🏷️ᴜsᴇ: prefix blush @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: smile
│ 🏷️ᴜsᴇ: prefix smile @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: happy
│ 🏷️ᴜsᴇ: prefix happy @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: wink
│ 🏷️ᴜsᴇ: prefix wink @user
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: poke
│ 🏷️ᴜsᴇ: prefix poke @user
╰────────────────────✵✵

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

        const menu10 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ ⛩️ 𝐌𝐈𝐍𝐄 𝐌𝐄𝐍𝐔 🗿  ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*
ℹ️ *Bot Info*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ping
│ 🏷️ᴜsᴇ: prefix ping
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: live
│ 🏷️ᴜsᴇ: prefix live
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: alive
│ 🏷️ᴜsᴇ: prefix alive
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: runtime
│ 🏷️ᴜsᴇ: prefix runtime
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: uptime
│ 🏷️ᴜsᴇ: prefix uptime
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: repo
│ 🏷️ᴜsᴇ: prefix repo
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: system
│ 🏷️ᴜsᴇ: prefix system
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: menu
│ 🏷️ᴜsᴇ: prefix menu
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: owner
│ 🏷️ᴜsᴇ: prefix owner
╰────────────────────✵✵

🛠️ *Controls*

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: menu2
│ 🏷️ᴜsᴇ: prefix menu2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: menu3
│ 🏷️ᴜsᴇ: prefix menu3
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: alive2
│ 🏷️ᴜsᴇ: prefix alive2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: alive3
│ 🏷️ᴜsᴇ: prefix alive3
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: repo2
│ 🏷️ᴜsᴇ: prefix repo2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: dinu
│ 🏷️ᴜsᴇ: prefix dinu
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: help
│ 🏷️ᴜsᴇ: prefix help
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: about
│ 🏷️ᴜsᴇ: prefix about
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: info
│ 🏷️ᴜsᴇ: prefix info
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: ping2
│ 🏷️ᴜsᴇ: prefix ping2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: system2
│ 🏷️ᴜsᴇ: prefix system2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: restart
│ 🏷️ᴜsᴇ: prefix restart
╰────────────────────✵✵
 ╭────────✵✵
 │ 📚ᴄᴏᴍᴍᴀɴᴅ: rukshan
 │ 🏷️ᴜsᴇ: prefix rukshan
 ╰────────────────────✵✵
> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

        const menu11 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ 🐉 𝐒𝐎𝐋𝐎 𝐋𝐄𝐕𝐄𝐋𝐈𝐍𝐆 𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔𝐁🐉 ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*

🐉 *Solo Leveling Command Menu*

╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: sololeveling
│ 🏷️ᴜsᴇ: prefix sololeveling
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: shedowarmy
│ 🏷️ᴜsᴇ: prefix shedowarmy
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: sunjinhu
│ 🏷️ᴜsᴇ: prefix sunjinhu
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: beru
│ 🏷️ᴜsᴇ: prefix beru
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: igris
│ 🏷️ᴜsᴇ: prefix igris
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: monak
│ 🏷️ᴜsᴇ: prefix monak
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: slall
│ 🏷️ᴜsᴇ: prefix slall
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: kamish
│ 🏷️ᴜsᴇ: prefix kamish
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: kaishel
│ 🏷️ᴜsᴇ: prefix kaishel
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: tusk
│ 🏷️ᴜsᴇ: prefix tusk
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: tank
│ 🏷️ᴜsᴇ: prefix tank
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: iron
│ 🏷️ᴜsᴇ: prefix iron
╰────────────────────✵✵
╭────────✵✵
│ 🎌 ᴄᴏᴍᴍᴀɴᴅ: srank
│ 🏷️ᴜsᴇ: prefix srank
╰────────────────────✵✵
╭────────✵✵
│ 🐉 ᴄᴏᴍᴍᴀɴᴅ: sololevelingabout
│ 🏷️ᴜsᴇ: prefix sololevelingabout
╰────────────────────✵✵
╭────────✵✵
│ 🐉 ᴄᴏᴍᴍᴀɴᴅ: ruras&monakabout
│ 🏷️ᴜsᴇ: prefix ruras&monakabout
╰────────────────────✵✵


❰▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬❱
┃★│ • shedow monak command soon
┃★│ • video command soon
┃★│ • ANIME FOUNDR & CORRECT ABOUT & DETAILS :- animedetails
┃★│
┃★│ • *ඇනිමෙ එක ගැන සම්පූර්ණ විස්තරය ඔනෙ නම් මෙම විදානය :- fullanimedetails*
┃★│ 
┃★│ • *ඇනිමෙ එක ගැන සරල විස්තරක් ඔනෙ නම් :- .shortdetails*
┃★│ 
┃★│ 
┃★│ ⛩️ *Anime channel fallow :- https://whatsapp.com/channel/0029VbAjwpWAojYrZOdaVO0i*
┃★╭──────────────------------>
┃◈│ ⛩️ *මෙම කමාන්ඩ් මෙලෙසම type කර අවශ්‍ය දේ ලබා ගන්න*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

 > *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;
        const menu12 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ ⛩️ 𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔 🎗️ ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*
🎗️ 𝐌𝐈𝐍𝐄 𝐋𝐎𝐆𝐎 𝐂𝐎𝐌𝐌𝐀𝐍𝐃

╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: logo
│ 🏷️ᴜsᴇ: prefix logo
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: logo2
│ 🏷️ᴜsᴇ: prefix logo2
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: logo3
│ 🏷️ᴜsᴇ: prefix logo3
╰────────────────────✵✵

🐉 *MINI LOGO MENU*
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: neonlight
│ 🏷️ᴜsᴇ: prefix neonlight
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: blackpink
│ 🏷️ᴜsᴇ: prefix blackpink
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: dragonball
│ 🏷️ᴜsᴇ: prefix dragonball
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: 3dcomic
│ 🏷️ᴜsᴇ: prefix 3dcomic
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: america
│ 🏷️ᴜsᴇ: prefix america
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: naruto
│ 🏷️ᴜsᴇ: prefix naruto
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: sadgirl
│ 🏷️ᴜsᴇ: prefix sadgirl
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: clouds
│ 🏷️ᴜsᴇ: prefix clouds
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: futuristic
│ 🏷️ᴜsᴇ: prefix futuristic
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: 3dpaper
│ 🏷️ᴜsᴇ: prefix 3dpaper
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: eraser
│ 🏷️ᴜsᴇ: prefix eraser
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: sunset
│ 🏷️ᴜsᴇ: prefix sunset
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: leaf
│ 🏷️ᴜsᴇ: prefix leaf
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: galaxy
│ 🏷️ᴜsᴇ: prefix galaxy
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: sans
│ 🏷️ᴜsᴇ: prefix sans
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: boom
│ 🏷️ᴜsᴇ: prefix boom
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: hacker
│ 🏷️ᴜsᴇ: prefix hacker
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: devilwings
│ 🏷️ᴜsᴇ: prefix devilwings
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: nigeria
│ 🏷️ᴜsᴇ: prefix nigeria
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: bulb
│ 🏷️ᴜsᴇ: prefix bulb
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: angelwings
│ 🏷️ᴜsᴇ: prefix angelwings
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: zodiac
│ 🏷️ᴜsᴇ: prefix zodiac
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: luxury
│ 🏷️ᴜsᴇ: prefix luxury
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: paint
│ 🏷️ᴜsᴇ: prefix paint
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: frozen
│ 🏷️ᴜsᴇ: prefix frozen
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: castle
│ 🏷️ᴜsᴇ: prefix castle
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: tatoo
│ 🏷️ᴜsᴇ: prefix tatoo
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: valorant
│ 🏷️ᴜsᴇ: prefix valorant
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: bear
│ 🏷️ᴜsᴇ: prefix bear
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: typography
│ 🏷️ᴜsᴇ: prefix typography
╰────────────────────✵✵
╭────────✵✵
│ 📚ᴄᴏᴍᴍᴀɴᴅ: birthday
│ 🏷️ᴜsᴇ: prefix birthday
╰────────────────────✵✵
> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

        const menu13 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒  ⛩️ 𝐌𝐈𝐍𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐔𝐏𝐃𝐀𝐓𝐄 📥 ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : *ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*╰──────────●●*
┃ 🎧  *මෙම කමාන්ඩ් දිනෙන් දින වෙනස් වන අතර අලුත් කමාන්ඩ් ඇතුලත් වෙනවා*
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 COMMAND DETAILS 📝❯━━━
┃🗣️  *alive2*
┃🤖  *alive3  [ mine command ]*
┃📜  *System*
┃📚  *aiimgs*
┃📝  *rukshan*
┃📟  *repo2*
┃⚙️  *commanding*
┃✨  *system2*
┃🎗️  *botabout*
┃⛩️ *botinfo*
┃🐉 *rukshan*
┃🛠️ *Dinu*
┗━━━━━━━━━━━━━━━

*🎧 BOT WEBSITE COMING SOON📥*

┏━━━━❮ 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ❯━━━━
┃ 
┃ ⛩️  *මෙම කමාන්ඩ් ලිස්ටෙක දිනෙන් දින අලුත් වෙන බැවින් චැනල්     එකත් සමග සම්බන්ධව සිටින්න⚠*
┃
┃  ⛩️ _Fallow Channel :- https://whatsapp.com/channel/0029VbAWWH9BFLgRMCXVlU38_
┃  ⛩️ _Telegram  :- https://t.me/legionofdoom999_
┃ 
┃  🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️
┃  
┃ 🐉 *_OWNER RUKSHAN 🇯🇵💦_*
┃ 🐉 _COD & MENAGERIE DINU ID 🎗️_
┗━━━━━━━━━━━━━━

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 🗿*
`;

        const menu14 = `
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢
*=❒ ⛩️ 𝗡𝗘𝗪𝗦 𝗠𝗘𝗡𝗨 🛠️ ❒=*
❢◥ ▬▬▬▬▬ ◆ ▬▬▬▬▬ ◤❢

*╭─「🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️」*
*│ 🔥 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│ 🔥 ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🔥 ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│ 🔥 ᴠᴇʀꜱɪᴏɴ : 1.0*
*│ 🔥 ᴏᴡɴᴇʀ : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴛʜ*
*╰──────────●●*
┏━━━━❮ 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ❯━━━━
┃
┃ 🛠️  *මෙම News කමාන්ඩ් සමහර අවස්ථාව වලදි කියා නොකරයි. එවන් අවස්ථා වලදි news command off කර නැවත on කර බාවිතා කරන්න 😑
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 NEWS COMMAND DETA
❯━━━
┃
┃    ⛩️ *AUTO NEWS සදහා = .startnews (chennel jid)*
┃    ⛩️ *AUTO NEWS OFF සදහා = .stopnews (chennel jid)*
┃
┃📚 *.HIRUNEWS
┃📝  *.sirasanews*
┃📝  *.lankadeepanews*
┃📝  *.siyathanews*
┃📝  *todayhiru*
┃📝  *itinnews*
┃📝 *derananews
┃
┗━━━━━━━━━━━━━━━

┏━━━━❮🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ ❯━━━━
┃
┃  💖 _Fallow Channel :- https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28_
┃ 
┃ 💖 ℤ𝔸ℕ𝕋𝔸 𝕏-𝕄𝔻 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝕄ℝ 𝕊𝕌ℝ𝔸ℕ𝔾𝔸
┃  
┃ 💖 *𝕄ℝ 𝕊𝕌ℝ𝔸ℕ𝔾𝔸 𝕄𝕆𝔻-ℤ*
┗━━━━━━━━━━━━━━

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

        // Event listener for replies
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const from = mek.key.remoteJid;

            // Check if the message is a reply to the alive message
            const isReplyToAliveMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === aliveMessageID;
            if (isReplyToAliveMsg) {
                if (messageType === '1') {
                    // Ping command
                    const startTime = Date.now();
                    const pongMessage = await conn.sendMessage(from, { text: '*pong...*' });
                    const endTime = Date.now();
                    const ping = endTime - startTime;
                    await conn.sendMessage(from, { 
                        text: `*ꜱᴘᴇᴇᴅ : ${ping}ms*`,
                        contextInfo: {
                            mentionedJid: ['120363421846535301@newsletter'],
                            groupMentions: [],
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363421846535301@newsletter',
                                newsletterName: "",
                                serverMessageId: 999
                            },
                            externalAdReply: {
                                title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                                body: '𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖',
                                mediaType: 1,
                                sourceUrl: "https://wa.me/94760879639?text=i-am-bot-erro",
                                thumbnailUrl: 'https://files.catbox.moe/azp9kg.jpg',
                                renderLargerThumbnail: false,
                                showAdAttribution: true
                            }
                        }
                    }, { quoted: mek });
                } else if (messageType === '2') {
                    // Menu command
                    const menuCap = `
*🍓🍟  හායි ${pushname} කොහමද ඔයාට😝♦*

*┏〔${new Date().getHours() < 12 ? '🌄 සුබ උදෑසනක්  🌄*' : '🌛 සුබ රාත්‍රියක් 🌛*'}〕
*┃🤖 ʙᴏᴛ ɴᴀᴍᴇ : 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
*┃🔖 ᴠᴇʀsɪᴏɴ : 1.0*
*┃📟 ᴘʟᴀᴛғᴏʀᴍ : Linux*
*┃👨‍💻 ᴏᴡɴᴇʀ: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*┃📆 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}* 
*┃📈 ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*┗━━━━━━━━━━━━━━𖣔𖣔*


╭━━〔 𝚉𝙰𝙽𝚃𝙰 𝚇-𝙼𝙳 𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃 〕━━┈⊷
┃◈╭─────────────·๏
┃◈│1️⃣  ⛩️ *DOWNLOAD MENU* ⚡
┃◈│2️⃣  ⛩️ *GROUP MENU* ⚡
┃◈│3️⃣  ⛩️ *FUN MENU* ⚡
┃◈│4️⃣  ⛩️ *OWNER MENU* ⚡
┃◈│5️⃣  ⛩️ *AI MENU⚡
┃◈│6️⃣  ⛩️ *ANIME MENU* ⚡
┃◈│7️⃣  ⛩️ *CONVERT MENU* ⚡
┃◈│8️⃣  ⛩️ *OTHER MENU* ⚡
┃◈│9️⃣  ⛩️ *REACTIONS MENU* ⚡
┃◈│🔟  ⛩️  *MINE MENU* ⚡
┃◈│1️⃣1️⃣  ⛩️ *SOLO LEVELING ANIME COMMAND 🇯🇵*
┃◈│1️⃣2️⃣  ⛩️ *LOGO MENU* ⚡
┃◈│1️⃣3️⃣ ⛩️ *MINE COMMAND NEW ✂️*
┃◈│1️⃣4️⃣ ⛩️ *NEWS MENU*
┃◈╰───────────┈⊷
╰──────────────┈⊷

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*

`;
                    await conn.sendMessage(from, { 
                        audio: { url: `https://files.catbox.moe/aip83v.mp3` }, 
                        mimetype: "audio/mpeg",
                        ptt: "true",
                        contextInfo: {
                            externalAdReply: {
                                title: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
                                body: "𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖",
                                mediaType: 1,
                                sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28",
                                thumbnailUrl: "https://files.catbox.moe/tiaube.jpg",
                                renderLargerThumbnail: true,
                                showAdAttribution: true
                            }
                        }
                    }, { quoted: mek });

                    const menuMsg = await conn.sendMessage(from, {
                        image: { url: `https://files.catbox.moe/r14fyu.jpg` },
                        caption: menuCap,
                        contextInfo: {
                            mentionedJid: ['94760879639@s.whatsapp.net'],
                            groupMentions: [],
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363421846535301@newsletter',
                                newsletterName: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
                                serverMessageId: 999
                            }
                        }
                    }, { quoted: mek });

                    const menuMessageID = menuMsg.key.id; // Save the menu message ID

                    // Check for replies to the menu message
                    conn.ev.on('messages.upsert', async (menuUpdate) => {
                        const menuMek = menuUpdate.messages[0];
                        if (!menuMek.message) return;
                        const menuMessageType = menuMek.message.conversation || menuMek.message.extendedTextMessage?.text;
                        const menuFrom = menuMek.key.remoteJid;

                        const isReplyToMenuMsg = menuMek.message.extendedTextMessage && menuMek.message.extendedTextMessage.contextInfo.stanzaId === menuMessageID;
                        if (isReplyToMenuMsg) {
                            switch (menuMessageType) {
                                case '1':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu1 }, { quoted: menuMek });
                                    break;
                                case '2':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu2 }, { quoted: menuMek });
                                    break;
                                case '3':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu3 }, { quoted: menuMek });
                                    break;
                                case '4':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu4 }, { quoted: menuMek });
                                    break;
                                case '5':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu5 }, { quoted: menuMek });
                                    break;
                                case '6':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu6 }, { quoted: menuMek });
                                    break;
                                case '7':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu7 }, { quoted: menuMek });
                                    break;
                                case '8':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu8 }, { quoted: menuMek });
                                    break;
                                case '9':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu9 }, { quoted: menuMek });
                                    break;
                                case '10':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu10 }, { quoted: menuMek });
                                    break;
                                case '11':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu11 }, { quoted: menuMek });
                                    break;
                                case '12':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu12 }, { quoted: menuMek });
                                    break;
                                case '13':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu13 }, { quoted: menuMek });
                                    break;
                                case '14':
                                    await conn.sendMessage(menuFrom, { image: { url: `https://files.catbox.moe/azp9kg.jpg` }, caption: menu14 }, { quoted: menuMek });
                                    break;
                                default:
                                    await conn.sendMessage(menuFrom, { text: 'කරුණාකර 1-14 අතර අංකයක් තෝරන්න! 😇🖤' }, { quoted: menuMek });
                                    break;
                            }
                        }
                    });
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});