/*CMD
  command: 🔮 Hash Guess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Guess
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
var state2 = Bot.getProperty("GUE")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Guess Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("trx")
if(res.value()<0.99){
Bot.sendMessage("❌ To Participate In Guess You Must Have 1 TRX",{is_reply:true})
return }
Bot.sendMessage("⭐ Enter How Much TRX You Will You Use To Play Games",{is_reply:true})
Bot.runCommand("/guessAmo")
