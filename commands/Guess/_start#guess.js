/*CMD
  command: /start#guess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Guess
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
var state2 = Bot.getProperty("GUE")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Guess Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("JAT")
if(res.value()<0.99){
Bot.sendMessage("❌ To Participate In Guess You Must Have 1 JAT",{is_reply:true})
return }
if(!params){ return }
var chk_now = params.split(" ")
if(chk_now=="Yes"){
var iallusers =
["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"]
function getRandomItem(arr) {

    // get random index value
    var randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    var item = arr[randomIndex];

    return item;
}
var arr = iallusers
var result = getRandomItem(arr);
var tHshs = Libs.ResourcesLib.anotherChatRes("totalHshs","global")
var tHshW = Libs.ResourcesLib.anotherChatRes("totalHshW","global")
var tHshL = Libs.ResourcesLib.anotherChatRes("totalHshL","global")
let res2 = Libs.ResourcesLib.userRes("JAT")
var amotoreminhsh = User.getProperty("GuessAmo")
res2.remove(parseFloat(amotoreminhsh))
tHshs.add(parseFloat(amotoreminhsh))
var selected = Bot.getProperty(""+user.telegramid+"GuessSelc")
let selc = selected?selected:[]
if(selc.includes(""+result+"")){
Bot.setProperty(""+user.telegramid+"GuessSelc",null)
var amotoad = User.getProperty("GuessAmo")
var amotoadd = parseFloat(((10/100)*amotoad)+parseFloat(amotoad))
res.add(parseFloat(amotoadd))
tHshW.add(1)
Bot.sendMessage("😍 Wohoo! Its "+result+" , You Won This Game And Get "+amotoadd+" JAT")
}else{
Bot.setProperty(""+user.telegramid+"GuessSelc",null)
var amotocut = User.getProperty("GuessAmo")
tHshL.add(1)
res.remove(parseFloat(amotocut))
Bot.sendMessage("😭 Oops Its "+result+" , You Lose This Game")
}
}else{
Bot.sendMessage("🛑 Try Again Later")
}
