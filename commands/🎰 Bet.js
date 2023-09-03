/*CMD
  command: 🎰 Bet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

⚠️ Note: *The minimum bet is 1 TRX  and if you win you get 2x your played amount else if loose the amount will be  deducted*

_✅ Submit the amount you want to bet._
  ANSWER
  keyboard: 1, 2, 3, 4, 5, \n6, 7, 8, 9, 10, \n11, 12, 13, 14, 15\nReturn ↩️
  aliases: 
CMD*/

let times = User.getProperty("times")
if (times < 99999 | times == undefined){
var res = Libs.ResourcesLib.userRes("trx")
if (Number.isInteger(parseInt(message))){
if(parseInt(message) < 1){
Bot.sendMessage("*The minimum bet is 1 TRX*")
}else if(parseInt(message) > res.value()){
Bot.sendMessage("*❌ You do not have enough balance "+res.value().toFixed(2)+" TRX*")
Api.sendSticker({ sticker: "https://t.me/ShopMulBot",})
}else{
Bot.sendMessage("Ok, your bet is fixed at "+parseInt(message) )
User.setProperty("bet",parseInt(message),"integer")
Bot.runCommand("betplay")
}}else{
Bot.sendMessage("*⚠️ Only integer value!*")
}}else{
Bot.sendMessage("*You have played 9999 times in one day, come back tomorrow!*")
}
