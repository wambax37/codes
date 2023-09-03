/*CMD
  command: /addWallNow
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Wallet 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }

let wall = message
if(wall.length>30&&wall.length<45){
User.setProperty("wallet",wall,"text")
Bot.sendMessage("*✅ JAT Address Set To :* `"+wall+"`",{is_reply:true})
}else{
Bot.sendMessage("*❌ Wrong Judge Torres Address*",{is_reply:true})
}
