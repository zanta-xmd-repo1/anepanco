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

    pattern: "genimg",
    alias: ["aiimg", "generateimg", "aiimage"],
    desc: "Generate AI Images using Stable Diffusion",
    category: "ai",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply(`
*🤖 𝐙𝐀𝐍𝐓𝐀 𝐗𝐌𝐃 𝐀𝐈 𝐈𝐌𝐀𝐆𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑 🖼️*

Usage: .Lod <image description>
Example: .Lod Beautiful landscape with mountains

> 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
`);
        await m.react("🔄");

        const apiUrl = `https://dark-shan-yt.koyeb.app/ai/generate-image-v2?prompt=${encodeURIComponent(q)}`;

        const response = await axios({
            method: 'get',
            url: apiUrl,
            responseType: 'arraybuffer',
            timeout: 60000 // 60 seconds timeout
        });

        if (!response.data) {
            return reply("❌ Failed to generate image. No data received.");
        }

        // Send the generated image
        await conn.sendMessage(from, {
            image: response.data,
            caption: `*𝐙𝐀𝐍𝐓𝐀 𝐗𝐌𝐃 𝐀𝐈 𝐈𝐌𝐀𝐆𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑 🖼️*

*📝 Prompt:* ${q}

*Model:* Stable Diffusion
> 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
`,
            quoted: mek
        });

        // React to successful image generation
        await m.react("✅");

    } catch (error) {
        console.error("Lod x Image Generation Error:", error);
        
        // React to error
        await m.react("❌");

        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            if (error.response.status === 429) {
                return reply("⏳ Too many requests. Please try again later.");
            } else if (error.response.status === 500) {
                return reply("🚫 Server error. Unable to generate image.");
            } else {
                return reply(`❌ Error: ${error.response.status} - ${error.response.statusText}`);
            }
        } else if (error.request) {
            console.log(error.request);
            return reply("🌐 No response received from the server. Check your internet connection.");
        } else {
            console.log('Error', error.message);
            return reply(`❌ An unexpected error occurred: ${error.message}`);
        }
    }
});