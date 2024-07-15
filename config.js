const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_51_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgMjExLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRhRDg0R1JWMnc4b0tQNzJVcW8zN0daK1dyWDRSZmxmWkNnY1d0cld1bHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZRbHhUOUVjUUplbE5lYVhocUZYaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTAwZTQ3N2QtOWE5MC00MmY4LWE3ZjEtNDZkZWRjNzdjOWY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgMTg2LFxuICAgICAgNTMsXG4gICAgICAyMTMsXG4gICAgICAyMTEsXG4gICAgICA2NSxcbiAgICAgIDExOSxcbiAgICAgIDcsXG4gICAgICAxMTgsXG4gICAgICAyNDAsXG4gICAgICA0OSxcbiAgICAgIDI0LFxuICAgICAgNTIsXG4gICAgICAyOSxcbiAgICAgIDM1LFxuICAgICAgMzMsXG4gICAgICA3MyxcbiAgICAgIDIzMSxcbiAgICAgIDE0MixcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMjU1LFxuICAgICAgNDAsXG4gICAgICAxNDksXG4gICAgICAxNjgsXG4gICAgICA0MCxcbiAgICAgIDE2MixcbiAgICAgIDgzLFxuICAgICAgMTc3LFxuICAgICAgMjA2LFxuICAgICAgMTQ0LFxuICAgICAgMTMzLFxuICAgICAgMTYsXG4gICAgICAxNDcsXG4gICAgICAxODMsXG4gICAgICAxNzMsXG4gICAgICAxMzEsXG4gICAgICAyMDEsXG4gICAgICA5OCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZGb0xzSEVKM0N6TFFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1MXcrV0JFbE14Z05DcjNPMjZPVEhjS0Zid21qbjVydE8zeHhRNVRLZm5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9vTHBXeUl4dWhSeStmYmtNV0p4aDNoUjliUG54ZFZETnF5SkdaSTF5STVwOVlKY3RzNFE5SXJUVTE1WldiZWlxQ0FIcWZzN0dWQXVadzRWUUtQdUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5JSmF2c1VNMERIZkU2NlZEVHdOaXlkTXVZUzlyWXYyd0dXVDZTUm9qZkZoYUFpc2hUOUhJZWxBSENaN2JQSWdjcjcxVExEZXRXUW1DNGlXTWs4aWdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc4NzA4NzA4OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjQxODM2Mzk3NjExMTc6MTBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3Nzg3MDg3MDg6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTE4MzA1XG59Igp9"  // PUT your SESSION_ID 


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
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
