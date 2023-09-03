/*CMD
  command: 💼 Set wallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wallet 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /wallet
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

let wallet = User.getProperty("wallet")
let towall = ""
if(!wallet){
towall+="❌ Not Set"
}else{
towall+=wallet
}
var key = [[{title:"⚙️ Set / Change Wallet",command:"/addWall"}]]
Bot.sendInlineKeyboard(key,"*⌛ Your Wallet:* `"+towall+"`")
