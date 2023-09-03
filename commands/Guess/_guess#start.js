/*CMD
  command: /guess#start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Guess
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
var state2 = Bot.getProperty("GUE")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Guess Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("trx")
if(res.value()<0.99){
Bot.sendMessage("❌ To Participate In Guess You Must Have 1 TRX",{is_reply:true})
return }
if(!params){ return }
var chk_now = params.split(" ")
if(chk_now=="No"){
Bot.setProperty(""+user.telegramid+"GuessSelc",null)
Bot.sendMessage("🥰 Done Game Is Cancelled")
}else if(chk_now=="Yes"){
var chs = Bot.getProperty(""+user.telegramid+"GuessSelc")
var button = [[{title:"✅ Continue",command:"/start#guess Yes"},{title:"❌ Cancel",command:"/guess#start No"}]]
Bot.sendInlineKeyboard(button,"🔰 Your Choice : `"+chs+"`")
}else{
Bot.sendMessage("🛑 Try Again Later")
}
