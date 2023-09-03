/*CMD
  command: /lottery2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Lottery

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
var state2 = Bot.getProperty("LOT")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Lottery Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("JAT")
if(res.value()<0.99){
Bot.sendMessage("❌ To Participate In Lottery You Must Have 1 JAT",{is_reply:true})
return }
if(message>res.value()){
Bot.sendMessage("❌ Not Enough JAT, you Have Only *"+res.value().toFixed(8)+"* JAT",{is_reply:true})
return }
let to=message*2;
Bot.sendMessage("🚡 Lottery Amount "+message+" JAT\n⛽ You Will Get "+to+" JAT If You Win\n🔰 Send 3 Digit Number Between 1-3",{is_reply:true})
User.setProperty("lotamo",message,"Float")
Bot.runCommand("/lottery3")
