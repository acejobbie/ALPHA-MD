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
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61Vy46jRhT9lai2tsY8DVhqKYDB2Bg3Nhg3jrIooIAyTwPGxiN/RpRssp1t/mm+IJ8Q0e6eGWkmMx0prIp63Drn3nNuvQd5gWukow5M3oOywi1sUD9suhKBCZBOYYgqMAQBbCCYAH7mUaU7wqmWW1wuHtZdEUO+HMFNYa8i6Tiw5K1JnM0dlTyA2xCUJy/F/vcCClcvD7uZPXWIZT5IhRVrqlc2qZ8qxl522zNz6sa7i7NIzg/g1keEuMJ5pJQxylAFUx11JsTV2+A/GswO27w7LpMCWSYbZpzFXpANY9aj+G70lLvxQUdMkq/fBl8eKZWma/gQnpTW24nUrNSluHCunGZMhcRRlvuL4h6Ohubf4dc4ylEwD1De4KZ7c97rae3G5RYJXCItSbNarxcwbk3FIe2pbpSqC+H+VC+IYsa8Dbi/5OTMK/jrkzjb+PR0z47quUWbT0WreYKF5lPSbAdtquHoS+Bm9aqV5L/knZ9aAns1KMWxZEYyG1tL1FzVHtvR2WYOZSQZ+zTzdX2tvTHvDkU5106THWsw3owGvPxEaSHFjARPIkZbVRwIm1ov9rSQrD/Dh82p+h5Kx+t23PmJ4fL6QLHawvONij5b1oabD1Cirlp250YCZ81MZ3bYHAaZRO6eROF4WSVxWF+KIxrPur3bZYf8vOHy02NMmlH08MwoQd08ABPyNgQVinDdVLDBRd7P8cIQwKC1kF+h5jm7QK6nqqzOfLgcV/XGo49jY+qMDX9eEgduR5/F6cUfzK9Ru9w+gCEoq8JHdY0CDddNUXUGqmsYoRpMfnkuVM+5QlnRoAUOwARQLMOxBMnxNEH8XL87x7CpYVm+y1EDhiCsisxAYNJUJzQEzwemhDrmSXbMsWOGZ2mWE1SWV6eUojAUL4tqzzC7X2rjDNUNzEowITmGZwWSZMjb8P/BwVKyylAky4xlRVY5UaCmhECwskorLM1L9A9w0LdfhyBHl+Yu4z75NDkEIa7qZpufyrSAwavGXxeh7xenvLG63Jf7AarA5Itp1DQ4j+qe2SmHlR/jFsk9DzAJYVqjT/VGFQpeubz0MLkIehlONwytOtQa9Nj7QF/lZsJwX6cnh/1uoOMqaWKUwRZV2E9++vjh97///O2vjx/+AEOQvoQiaZYRCE4QKFLg+2j9wu0Ti/7SADUQp3UvvvkoK1hCUhZLhfWV2UzcRqIcieAz61cz3dUaavVxO5KTC79EalxExxhbmuOuNd5ucItXJC4JyqsGupg8fCMImADoCiPTWtvUNe1Ez1bzhcgeZZjQW2N/sKSMzWpbwQbhGiVxWj5GdjrfipC3EHYIlRQDZuu0y8B+HJ8lOVGYrRCzI7l33hAEqMU++vKyVohsD539jWo6hbfJWK/0l0i3G5GZRpvTbnnmWcKhtzzvCtsVtTIMaTN7POtnOlpypFiKOJcTyeXaxWpbuOG+nts1Fu82f24z6Ut7xy8OxM+/IUbP3fKlbj+s7x14L0PiNvwixkv//ZceJj1dOD01z6URynTswrleuElM7hRppHBuxRwC9xissvEIRwtw6/1QprAJiyrrX5nMg2AIquLUi3qeh8X3nj5pPpfWd9oprBvxs1G+4T2ave8yq6LUYB2DCSB1JtaYXvWdWJZWA5tX3wGx/xZ0AW7/AOq/jg+hCAAA',
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
