/*CMD
  command: /on
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
Bot.setProperty("mode","On","string")
Bot.sendMessage("♻️ Maintainance Mode Set To On")
}else{
Bot.sendMessage("⛔️ You Are Not An Admin")
}
