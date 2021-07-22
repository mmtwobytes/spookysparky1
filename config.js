/* Copyright (C) 2020 Yusuf Usta.

*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Xproject.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: '4.0 ADMIN',
    CCRUN: "zeks",
    GG:"Error 101",
    CHANNEL: 'https://t.me/danumabots',
    SESSION: process.env.A_XTROID_SESSION === undefined ? '' : process.env.A_XTROID_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://telegra.ph/file/b11ff90ad6a02293fefaf.jpg' : process.env.GAN_IMAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEIMG: process.env.ALIVEIMG === undefined ? 'https://telegra.ph/file/a143b34753c8434058e87.jpg' : process.env.ALIVEIMG,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    AILIZA: process.env.AI_LIZA === undefined ? 'false' : process.env.AI_LIZA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    LOCKR: process.env.LOCKR === undefined ?'https://tinyurl.com/' : process.env.LOCKR,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    LOCK: process.env.LOCK === undefined ?'****' : process.env.LOCK,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    MENUTEXT: process.env.MENU === undefined ?'😎 Pro Menu ⚜' : process.env.MENU,
    GIF_WEL: process.env.GIF_WEL === undefined ?'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/welcome-scenery_w1su4ez-h__76bbedbfeb6556bb8ba305dc5d7de900__P360.mp4' : process.env.GIF_WEL,
    GIF_BYE: process.env.GIF_BYE === undefined ?'https://webfilesdanuma.herokuapp.com/stream/14' : process.env.GIF_BYE,
    CAPTION_KEY: process.env.CP === undefined ?'⚜ X-Troid Pro ⚜' : process.env.CP,
    LOGO_KEY: process.env.LOGOAPI === undefined ?'B6FlBogm1ELO1Z52WigX70G1TOe' : process.env.LOGOAPI,
    ALIVETEXT: process.env.ALIVENAME === undefined ?'😈 Admin 😈' : process.env.ALIVENAME,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    CCN: "Ikyy69",
    DATABASE: DATABASE_URL === './Xproject.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    ON: "hunter"

};


