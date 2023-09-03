/*CMD
  command: 📄 Terms And Conditions
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Terms And Conditions

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📄 terms
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
var alo = User.getProperty("TACacc")
if(!alo){
var bu=[[{title:"✅ Accept",command:"/acceNow"},{title:"❌ Decline",command:"/declNow"}]]
Bot.sendInlineKeyboard(bu,"📢 Games In This Maybe Be Addictive And Have Righ Risk Of Money Loss\n\nPlease Use It At Your Own Risk In Case Of Any Money Loss We Are Not Responsible.\n\nTo maintain our services, a 5% commission will be charged on all deposits and withdrawals.",{is_reply:true})
}else{
Bot.sendMessage("✅ You Already Accepted Terms And Conditions, You Can Use Bot Easily",{is_reply:true})
}
