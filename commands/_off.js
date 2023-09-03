/*CMD
  command: /off
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
Bot.setProperty("mode","Off","string")
Bot.sendMessage("♻️ Maintainance Mode Set To Off")
}else{
Bot.sendMessage("⛔️ You Are Not An Admin")
}
