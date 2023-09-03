/*CMD
  command: /rresult2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("JAT")
var result = options.result.dice.value
if (6 == result) {
  res.add(2)
  Bot.sendMessage("Game result: " + options.result.dice.value)

////////////////////////////////////////////////// Statas Gloabales Ganadores
var tFBW = Libs.ResourcesLib.anotherChatRes("totalFBW","global")
tFBW.add(1)
//////////////////////////////////////////////////// Statas Gloabales Ganadores

 Bot.sendMessage("*You won the game +2 JAT*")
}
if (5 == result) {
  res.add(-4)
Bot.sendMessage("Game result: " + options.result.dice.value)

///////////////////////////////////////////////////////////////// Statas Gloabales Perdedores
var tFBL = Libs.ResourcesLib.anotherChatRes("totalFBL","global")
tFBL.add(1)
///////////////////////////////////////////////////////// Statas Gloabales Perdedores

  Bot.sendMessage("You loose the game -1 JAT")
}
if (4 == result) {
  res.add(2)
Bot.sendMessage("Game result: " + options.result.dice.value)

///////////////////////////////////////////////////////////// Statas Gloabales Ganadores
var tFBW = Libs.ResourcesLib.anotherChatRes("totalFBW","global")
tFBW.add(1)
////////////////////////////////////////////////////////// Statas Gloabales Ganadores

  Bot.sendMessage("*You won the game +2 JAT*")
}
if (3 == result) {
  res.add(-4)
Bot.sendMessage("Game result: " + options.result.dice.value)

////////////////////////////////////////////////////////////// Statas Gloabales Perdedores
var tFBL = Libs.ResourcesLib.anotherChatRes("totalFBL","global")
tFBL.add(1)
////////////////////////////////////////////////////////////// Statas Gloabales Perdedores

  Bot.sendMessage("You loose the game -1 JAT")
}
if (2 == result) {
  res.add(2)
Bot.sendMessage("Game result: " + options.result.dice.value)

////////////////////////////////////////////////////////////////// Statas Gloabales Ganadores
var tFBW = Libs.ResourcesLib.anotherChatRes("totalFBW","global")
tFBW.add(1)
///////////////////////////////////////////////////////////////// Statas Gloabales Ganadores

  Bot.sendMessage("*You won the game +2 JAT*")
}
if (1 == result) {
  res.add(-4)
Bot.sendMessage("Game result: " + options.result.dice.value)

////////////////////////////////////////////////////////////////////////// Statas Gloabales Perdedores
var tFBL = Libs.ResourcesLib.anotherChatRes("totalFBL","global")
tFBL.add(1)
////////////////////////////////////////////////////////////////////////// Statas Gloabales Perdedores

  Bot.sendMessage("*You loose the game -1 JAT*")
}
