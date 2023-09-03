/*CMD
  command: 🎲 Dice
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⚠ Note: *This game cost 500 JAT to play and if you win you will get 1000 JAT total else 😪*

_🎲 Enter a random number between 1 to 6 🎲_
  ANSWER
  keyboard: 1, 2, 3, \n4, 5, 6,\n🎲 Dice, Go Back ↩️
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
let res = Libs.ResourcesLib.userRes("JAT")
if (res.value() < 500){
Bot.sendMessage("*📢 You have to own at least 500 JAT* ...\n_This game cost 500 JAT to play!_")
}else{
res.add(-3)
var buttons = [
    {title: "Go Back ↩️", command: "Go Back ↩️"}
];
var dice_game_played = User.getProperty("dice_game_played")

if (!dice_game_played) {
  dice_game_played = 0
}

var dice_game_last_played = User.getProperty("dice_game_last_played")
var now = new Date()

if(dice_game_last_played){
var time_from_last_played = now.getTime() - dice_game_last_played.getTime() 

if (time_from_last_played > 1000*60*60*12) {
  dice_game_played = 0
}
}

if (dice_game_played < 100) {
  if ((message > 0) & (message < 11)) {
      User.setProperty("dice_game_played",dice_game_played + 1,"integer")
      User.setProperty("dice_game_last_played",now , "datetime")

      Api.sendDice({ 
       on_result: "on_dice " + message, 
       emoji: "🎲" 
     })
  } else {
Bot.sendInlineKeyboard(buttons, "✨ This is a dice game.\n\n▫️Enter numbers 1 through 6 only."
    )
  }
} else {
  var next_chance = dice_game_last_played.getTime() + (1000*60*60*11)

  var time_left = next_chance - now.getTime()
  var hours = Math.floor(time_left / (1000 * 60 * 60))
  var minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((time_left % (1000 * 60)) / 1000)

  var time_completed = now.getTime() - dice_game_last_played.getTime()
  var hours_completed = Math.floor(time_completed / (1000 * 60 * 60))
  var minutes_completed = Math.floor((time_completed % (1000 * 60 * 60)) / (1000 * 60))
  var seconds_completed = Math.floor((time_completed % (1000 * 60)) / 1000)

Bot.sendInlineKeyboard(buttons, "*✳️ The game has been played 10 times today. \nCome back tomorrow or try some other games!* \n\nYou've already played the last game before\n*" +
      hours_completed  +
      " HRS " +
      minutes_completed +
      " MIN " +
      seconds_completed +
      " SEC*"  + 
      "\n\nYou can play again in \n*" +
      hours +
      " HRS " +
      minutes +
      " MIN " +
      seconds +
      " SEC*" 
  )
}
}
