//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "null";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "null";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "null";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://don_junior_user:5NwRHqgbaQw2IwyK60hcO66riSzZoLtV@dpg-cqncdetsvqrc73fmghu0-a.oregon-postgres.render.com/don_junior";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "+18494617708";
global.owner = process.env.OWNER_NUMBER || "+18097677081";
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERFRllpSHlOZ0JRZFR3bVVseXdxZitSVjVsQTJiQjlBckNNSzZBTVUwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXYzYVU4SHVacWRvSGhMOHZSdlFJbzFVVk1Wa1IySTJ0TDdSS0F1NVFWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRVRaNHBuVEJFZSt6Nk1oYmZieFdENlZmcDRYdmNTSkZaQVRja0hjM2tVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVWlNqMEg1eTk0Ri9WWTZnWUE1SjNXR3RXUU9hNEZ0a2NCRTUyZXZYbmlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVEVHBPakc3SFM0TUp6VWVQOStZaXZwalFrazNNTXE1UzA1cHFlb01iWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlxcmFURnpkWC9IeWl5TytuVzFkSVp1b0JYRWtuM3F0a1BIcmVhVm1aUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpwdGl1VXNIR1huMDVRS2VCc2VmWHloNnp2SUF2ZU94ZjN4a0o2RXUzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFHNndwamdrUjRnTGcyL2Y1dUxvMGw5OXY0RFJGOWdzVlE3SmtoNTNtZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBxekZJcEo2aS8zVHBBVEEraHg0OEt5ZkVaeEJ4bW5QdklPQmtObU5Uc3JEY3dyVkU2Z0FnSVNuTm9HUTVkeTA5MEM0dWZid3hsbFR3NHJFcHhKTmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6ImluUExBY2c2TmFlaTNxczZuSWFGVVcvaGJpUjk0UGlPU0FaYVFtWHR3bjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTgwOTc2NzcwODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0MzNTdFOTE0QkRDMzg4MzU5MDc5NzNGNkEzNDQxMEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzI0ODg4MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ1NiQnhmU2RSZ2EwUUZITS0zTDJYQSIsInBob25lSWQiOiI2MzU1ODdiZC0xZmM3LTQwMjItODgwMC00MmNiMzVmZjkzNTciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiai91R3lHdkVleGV1OVM0YjZ1TjhHeHhzZGo0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5UTlc2ZXdSY2NpcGlmQm52a1VmRkpaRjNYaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxWkROUVpNTSIsIm1lIjp7ImlkIjoiMTgwOTc2NzcwODE6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn6W68J+Snk1yc19Nb3Vzc2Xwn5Ke8J+ngyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHV6MUl3RkVPRGgyclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTnlhbmVEM3ZkSlNxcDM1MDdMZFdvZ1JueGVOb3Z4MWJsdGJQbzFZaEhsUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY095RUVkUzFPWmcrL041YXhvd0ZFMDNISkxPTFdrWkMveEVwcVprWUl5aXZkSTNtdnRYdk9jMzBzcmZGakdFV3c1QVlSMit0OHNyN1ZieEwvVTdHQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkVsRG9Ua1BONGovbTAwRWRMSDZEZDBmdjc4Ynd3cGJsTDhMeVVjWXFoc1ErUGZ2V2lTaVFTQVB1N20wbXRFL3pTNUdnVUxGYVlvS0RTSTlFTE1kRmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgwOTc2NzcwODE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUY21wM2c5NzNTVXFxZCtkT3kzVnFJRVo4WGphTDhkVzViV3o2TldJUjVVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMjQ4ODc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUowViJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ":",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "𝐃𝚯𝚴 𝐉𝐔𝚴𝚰𝚯𝚪𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜🇭🇹☠️👻Ø𝔾__𝔾í𝕣£🧃😈🇩🇴⌝☜",
  errorChat: process.env.ERROR_CHAT || "false",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "null",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "null",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "null",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "null",
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
