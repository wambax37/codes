/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Statistics

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
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment","global").value().toFixed(6)
var naijar = "333"  
var now = new Date();
Libs.DateTimeFormat.format(now, "m/dd/yy")
// Returns, e.g., 6/09/07
let ui = Libs.ResourcesLib.anotherUserRes("activer",naijar)
var piy = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
var tLots = Libs.ResourcesLib.anotherChatRes("totalLots","global").value().toFixed(4)
var tLotW = Libs.ResourcesLib.anotherChatRes("totalLotsW","global").value().toFixed(0)
var tLotL = Libs.ResourcesLib.anotherChatRes("totalLotsL","global").value().toFixed(0)
var tHshs = Libs.ResourcesLib.anotherChatRes("totalHshs","global").value().toFixed(4)
var tHshW = Libs.ResourcesLib.anotherChatRes("totalHshW","global").value().toFixed(0)
var tHshL = Libs.ResourcesLib.anotherChatRes("totalHshL","global").value().toFixed(0)
var tLuckW = Libs.ResourcesLib.anotherChatRes("totalLuckW","global").value().toFixed(0)
var tLuckL = Libs.ResourcesLib.anotherChatRes("totalLuckL","global").value().toFixed(0)
var tDiceW = Libs.ResourcesLib.anotherChatRes("totalDiceW","global").value().toFixed(0)
var tDiceL = Libs.ResourcesLib.anotherChatRes("totalDiceL","global").value().toFixed(0)
var tBetW = Libs.ResourcesLib.anotherChatRes("totalBetW","global").value().toFixed(0)
var tBetL = Libs.ResourcesLib.anotherChatRes("totalBetL","global").value().toFixed(0)
var tDartW = Libs.ResourcesLib.anotherChatRes("totalDartW","global").value().toFixed(0)
var tDartL = Libs.ResourcesLib.anotherChatRes("totalDartL","global").value().toFixed(0)
var tFBW = Libs.ResourcesLib.anotherChatRes("totalFBW","global").value().toFixed(0)
var tFBL = Libs.ResourcesLib.anotherChatRes("totalFBL","global").value().toFixed(0)
var status = Libs.ResourcesLib.anotherChatRes("status","global").value().toFixed(0)
Bot.sendMessage("🔥 Full Statics Of Bot 🔥\n\n⌛ Bot Uptime: 99.99%\n📆 Date Time: "+now+"\n\n👤 Total Users : "+status+"\n📥 Total Deposits : "+ ui.value().toFixed(4) +" JAT\n📤 Total Withdraws : "+ piy.value().toFixed(4) +" JAT\n------------------------------------------------\n✨ Total Lotteries\n🤑 Total Lotteries Winned : "+tLotW+"\n😥  Total Lotteries Losed : "+tLotL+"\n---------------------------\n🎲 Dice Stats\n🤑 Total Dice Winned : "+tDiceW+"\n😥  Total Dice Losed : "+tDiceL+"\n---------------------------\n⚽️ FootBall Stats\n🤑 Total FootBall Winned : "+tFBW+"\n😥  Total FootBall Losed : "+tFBL+"\n---------------------------\n🌀 Twister Stats\n🤑 Total Twister Winned : "+tLuckW+"\n😥  Total Twister Losed : "+tLuckL+" ",{is_reply:true})

// \n🎯 Dart Stats\n🤑 Total Dart Winned : "+tDartW+"\n😥  Total Dart Losed : "+tDartL+"\n---------------------------
