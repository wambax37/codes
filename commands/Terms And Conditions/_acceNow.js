/*CMD
  command: /acceNow
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Terms And Conditions

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (chat.chat_type != "private") {
  return
}

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var alo = User.getProperty("TACacc")
if(!alo){
User.setProperty("TACacc",user.telegramid,"String")
Bot.sendMessage("*✅ Now You Can Use Bot Now*")
return }
