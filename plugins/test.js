cmd({ pattern: "fb",
 alias: ["facebook"], 
desc: "Download Facebook videos", category: "download",
 filename: __filename },
 async (conn, m, store, { from, quoted, args, q, reply }) => { try { if (!q || !q.startsWith("https://")) { return conn.sendMessage(from, { text: "Need URL" }, { quoted: m }); }

await conn.sendMessage(from, {
  react: { text: '⏳', key: m.key }
});

const response = await fetch(`https://bk9.fun/download/fb?url=${encodeURIComponent(q)}`);
const fbData = await response.json();

if (!fbData.status) {
  return reply("❌ Error fetching the video. Please try again.");
}

const caption = `╭━〔🐉 *FB DOWNLOADER*🐉 〕━\n`
  + `┃▸ *Title*: ${fbData.BK9.title}\n`
  + `╰━━━━━━━━━\n\n`
  + `🩵 *Download Options:*\n\n`
  + `1  *SD Quality*\n`
  + `2  *HD Quality*\n\n`
  + `🩵 *Audio Options:*\n\n`
  + `3  *Audio (SD)*\n`
  + `4  *Document (MP3)*\n`
  + `5  *Voice (PTT)*\n\n`
  + `🔢 REPLY THE NUMBER.*

> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ᴍʀ  ʟᴀᴋꜱɪᴅᴜ ᶜᵒᵈᵉʳ`;

const sentMsg = await conn.sendMessage(from, {
  image: { url: fbData.BK9.thumb },
  caption: caption
}, { quoted: m });

const messageID = sentMsg.key.id;

conn.ev.on("messages.upsert", async (msgData) => {
  const receivedMsg = msgData.messages[0];
  if (!receivedMsg.message) return;
  
  const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
  const senderID = receivedMsg.key.remoteJid;
  const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
  
  if (isReplyToBot) {
    await conn.sendMessage(senderID, {
      react: { text: '⬇️', key: receivedMsg.key }
    });
    
    switch (receivedText) {
      case "1":
        await conn.sendMessage(senderID, {
          video: { url: fbData.BK9.sd },
          caption: "> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ᴍʀ  ʟᴀᴋꜱɪᴅᴜ ᶜᵒᵈᵉʳ"
        }, { quoted: receivedMsg });
        break;

      case "2":
        await conn.sendMessage(senderID, {
          video: { url: fbData.BK9.hd },
          caption: "> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ᴍʀ  ʟᴀᴋꜱɪᴅᴜ ᶜᵒᵈᵉʳ"
        }, { quoted: receivedMsg });
        break;

      case "3":
        await conn.sendMessage(senderID, {
          audio: { url: fbData.BK9.sd },
          mimetype: "audio/mpeg"
        }, { quoted: receivedMsg });
        break;

      case "4":
        await conn.sendMessage(senderID, {
          document: { url: fbData.BK9.sd },
          mimetype: "audio/mpeg",
          fileName: "Facebook_Audio.mp3",
          caption: "> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ᴍʀ  ʟᴀᴋꜱɪᴅᴜ ᶜᵒᵈᵉʳ"
        }, { quoted: receivedMsg });
        break;

      case "5":
        await conn.sendMessage(senderID, {
          audio: { url: fbData.BK9.sd },
          mimetype: "audio/mp4",
          ptt: true
        }, { quoted: receivedMsg });
        break;

      default:
        reply("❌ Invalid option! Please reply with 1, 2, 3, 4, or 5.");
    }
  }
});

} catch (error) { console.error("Error:", error); reply("❌ Error fetching the video. Please try again."); } });
Copy (1 Coin)
Download (1 Coin)
Copy (1 Coin)
Download (1 Coin)
𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝐿𝛥𝛫𝛪𝑌𝛥
