const config = require('../config')
const ytdl = require('yt-search')
const yts = require('yt-search')
const axios = require("axios")
const FormData = require('form-data')
const path = require("path")
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
  'pattern': "tourl",
  'alias': ["imgtourl", "imgurl", "url", "geturl", "upload"],
  'react': '🖇',
  'desc': "Convert media to Catbox URL",
  'category': "utility",
  'use': ".tourl [reply to media]",
  'filename': __filename
}, async (client, message, args, { reply }) => {
  try {
    // Check if quoted message exists and has media
    const quotedMsg = message.quoted ? message.quoted : message;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';
    
    if (!mimeType) {
      throw "Please reply to an image, video, or audio file";
    }

    // Download the media
    const mediaBuffer = await quotedMsg.download();
    const tempFilePath = path.join(os.tmpdir(), `catbox_upload_${Date.now()}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    // Get file extension based on mime type
    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else if (mimeType.includes('video')) extension = '.mp4';
    else if (mimeType.includes('audio')) extension = '.mp3';
    
    const fileName = `file${extension}`;

    // Prepare form data for Catbox
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), fileName);
    form.append('reqtype', 'fileupload');

    // Upload to Catbox
    const response = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    if (!response.data) {
      throw "Error uploading to Catbox";
    }

    const mediaUrl = response.data;
    fs.unlinkSync(tempFilePath);

    // Determine media type for response
    let mediaType = 'File';
    if (mimeType.includes('image')) mediaType = 'Image';
    else if (mimeType.includes('video')) mediaType = 'Video';
    else if (mimeType.includes('audio')) mediaType = 'Audio';

    // Send response
    await reply(
      `*${mediaType} Uploaded Successfully*\n\n` +
      `*Size:* ${formatBytes(mediaBuffer.length)}\n` +
      `*URL:* ${mediaUrl}\n\n` +
      `> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`
    );

  } catch (error) {
    console.error(error);
    await reply(`Error: ${error.message || error}`);
  }
});

// Helper function to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

cmd({
  pattern: "song",
  alias: ["mp3", "ytmp3"],
  react: '🎧',
  desc: "Download audio from YouTube",
  category: "music",
  use: ".song <song name>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply, location, userTime, pushname }) => {
  try {
    if (!args.length) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("Please provide a song name. Example: .song Moye Moye");
    }

    await conn.sendMessage(from, { react: { text: '🎧', key: mek.key } });

    // Search for the song on YouTube
    const query = args.join(" ");
    const searchResults = await yts(query);
    if (!searchResults.videos.length) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("❌ No results found.");
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;
    const thumbnail = video.thumbnail;
    const title = video.title;
    const duration = video.timestamp;
    const channel = video.author.name;

    // Fetch MP3 download link using the API
    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success || !response.data.result.download_url) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("❌ Failed to fetch the MP3 file.");
    }

    const mp3Url = response.data.result.download_url;

    // Send song details with thumbnail
    const captionText = `🎵 *'🎧DushanX-MD Song Downloader'🎧*\n\n
👋 *►Hello❤️* ${pushname}\n
📌 *►Tital:* ${title}\n
⏳ *►Duration:* ${duration}\n
📺 *►channel:* ${channel}\n
🔗 *►Link:* ${videoUrl}\n

*►1.Audio*
*►2.Voice note*
*►3.Document*

*◄❪ Reply This Message With Nambars ❫►*

*⚡ᴅᴜꜱʜᴀɴ x ᴍᴅ ʙᴏᴛ⚡*`;
      

const dula = `DUSHAN X MD`;

    // Short message
   // const shortMessage = `Here's your song, *${title}* 🎶 Enjoy!`;

    
   const vv = await conn.sendMessage(from, {
      image: { url: thumbnail },
      caption: captionText,
     contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterName: config.CHANNEL_NAME,
            newsletterJid: config.NEWSLETTER_ID,
        }
     }
    }, { quoted: mek });


      
    
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                  //  const response = await axios.get(apiUrl);

                    //const mp3Url = response.data.result.download_url;

    await conn.sendMessage(from, {
  audio: { url: mp3Url },
  mimetype: 'audio/mpeg',
  ptt: false, // Standard audio message
  fileName: `${title}.mp3`,
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      title: config.TITLE,
      body: config.BODY,
      thumbnailUrl: config.MENU_IMG, // image -> thumbnailUrl
      sourceUrl: config.WEBURL,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: mek });
break;
                     case '2':  
                  //  const response = await axios.get(apiUrl);

                   // const mp3Url = response.data.result.download_url;

      await conn.sendMessage(from, {
      audio: { url: mp3Url },
      mimetype: 'audio/mpeg',
      ptt: true,   // This makes it a voice note
      fileName: `${title}.mp3` ,
        contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      title: config.TITLE,
      body: config.BODY,
      thumbnailUrl: config.MENU_IMG, // image -> thumbnailUrl
      sourceUrl: config.WEBURL,
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}, { quoted: mek });
break;
                    case '3':  
                    //const response = await axios.get(apiUrl);

                    //const mp3Url = response.data.result.download_url;

    await conn.sendMessage(from, {
      document: { url: mp3Url },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3` ,
      contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      title: config.TITLE,
      body: config.BODY,
      thumbnailUrl: config.MENU_IMG, // image -> thumbnailUrl
      sourceUrl: config.WEBURL,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: mek });
                    default:
                        reply(" ");

                
                }

            }
        });

  } catch (error) {
    console.error("Error:", error);
     // Send the error to bot owner (94765)
    const errorMessage = `🚨 *Bot Error Alert!*\n\n`
      + `📌 *Command:* .song\n`
      + `👤 *User:* ${pushname}\n`
      + `📍 *Group/Chat:* ${from}\n`
      + `⏳ *Time:* ${new Date().toLocaleString()}\n\n`
      + `💢 *Error:* ${error.message}\n`
      + `📜 *Stack Trace:* ${error.stack ? error.stack.split("\n")[0] : "N/A"}`;

    await conn.sendMessage("94767881838s.whatsapp.net", { text: errorMessage });
  }
});