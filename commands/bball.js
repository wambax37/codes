/*CMD
  command: bball
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
var res = Libs.ResourcesLib.userRes("JAT")
if (res.value() < 999) {
  Bot.sendMessage("*❌ Insufficient Balance, You have only "+res.value().toFixed()+" JAT*")
Api.sendSticker({ sticker: "https://t.me/EMOJICHANNEL07/3",})
} else {
  Api.sendDice({
    on_result: "/rresult2",
    emoji: "⚽"
  })
}
