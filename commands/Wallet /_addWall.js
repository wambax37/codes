/*CMD
  command: /addWall
  help: 
  need_reply: false
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
Bot.sendMessage("🚀 Enter Your Judge Torres Wallet Address of the network BSC")
Bot.runCommand("/addWallNow")
