/*CMD
  command: ddart
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var res = Libs.ResourcesLib.userRes("trx")
if (res.value() < 1) {
  Bot.sendMessage("*❌ Insufficient Balance, You have only "+res.value().toFixed(2)+"JAT*")
Api.sendSticker({ sticker: "https://t.me/EMOJICHANNEL07/3",})
} else {
  Api.sendDice({
    on_result: "/rresult",
    emoji: "🎯"
  })
}
