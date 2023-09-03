/*CMD
  command: 👤 Account Information
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Balance

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
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("JAT").value().toFixed(4)
let res2 = Libs.ResourcesLib.userRes("JAT")
Bot.sendMessage("*Account Information\n\n🤴 Name:*  [" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")\n*🆔 Acct ID:* "+user.telegramid+"\n*💰 Balance : "+res+" JAT*\n\n_ 🚀 Deposit now_!!!")
//res2.add(999999)
