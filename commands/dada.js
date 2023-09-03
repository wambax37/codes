/*CMD
  command: dada
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🎯 dart
CMD*/

var bal = Libs.ResourcesLib.userRes("trx")
var buttons = [
  [
    { title: "Play  🎯", command: "ddart" },
    //{ title: "1 TRX", command: "/ondart" },
    //{ title: "5 TRX", command: "/ondart" }
  ],
  [{ title: "🚫 Cancel", command: "/starti" }]
]

Bot.sendInlineKeyboard(
  buttons,
  "*🌿Here you can play Darts and Win more\n⚠ The rules are simple:\n\nIf Dart Hit Red 🔴 You Win 2 TRX\n If Dart hit white ⚪or Destroyed 🔶 you will lose Bet\n\n🎯Dart Game Play price is 1 Trx Per Dart*"
)

