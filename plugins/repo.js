const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "my-bot",
    alias: ["free bot", "mini bot"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📑",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
      const status = `*🍓🍟  හායි ${pushname} කොහමද ඔයාට😝♦*

*┏〔${new Date().getHours() < 12 ? '🌄 සුබ උදෑසනක්  🌄*' : '🌛 සුබ රාත්‍රියක් 🌛*'}〕
*┃🤖 ʙᴏᴛ ɴᴀᴍᴇ : 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
*┃🔖 ᴠᴇʀsɪᴏɴ : 1.0*
*┃📟 ᴘʟᴀᴛғᴏʀᴍ : Linux*
*┃👨‍💻 ᴏᴡɴᴇʀ: : ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
*┃📆 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}* 
*┃📈 ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*┗━━━━━━━━━━━━━━𖣔𖣔*  


╭━━〔 *𝙕𝘼𝙉𝙏𝘼-𝙓𝙈𝘿* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🤠 𝐎𝐰𝐧𝐞𝐫: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
┃◈┃• *🪪 𝐕𝐞𝐫𝐬𝐢𝐨𝐧*:  1.0*
┃◈└───────────┈⊷
╰──────────────┈⊷

🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️

╭━━〔 *𝙕𝘼𝙉𝙏𝘼-𝙓𝙈𝘿* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃⛩️ 𝐀𝐔𝐓𝐎 𝐃𝐄𝐏𝐋𝐎𝐘 : https://zanta-xmd-free-deploy-dab3b3af474c.herokuapp.com/
┃◈┃
┃◈┃⛩️ 𝐁𝐎𝐓 𝐏𝐀𝐈𝐑 𝐖𝐄𝐁 : https://zantax-md-pair-2f8b1bdc5303.herokuapp.com/
┃◈┃
┃◈┃⛩️ 𝐁𝐎𝐓 𝐂𝐇𝐀𝐍𝐄𝐋 : https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28
┃◈┃
┃◈┃⛩️ 𝐎𝐖𝐍𝐄𝐑S : SURANGA CHAMITH
┃◈└───────────┈⊷
╰──────────────┈⊷
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: "https://files.catbox.moe/f7y4oe.jpg" },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421846535301@newsletter',
                    newsletterName: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
