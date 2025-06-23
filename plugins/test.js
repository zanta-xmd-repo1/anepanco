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
    pattern: "video", 
    alias: ["ytdl", "mp4"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️* 〕━━━┈⊷
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       
// play

cmd({ 
     pattern: "song", 
     alias: ["ytdl3", "play","audio","mp3"], 
     react: "🎧", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("Please provide a YouTube URL or song name.");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╭━━━〔 *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️* 〕━━━┈⊷
┇๏ *Tital* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name} 
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
