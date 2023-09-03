/*CMD
  command: on_dice
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

var result = options.result.dice.value
var user_input = params

if(!result || !user_input){return}

var res = Libs.ResourcesLib.userRes("JAT")

if (user_input == result) {
  Bot.sendMessage("✅ It is right!")
  res.add(5)

// Statas Gloabales Ganadores
var tDiceW = Libs.ResourcesLib.anotherChatRes("totalDiceW","global")
tDiceW.add(1)
// Statas Gloabales Ganadores

  Bot.sendMessage("*🎁 Congratulations, you have received 500 JAT for wining*\n play again 😎")
} else {

// Statas Gloabales Perdedores
var tDiceL = Libs.ResourcesLib.anotherChatRes("totalDiceL","global")
tDiceL.add(1)
// Statas Gloabales Perdedores

  Bot.sendMessage("*🔸 Luck for the next!*")
  Bot.sendMessage("😪 *The correct number was " + result + "*")
}
