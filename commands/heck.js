/*CMD
  command: heck
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

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/starti")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*⚠ Must join channel*")
}
