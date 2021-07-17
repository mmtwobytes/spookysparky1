


const lasiapi = require('textmaker-lasi');
const XTroid = require('../events');
const GG = "...."
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
let FM = Config.WORKTYPE == 'public' ? false : true
    

















XTroid.addCMD({pattern: 'eph ?(.*)', fromMe: FM, dontAddCMDList: true}, (async (message, match) => {

    await axios.get(`https://tinyurl.com/${Config.LOCKR}`).then(async (ann) => {
        const { lasi } = ann.data.def1
        const lc = lasi
        const seed = Config.LOCK
        if (lc !== seed) return await message.sendMessage(GG);
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.ephoto("https://en.ephoto360.com/free-bear-logo-maker-online-673.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/eglite.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/eglite.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });});
}));

