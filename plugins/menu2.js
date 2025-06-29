const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // Bot start time record

// ✅ Random Voice Clips List එක
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
    "https://files.catbox.moe/ggebie.mp3",
    "https://files.catbox.moe/r4r0hz.mp3"
];

const ALIVE_VIDEO = "https://files.catbox.moe/52py80.mp4"; // මෙතැන valid MP4 video link එකක් දාන්න

cmd({
    pattern: "menu2",
    react: "📂",
    alias: ["help"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let menuc1 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
if(!commands[i].dontAddCommandList){
menuc1 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc2 = ``
for (let i=0;i<commands.length;i++) { 
  if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
  menuc2 += `*│⩥* .${commands[i].pattern}\n`
  }}};

let menuc3 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
    menuc3 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc4 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
  if(!commands[i].dontAddCommandList){
menuc4 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc5 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
menuc5 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc6 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
  menuc6 += `*│⩥* .${commands[i].pattern}\n`
}}};

let menuc7 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
if(!commands[i].dontAddCommandList){
  menuc7 += `*│⩥* .${commands[i].pattern}\n`
}}};	

let menuc8 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
  menuc8 += `*│⩥* .${commands[i].pattern}\n`
}}};

let menuc9 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
if(!commands[i].dontAddCommandList){
  menuc9 += `*│⩥* .${commands[i].pattern}\n`
}}};
     
let menumg = `*Hellow👸* ${pushname}

*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*
*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* ${runtime(process.uptime())} 
*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*👸 𝘝𝘈𝘑𝘐𝘙𝘈 𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*
*╭──────────●●►*
*│🧙‍♂️ DOWNLOAD COMMANDS*
*│   ───────*

${menuc1}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ SEARCH COMMANDS*
*│   ───────*

${menuc2}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ CONVERT COMMANDS*
*│   ───────*

${menuc3}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ LOGO COMMANDS*
*│   ───────*

${menuc4}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc5}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ GROUP COMMANDS*
*│   ───────*

${menuc6}*╰───────────●●►*
		       
*╭──────────●●►*
*│🧙‍♂️ BUG COMMANDS*
*│   ───────*

${menuc7}*╰───────────●●►*	

*╭──────────●●►*
*│🧙‍♂️ OTHER COMMANDS*
*│   ───────*

${menuc8}*╰───────────●●►*	

*╭──────────●●►*
*│🧙‍♂️ MOVIE COMMANDS*
*│   ───────*

${menuc9}*╰───────────●●►*	

> *➥𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - : 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*
        `.trim();

        // ✅ Random Voice Clip එකක් Select කරනවා
        const randomVoice = VOICE_CLIPS[Math.floor(Math.random() * VOICE_CLIPS.length)];

        // Check if video & voice URLs are valid
        if (!ALIVE_VIDEO || !ALIVE_VIDEO.startsWith("http")) {
            throw new Error("Invalid ALIVE_VIDEO URL. Please set a valid video URL.");
        }
        if (!randomVoice || !randomVoice.startsWith("http")) {
            throw new Error("Invalid Voice Clip URL. Please set a valid URL.");
        }

        // ✅ Random Voice Clip එක යවනවා
        await conn.sendMessage(from, {
            audio: { url: randomVoice },
            mimetype: 'audio/mp4', // MP3 / OGG formats සඳහා auto detect වේ
            ptt: true // 🎤 PTT (Push to Talk) වගේ play වේ
        }, { quoted: mek });

        // ✅ Video message with autoplay (GIF style)
        await conn.sendMessage(from, {
            video: { url: ALIVE_VIDEO }, // Video එකේ direct URL එක
            caption: formattedInfo,
            gifPlayback: true, // GIF වගේ autoplay වෙනවා (Sound play වෙන්නේ නැහැ)
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

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});