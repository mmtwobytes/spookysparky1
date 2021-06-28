/* Copyright (C) 2021 plk-dqz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');
if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'happymod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
else if (Config.WORKTYPE == 'public') {
	Asena.addCommand({pattern: 'happymod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC,  }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
