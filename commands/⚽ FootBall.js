/*CMD
  command: ⚽ FootBall
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
var buttons = [
  [
    { title: "Play  ⚽", command: "bball" },
    //{ title: "1 JAT", command: "/ondart" },
    //{ title: "5 JAT", command: "/ondart" }
  ],
  [{ title: "Back", command: "/starti" }]
]

Bot.sendInlineKeyboard(
  buttons,
  "*🌿Here you can play football and win more JAT\n🔥The rules are simple: \n\n If Result == 6,4,2 You win 3000 JAT\n If Result == 5,3,1 You will loose 1000 JAT Bet*\n\n_⚽ FootBall Game Play Price is Only 1000 JAT Per Ball Played_"
)
