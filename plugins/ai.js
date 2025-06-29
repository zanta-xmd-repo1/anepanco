const config = require('../config')
const {cmd, commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    alias: ["siri"], 
    react: "📑",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // Check if the user is asking who made it
        if (q.toLowerCase().includes("කවුද හැදුවේ") || q.toLowerCase().includes("who made this")) {
            return reply(`ZANTA X MD OWNER IS FOUNDER`)
        }

        // Normal AI response
        let data = await fetchJson(`https://dark-shan-yt.koyeb.app/ai/gemini?q=${q}`)
        return reply(` ${data.data}\n\n> 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️`)
    } catch(e) {
        console.log(e)
        reply(`අයියෝ බ්‍රෝ, එරර් එකක්! 😂\n${e}`)
    }
})