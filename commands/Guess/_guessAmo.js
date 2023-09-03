/*CMD
  command: /guessAmo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Guess
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type != "private") {
  return
}
var state = Bot.getProperty("BOT")
if (state == "🛑 Turned OFF") {
  Bot.sendMessage("*🛑 Bot is currently In Mantainance*", { is_reply: true })
  return
}
var state2 = Bot.getProperty("GUE")
if (state2 == "🛑 Turned OFF") {
  Bot.sendMessage("*❌ Guess Is Currently Turned Off*", { is_reply: true })
  return
}
let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*❌ You're Ban From Using The Bot*", { is_reply: true })
  return
}
let res = Libs.ResourcesLib.userRes("trx")
if (res.value() < 0.99) {
  Bot.sendMessage("❌ To Participate In Guess You Must Have 1 TRX", {
    is_reply: true
  })
  return
}
if (message > res.value()) {
  Bot.sendMessage("❌ You Don't Have Enough TRX", { is_reply: true })
  return
}
let value = message
var clc  = (10/100)
//Bot.sendMessage(clc)
var clc2 = clc*message
//Bot.sendMessage(clc2)
let clc3 = parseFloat(((10/100)*message)+parseFloat(message))
//Bot.sendMessage(10/100*message+parseInt(message))
var butt = [[{ title: "✅ Confirm", command: "/guess#Now" }]]
Bot.sendInlineKeyboard(
  butt,
  "🔰 You Will Get : " +
    clc3 +
    " TRX If You Win\n\n❤️ Betting Amount : " +
    message +
    " TRX",
  { is_reply: true }
)
User.setProperty("GuessAmo", message, "double")

