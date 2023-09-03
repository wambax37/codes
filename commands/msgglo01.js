/*CMD
  command: msgglo01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if(user.telegramid != 6606284055){
Bot.sendMessage("*😣 You Are Not Admin Or Mod*")
return
}
let id=User.getProperty("adminmsgsid")
var fullBotUsers = Bot.getProperty("wholeUsers")

//VIDEO
if (request.video) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    
    if (!request.caption) {
      Api.sendVideo({ chat_id: info, video: request.video.file_id })
    }
    if (request.caption) {
      Api.sendVideo({
        chat_id: info,
        video: request.video.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//FILE
if (request.document) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    
    if (!request.caption) {
      Api.sendDocument({ chat_id: info, document: request.document.file_id })
    }
    if (request.caption) {
      Api.sendDocument({
        chat_id: info,
        document: request.document.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//AUDIO
if (request.audio) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    
    if (!request.caption) {
      Api.sendAudio({ chat_id: info, audio: request.audio.file_id })
    }
    if (request.caption) {
      Api.sendAudio({
        chat_id: info,
        audio: request.audio.file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}

//PHOTO
if (request.photo[0]) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
   
    if (!request.caption) {
      Api.sendPhoto({ chat_id: info, photo: request.photo[0].file_id })
    }
    if (request.caption) {
      Api.sendPhoto({
        chat_id: info,
        photo: request.photo[0].file_id,
        caption: request.caption,
        parse_mode: "HTML"
      })
    }
  }
  return
}
//END
//STICKER
if (request.sticker) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    
    Api.sendSticker({ chat_id: info, sticker: request.sticker.file_id })
  }
  return
}
//ANIMATION
if (request.animation) {
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    Api.sendAnimation({ chat_id: info, animation: request.animation.file_id })
  }
  return
}
//END
if (message.length > 10000) {
  Bot.sendMessage("Message Is Too Big.")
Bot.runCommand("Broadcastt") 
return
}
var fg="✅ Your Global Post Has Been Successfully Sent To all Users Of This Bot"
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Api.editMessageText({chat_id:chat.chatid,text:fg,message_id:id})
var b=[
[{title:"◀️ Return",command:"/adminmassmessage01"},{title:"↩️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  Api.sendMessage({
    chat_id: info,
    text: message,
    parse_mode: "HTML"
  })
}
