/*CMD
  command: /rresult
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

var res = Libs.ResourcesLib.userRes("JAT")
var result = options.result.dice.value
if (6 == result) {
  res.add(2)
  Bot.sendMessage("Game result: " + options.result.dice.value)

// Statas Gloabales Ganadores
var DartW = Libs.ResourcesLib.anotherChatRes("totalDartW","global")
DartW.add(1)
// Statas Gloabales Ganadores

 Bot.sendMessage("*You won the game +2 JAT*")
}
if (5 == result) {
  res.add(-1)
Bot.sendMessage("Game result: " + options.result.dice.value)

// Statas Gloabales Perdedores
var tDartL = Libs.ResourcesLib.anotherChatRes("totalDartL","global")
tDartL.add(1)
// Statas Gloabales Perdedores

  Bot.sendMessage("You loose the game -1 JAT")
}
if (4 == result) {
  res.add(2)
Bot.sendMessage("Game result: " + options.result.dice.value)

// Statas Gloabales Ganadores
var DartW = Libs.ResourcesLib.anotherChatRes("totalDartW","global")
DartW.add(1)
// Statas Gloabales Ganadores

  Bot.sendMessage("*You won the game +2 JAT*")
}
if (3 == result) {
  res.add(-1)
Bot.sendMessage("Game result: " + options.result.dice.value)

// Statas Gloabales Perdedores
var tDartL = Libs.ResourcesLib.anotherChatRes("totalDartL","global")
tDartL.add(1)
// Statas Gloabales Perdedores

  Bot.sendMessage("You loose the game -1 JAT")
}
if (2 == result) {
  res.add(2)
Bot.sendMessage("Game result: " + options.result.dice.value)

// Statas Gloabales Ganadores
var tDartW = Libs.ResourcesLib.anotherChatRes("totalDartW","global")
tDartW.add(1)
// Statas Gloabales Ganadores

  Bot.sendMessage("*You won the game +2 JAT*")
}
if (1 == result) {
  res.add(-1)
Bot.sendMessage("Game result: " + options.result.dice.value)

// Statas Gloabales Perdedores
var tDartL = Libs.ResourcesLib.anotherChatRes("totalDartL","global")
tDartL.add(1)
// Statas Gloabales Perdedores

  Bot.sendMessage("*You loose the game -1 JAT*")
}
