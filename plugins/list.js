const XTroid = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');



const rows = [
    {title: 'Group List', description: "HTTP://wa.me", rowId:"rowid1"},
    {title: 'YouTube Channel', description: "youtube chann", rowId:"rowid2"}
   ]
   const sections = [{title: "The List", rows: rows}]
   
   const button = {
    buttonText: 'About us',
    description: "infomations about us",
    sections: sections,
    listType: 1
   }
   
   XTroid.addCMD({pattern: 'list', fromMe: true}, (async (message, match) => {


     await message.client.sendMessage(message.jid, button, MessageType.listMessage);

   }));
