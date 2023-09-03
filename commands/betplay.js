/*CMD
  command: betplay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🎭 * Heads or Tails? *
  keyboard: Heads, Tails, \n🎰 Bet, \n⬅️ Return
  aliases: 
CMD*/

var Bet = User.getProperty("bet")
let res = Libs.ResourcesLib.userRes("trx")

let win = Libs.Random.randomInt(1,2);
if (win == 1){
if (message == "Heads"){
Bot.sendMessage("It's a Head!")
Bot.sendMessage("You Win😃!")
res.add(Bet)
res.add(Bet)
// Statas Gloabales Ganadores
var tBetW = Libs.ResourcesLib.anotherChatRes("totalBetW","global")
tBetW.add(1)
// Statas Gloabales Ganadores
Bot.sendMessage("🥳 Congratulations, you just received 2x "+Bet+" TRX")
}else{
Bot.sendMessage("It's a Head!")
Bot.sendMessage("You Lose☹️!")
res.add(-Bet)
// Statas Gloabales Perdedores
var tBetL = Libs.ResourcesLib.anotherChatRes("totalBetL","global")
tBetL.add(1)
// Statas Gloabales Perdedores
Bot.sendMessage("😭 Ah, that bad luck, you just lost "+Bet+" TRX")
}
}else{
if (message == "Tails"){
Bot.sendMessage("It's a Tails!")
Bot.sendMessage("You Win😃!")
res.add(Bet)
res.add(Bet)
// Statas Gloabales Ganadores
var tBetW = Libs.ResourcesLib.anotherChatRes("totalBetW","global")
tBetW.add(1)
// Statas Gloabales Ganadores
Bot.sendMessage("🥳 Congratulations, you just received 2x  "+Bet+" TRX")
}else{
Bot.sendMessage("It's a Tails!")
Bot.sendMessage("You Lose☹️!")
res.add(-Bet)
// Statas Gloabales Perdedores
var tBetL = Libs.ResourcesLib.anotherChatRes("totalBetL","global")
tBetL.add(1)
// Statas Gloabales Perdedores
Bot.sendMessage("😭 Ah, that bad luck, you just lost "+Bet+" TRX")
}
}
Bot.runCommand("Cr")

let times = User.getProperty("times")
if (times == undefined){
User.setProperty("times", 1, "integer")
}else if (times < 10){
User.setProperty("times", times+1, "integer")
}
