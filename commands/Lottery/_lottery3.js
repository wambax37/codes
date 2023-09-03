/*CMD
  command: /lottery3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Lottery

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
var state2 = Bot.getProperty("LOT")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Lottery Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
if(message.length>5){ Bot.sendMessage("❌ Must Select 5 Digits Number Between 1-5",{is_reply:true}) 
return }
if(message.includes("6")||message.includes("7")||message.includes("8")||message.includes("9")||message.includes("0")){
Bot.sendMessage("❌ 3 Digits Number Between 1-3",{is_reply:true}) 
return }
if(message.includes("1")||message.includes("2")||message.includes("3")||message.includes("4")||message.includes("5")){
var cut=User.getProperty("lotamo")
var tLots = Libs.ResourcesLib.anotherChatRes("totalLots","global")
tLots.add(cut)
let res = Libs.ResourcesLib.userRes("JAT")
res.remove(cut)
var lott = message
var lo = Bot.getProperty(""+ user.telegramid+"lot")
var lot = lo ? lo : []
//Bot.sendMessage(""+inspect(Bot.getProperty(""+ user.telegramid+"lot"))+"")
let text="";
let i;
let c="";
for(i=1;i<=3;i++){
function getRandomItem(arr) {
  // get random index value
  var randomIndex = Math.floor(Math.random() * arr.length)
  // get random item
  var item = arr[randomIndex]
  return item
}
var arr = ["1", "2", "3"]
var result = getRandomItem(arr)
if(!lot.includes(result)){
c+=result;
//Bot.sendMessage(c)
}else{
i=i-1
continue }
}
if(message==c){
let ad=cut*2
res.add(ad)
Bot.sendMessage("🎊 WoHoo You Win *"+ad+"* JAT",{is_reply:true})
var tLotW = Libs.ResourcesLib.anotherChatRes("totalLotsW","global")
tLotW.add(1)
}else{
var tLotL = Libs.ResourcesLib.anotherChatRes("totalLotsL","global")
tLotL.add(1)
Bot.sendMessage("It's "+c+"\n😭 Opps You Lose *"+cut+"* JAT",{is_reply:true})
}
}else{
Bot.sendMessage("❌ Must Select 5 Digits Number Between 1-5",{is_reply:true})
User.setProperty("lotamo",null)
}

