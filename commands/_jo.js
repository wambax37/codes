/*CMD
  command: /jo
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

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
} else {
  let channel = "@JudgeGamesBotPayments"
  let id = user.telegramid
  Api.getChatMember({
    chat_id: channel,
    user_id: id,
    on_result: "heck"
  })
}

