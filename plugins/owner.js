const { cmd } = require('../command');

let botStartTime = Date.now();

// OWNER DETAILS
const OWNER_NAME = "🧙‍♂️ ZANTA × MD OFC 🧙‍♂️";
const OWNER_NUMBER = "94760879639"; // Without "+" sign

// FILES
const VOICE_CLIPS = [
    "https://files.catbox.moe/r4r0hz.mp3",
    "https://files.catbox.moe/3pzzgr.mp3",
    "https://files.catbox.moe/qvpa5o.mp3",
    "https://files.catbox.moe/y29b3n.mp3",
    "https://files.catbox.moe/w7yg8f.mp3",
    "https://files.catbox.moe/4rm2fz.mp3",
    "https://files.catbox.moe/gr8wlt.mp3",
    "https://files.catbox.moe/xvue61.mp3",
    "https://files.catbox.moe/uosvov.mp3",
    "https://files.catbox.moe/2vgkwr.mp3",
    "https://files.catbox.moe/gqw8fl.m4a",
    "https://files.catbox.moe/mc5r2s.mp3",
    "https://files.catbox.moe/ck4reh.mp3",
    "https://files.catbox.moe/ypbfyt.mp3",
    "https://files.catbox.moe/75p1zt.mp3",
    "https://files.catbox.moe/rd21pi.mp3",
    "https://files.catbox.moe/ggebie.mp3"
];

const ALIVE_VIDEO = "https://files.catbox.moe/52py80.mp4";
const IMAGE_URL = "https://files.catbox.moe/9gnp53.jpeg";
const MAIN_VIDEO = "https://files.catbox.moe/qjq8sn.mp4";
const THUMB_URL = "https://files.catbox.moe/56gtnw.jpg";
const SOURCE_URL = "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28/226";

// COMMAND
cmd({
    pattern: "owner",
    desc: "Display owner info",
    react: "❕",
    filename: __filename
}, async (conn, mek, m, { from, pushname, sender, reply }) => {
    try {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${OWNER_NAME}
TEL;type=CELL;type=VOICE;waid=${OWNER_NUMBER}:${OWNER_NUMBER}
END:VCARD`;

        const note = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
=================❮ 𝐀𝐁𝐎𝐔𝐓 𝐌𝐄 ❯=================

Name: SURANGA
Alias: ZANTA
Age: 20+
Location: Gampaha, Sri Lanka
Languages: Sinhala, English
Profession: Creative Technologist, Bot Developer, Digital Designer
Team: MR SURANGA MOD-Z TEAM

=================❮ 𝐌𝐘 𝐍𝐎𝐓𝐄 ❯=================

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
*ඉතින් ආදරේ කියන්නෙම පරිස්සම් කරන එකට තමයි...!*

*ස්තූතිය....!* 🥺💖
> *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
`;

        // Main Video with External Preview
        await conn.sendMessage(from, {
            video: { url: MAIN_VIDEO },
            mimetype: "video/mp4",
            ptv: true,
            contextInfo: {
                externalAdReply: {
                    title: OWNER_NAME,
                    body: "Powered by MR SURANGA OFC 💖",
                    mediaType: 1,
                    sourceUrl: SOURCE_URL,
                    thumbnailUrl: THUMB_URL,
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });

        // Contact Card
        await conn.sendMessage(from, {
            contacts: {
                displayName: OWNER_NAME,
                contacts: [{ vcard }]
            }
        });

        // Owner Image + Note
        await conn.sendMessage(from, {
            image: { url: IMAGE_URL },
            caption: `*🍓🍟  හායි ${pushname} කොහමද ඔයාට😝♦*\n\n${note}`,
            contextInfo: {
                mentionedJid: [`${OWNER_NUMBER}@s.whatsapp.net`],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

        // Random Voice Message
        const randomVoice = VOICE_CLIPS[Math.floor(Math.random() * VOICE_CLIPS.length)];
        await conn.sendMessage(from, {
            audio: { url: randomVoice },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

        // Alive Video
        await conn.sendMessage(from, {
            video: { url: ALIVE_VIDEO },
            caption: `
╭-----------------------------------------------®
┃🤖 ʙᴏᴛ ɴᴀᴍᴇ : ᴢᴀɴᴛᴀ-xᴍᴅ ᴏꜰᴄ
┃🔖 ᴠᴇʀsɪᴏɴ : 1.0
┃📟 ᴘʟᴀᴛғᴏʀᴍ : Linux
┃👨‍💻 ᴏᴡɴᴇʀ: ᴍʀ ꜱᴜʀᴀɴɢᴀ
┗━━━━━━━━━━━━━━𖣔𖣔

╭━━〔 *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️* 〕━━┈⊷
┃◈┃• *Name*   : MR SURANGA
┃◈┃• *Number* 94760879639
┃◈┃• *Version*: 1.0 Beta
╰──────────────┈⊷
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`,
            gifPlayback: true,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply("⚠️ දෝෂයක් ඇතිවුණා owner විධානය ක්‍රියාත්මක කරන විට.");
    }
});