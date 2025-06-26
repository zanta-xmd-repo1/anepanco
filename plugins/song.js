const config = require('../config');
const axios = require('axios');
const ytdl = require('yt-search');
const yts = require('yt-search')
const config = require('../settings')

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