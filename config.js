//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://don_junior_user:5NwRHqgbaQw2IwyK60hcO66riSzZoLtV@dpg-cqncdetsvqrc73fmghu0-a.oregon-postgres.render.com/don_junior";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "24104341301";
global.owner = process.env.OWNER_NUMBER || "24104341301";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlXUUl3WklzWVVkbFJLSlVXb3NKTnZDOWpodFNyT2libVZramRKWlJtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1ArSFNFVnBIczhlTjZsaXVUbjBNaGF0NjY3NjNyQnpXbEpPUkJxdWtVQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSE1nYkIvcFRGTkt5VU42SmErVEdJWlRCRitrc2hSV280MEVTZXE0eTFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiOFh1QnljT1dqaEVMZnJCV0diemdiamFoMUJXbU1YN1cvdnJoOTJUWXo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCNlhKWVlZKzFYODZOZk9MNzIvNDk0Z2FZelkxMTVoYVVSUlQzVExzVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMyK3FGSWx3MDJSQWFldnJ2QTRLWUNDb2NSTzNvTml5Tm42QTI4V1JYbWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05US3cxbEoyR1lnZmhJQ3VSbHIxS3o2TWhYUzIrSGdjNXF4b3BMNytVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTFmSklMT3haSTBQV0ZTc0lJTWpQaGxLSGIrcVJUYTczcUlmaTd5M29Daz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJXUW5YanE3YnVHS2NNa0IxblZ2R1MzQ0lCb29IaDMzRjJhR2dFa0VHaGgrZDZLTURFMUJObkFVQ2JhVzVCQW9oa1RITEVSbDZGa3RmbDlEOEU0OGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJUK1p0VkE0SVpyWm5Ma1dJMllUaWFQQXMvRm5wRXduUEZXdUg4YW1qRGUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmejhpTXEwN1JlcVBsSGdKTmFndUJ3IiwicGhvbmVJZCI6ImRlODE2YmNmLTk2ZTYtNGU1Yi1hZjhlLTZmOTk2Mzc5ZjViNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RnRSa0ljT0VuMDU0MUsvWE5pVEQvNTJmWmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0p0dVRxalpwQzcyRm42MGl5bVU0eFAvMFhjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldFRVdDUVlQIiwibWUiOnsiaWQiOiIyNDEwNDM0MTMwMToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCD8J2ar/CdmrQg8J2QifCdkJTwnZq08J2asPCdmq/wnZqqIPCdla/wnZaU8J2WkvCdlo7wnZaT8J2WmvCdlpjqp4Lwk4aq4bWHyrPhtZLKt+KBv+KBqSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnE1dHRvSEVNYTkyclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRGxrOXF5SkJmS3RRcUlLdkJZS2p3cUZGdVB4WTAwTUJPbVBYMUR2UUdoMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiamVBSmFiZkVUOWpFQ256TWo4ZVd2S1o0MUtBSDFMTU1Ka2U4Y2g0M2lLY0VjR2ZDbUFCdXcrU3FLdUV1U2xLTmFZbUdRMFltMC9ib1hXTURxWjh2RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkQwZmdYUVc4NzROL1ZnVGlpK2Q5eUNmajlNTktsSmRYTDg5U3U5UW9JVW5FRnY2WEIvRUJMMkY3VGFhOTdnOG5ldnNEWHhndU1Hbm54ZTdLQW81QWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxMDQzNDEzMDE6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTVaUGFzaVFYeXJVS2lDcndXQ284S2hSYmo4V05OREFUcGoxOVE3MEJvZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzI0NDI0NH0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜𝐃𝚯𝚴 𝐉𝐔𝚴𝚰𝚯𝚪⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
