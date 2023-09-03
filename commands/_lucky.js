/*CMD
  command: /lucky
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

var num = parseInt(params);
var ba = Libs.ResourcesLib.userRes("JAT");

if(ba.value() < num){
var button = [{ title : "Deposit 💰" , command : "Deposit 💰" }]

Bot.sendInlineKeyboard(button, "🚨 Not Enough  Balance Please Fund Your Wallet") 
return
}

var ran = Libs.Random.randomInt(0, 7190);
if(ran < "5250"){
var button = [{ title : "Play Again 🌀" , command : "🌀 Twister" }]
// Statas Gloabales Perdedores
var tLuckL = Libs.ResourcesLib.anotherChatRes("totalLuckL","global")
tLuckL.add(1)
// Statas Gloabales Perdedores
Bot.sendInlineKeyboard(button, "❌ "+ran+" Is Less Than 5250\n🥵 You Lost *"+num+" JAT*\n\n😊 _You Can Try Again To stand The chance To win More JAT_")
ba.remove(num) 
Bot.runCommand("ladd")
return
}
var button = [{ title : "Play Again 🌀" , command : "🌀 Twister" }]
// Statas Gloabales Ganadores
var tLuckW = Libs.ResourcesLib.anotherChatRes("totalLuckW","global")
tLuckW.add(1)
// Statas Gloabales Ganadores







Bot.sendInlineKeyboard(button, "✅ Number : *"+ran+"* 🎉 _Congratulations  You Won and You received_ *"+num+"* TRX 💵")
ba.add(num)
return




