const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'keith',
    PREFIXE: process.env.PREFIX || "&",
    OWNER_NAME: process.env.OWNER_NAME || "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254750178300",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://telegra.ph/file/c9f1fbd5b78d902762e5f.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by 🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "no",    
    BOT: process.env.BOT_NAME || '𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    DP: process.env.STARTING_BOT_MESSAGE || "no",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
