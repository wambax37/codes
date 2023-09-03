/*CMD
  command: 🌀 Twister
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
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
var ree = [[{text:"1000 JAT 🌀", callback_data:"/lucky 1"},{text:"2000 JAT 🌀", callback_data:"/lucky 2"}, {text:"5000 JAT 🌀", callback_data:"/lucky 5"}]]
Api.sendPhoto({photo:"https://t.me/sjjjjmhh/487"}) 
Api.sendMessage({
  text:"🌀 To win, Get a number higher than *5250* \n\nSelect amount to bet with", 
  reply_markup:{inline_keyboard: ree}
})
