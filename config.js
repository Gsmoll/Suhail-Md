const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "boomplay.com" ;  
global.video= "youtube.com " ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Harare,Bulawayo ."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GSMOLL/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ suhail-md" 


global.devs = "0778708708" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0778708708";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://imgur.com/MWjUXcJ.jpeg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,263xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,263xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "0778708708,263xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = "SUHAIL_16_01_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWp3OVJvTlEzRXp5Rm1HWTQrbkwxb3VoWDF6RUpUWlF5WHlCVmRobXNTWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFp3RDRneXBUM3FYSWhYTHpvQ2lGd1wiLFxuICBcInBob25lSWRcIjogXCJkNjQxNGM3OS05ZWE5LTRkNDktYTAwYS05YmMzNGNkN2MzOTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAyMTAsXG4gICAgICAyMzIsXG4gICAgICAxMjEsXG4gICAgICAxODAsXG4gICAgICAxMjksXG4gICAgICAxODEsXG4gICAgICAzNSxcbiAgICAgIDI0LFxuICAgICAgNDcsXG4gICAgICA3MixcbiAgICAgIDEyNCxcbiAgICAgIDM1LFxuICAgICAgMjM2LFxuICAgICAgMTkyLFxuICAgICAgMTAzLFxuICAgICAgMTYsXG4gICAgICAxNTAsXG4gICAgICAxMTIsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICA4NyxcbiAgICAgIDc3LFxuICAgICAgMTY1LFxuICAgICAgMTU4LFxuICAgICAgMjE4LFxuICAgICAgOTYsXG4gICAgICAxMzMsXG4gICAgICAxMDIsXG4gICAgICAyMDIsXG4gICAgICA4NixcbiAgICAgIDQwLFxuICAgICAgNjEsXG4gICAgICAxMDksXG4gICAgICAxNTgsXG4gICAgICAxNzEsXG4gICAgICAxNDksXG4gICAgICAxNjYsXG4gICAgICAyNCxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxDUEZYWTRXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3Nzg3MDg3MDg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NDE4MzYzOTc2MTExNzoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYTV1YU1IRU9INjJMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBIU0hoSjBZcXJ0RnUvRUNFOUtoL29DeGo5K21QMDVvV1dRUm1obmllUUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYWpPQkpvd0U3cDJjL1VFcGFnb2dGbGhjNU5hTUhyOXZkYXdCV2puakJvY01GMVYrQ3p2eUxiLzlkM2dxVjZQeitzMDZnK1F2ellZdjVmZnpFTzVFQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmlvNy9QWDBDdTZXaXE1bTNtUCtVNDEvTytsNy9iMHNLMmxwNmg4SFoxZDNyWFc4U29aVDMxdlNFTllOank2OHhGL1YzNC9RcVcyZWZVYjVBR0RIZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc4NzA4NzA4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMyMTkzMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOcUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5xQy5qc29uIjogIntcImtleURhdGFcIjpcIm8rU0U0cXY3d0xzTXh1RzExQU5PS09abGF0T3VFQ1J6OXp5b1RoMCtFM2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1MzM4OTgxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzMjE5MzA4NjQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ BROLLY MD 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SEAN",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BROLLY-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SEAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SEAN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "...9c20";
global.aitts_Voice_Id = process.env.AITTS_ID|| "36";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
