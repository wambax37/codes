/*CMD
  command: /starti
  help: 
  need_reply: false
  auto_retry_time: 
  folder: /start 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: back to home ↩️, 🔙 back
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var balance = Libs.ResourcesLib.userRes("balance")
let res = Libs.ResourcesLib.userRes("vibb")
let currency = Bot.getProperty("currency");
var user = User.getProperty("status")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.sendKeyboard("👤 Account Information\n📥 Add Funds,🧮 Game Spot,📤 Withdraw Funds\n🎁 Free Bonus,💼 Set wallet,👨‍👨‍👧‍👦 Referral\n❓ Help,📄 Terms And Conditions,📊 Statistics","*😎 Welcome To @JudgeTorresGame_Bot,\nJoin us now in making money and earn 100x🎮 your betting guaranteed*\n\n_ 🚀 Deposit now to get started_")
}
if (user == "left") {
  Bot.runCommand("/start")
}
var a = User.getProperty("lol7")
if (a == undefined) {
User.setProperty("lol7","dn","string")

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add()
  Bot.sendMessageToChatWithId(refUser.chatId, "")
}

function doAlreadyAttracted() {
  Bot.sendMessage("")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
let u = Libs.ReferralLib.currentUser.attractedByUser()

if (u) {
var reff = ""+ u.telegramid+""
let currency = Bot.getProperty("currency");
let ref = Bot.getProperty("refbo")

let res = Libs.ResourcesLib.anotherUserRes("JAT",reff);  

res.add(+10)
Bot.sendMessageToChatWithId(reff, "*🎉 Congratulations You Have Received 10 JAT*  _For inviting new user_")

} else {
}
}

