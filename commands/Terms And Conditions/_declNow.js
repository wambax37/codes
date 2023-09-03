/*CMD
  command: /declNow
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Terms And Conditions
  answer: 
  keyboard: 
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
