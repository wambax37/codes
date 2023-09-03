/*CMD
  command: ✨ Lottery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Lottery
  answer: 
  keyboard: 
  aliases: /lottery
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
var state2 = Bot.getProperty("LOT")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Lottery Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("JAT")
if(res.value()<999){
Bot.sendMessage("❌ To Participate In Lottery You Must Have 1,000 JAT",{is_reply:true})
return }
Bot.sendMessage("_🔰 Enter Amount Of JAT To Participate In Lottery_",{is_reply:true})
Bot.runCommand("/lottery2")

