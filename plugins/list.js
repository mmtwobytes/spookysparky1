const XTroid = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
      ]
      
      const buttonMessage = {
          contentText: "Hi it's button message",
          footerText: 'Hello World',
          buttons: buttons,
          headerType: 1
      }

XTroid.addCMD({pattern: 'list ?(.*)', fromMe: true}, (async (message, match) => {    
       
    const sendMsg = await message.sendMessage(jid, buttonMessage, MessageType.buttonsMessage);
    
    await message.sendMessage(sendMsg)
}));




