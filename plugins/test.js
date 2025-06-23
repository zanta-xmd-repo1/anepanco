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

cmd(
  {
    pattern: "aiimgs",
    alias: ["genboys", "genimgs"],
    desc: "Generate AI profile picture",
    category: "ai",
    react: "🖼️",
    filename: __filename,
  },
  async (conn, mek, m, { from, args, reply }) => {
    try {
      let prompt = args.join(" ");
      if (!prompt) return reply("⚠️ Please provide a prompt! (Example: `.genpfp Red flowers`)");

      let apiUrl = `https://manul-ofc-tech-api-1e5585f5ebef.herokuapp.com/fluxai?prompt=${encodeURIComponent(prompt)}`;
      let response = await axios.get(apiUrl, { responseType: "arraybuffer" });

      await conn.sendMessage(
        from,
        { image: response.data, caption: `🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️ *AI Generated Image for:* _${prompt}_` },
        { quoted: m }
      );

    } catch (e) {
      console.error("GenPFP Command Error:", e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);
