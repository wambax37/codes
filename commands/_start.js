/*CMD
  command: /start
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

var mode = Bot.getProperty("mode")
if (mode == "On") {
  Api.sendPhoto({
    photo: "https://i.ibb.co/k2Mrf3p/file-206.jpg",
    caption:
      "<b> ⚠️ Bot Is Currently Under Maintainace.</b>",
    parse_mode: "HTML"
  })

  return
} 
var us = Bot.getProperty("broadcasting", { list: {} })
if (!us.list[user.telegramid]) {
  us.list[user.telegramid] = { user_id: user.id, user_tg: user.telegramid }
  Bot.setProperty("broadcasting", us, "json")
}
let welcome = Libs.ResourcesLib.userRes("wel");
let res = Libs.ResourcesLib.userRes("balance");
let totalusers = Libs.ResourcesLib.anotherChatRes("totalusers", "global");
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
if(welcome.value()<1){
welcome.set(1)
totalusers.add(1);
status.add(1)
}


function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.telegramid, 
    "➕You just Refered new user: @" + user.username);
}
function doAlreadyAttracted(){
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);


var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  Bot.setProperty("wholeUsers", "json")
}
Bot.runCommand("/stari")
