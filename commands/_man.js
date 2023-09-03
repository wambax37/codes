/*CMD
  command: /man
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

if(user.telegramid == 6606284055){
var button = [[{ title : "⏸ On " , command : "/on" },{ title : "▶️ Off" , command : "/off" }]]
var cur = Bot.getProperty("mode")
Bot.sendInlineKeyboard(button, "♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Current Mode = "+cur+"")
}else{
Bot.sendMessage("⛔️ You Are Not An Admin")
}
