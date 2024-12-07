const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *SANA KHAN*

> *SANA_MD REPO:*
*|* *https://github.com/sana3165829/SANA_MD*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029VagcqzY1XquemrHOM51n*
*╰──────────────●●►*

> *CREATED BY MS SANA*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SANA KHAN",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SAN_MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/sana3165829/SANA_MD" ,
thumbnailUrl: "https://i.imgur.com/nqCsIHZ.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
