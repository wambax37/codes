/*CMD
  command: Couta Dice
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var button = [{ title : "Go Back ↩️" , command : "🎮 Games" }]

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("retirada")
var wallet = User.getProperty("TRXwallet")
if( wallet == undefined ){
Bot.sendInlineKeyboard(button, "*❌ Your wallet not established*")
}else{
if (balance.value() < 1){
Bot.sendInlineKeyboard(button, "*⛔️ You need to have at least 500 JAT to roll the dice!\n\n💰 Your balance:* "+balance.value().toFixed(2)+" JAT")
}else{
balance.add(-1)
Bot.runCommand("🎲 Dice")
}
}}
