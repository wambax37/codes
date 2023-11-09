/*CMD
  command: /entera
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn")
withdrawn = parseFloat(withdrawn)
var wallet = User.getProperty("wallet")
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment JAT", "global")
let res  = Libs.ResourcesLib.userRes("JAT")
let ress = Libs.ResourcesLib.userRes("tw")

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  Bot.runCommand("/entera")
  return
}
let wn = Bot.getProperty("mw")
if (message < 100) {
  Bot.sendMessage("❌ _You Need To Withdraw Minimum  of 100 JAT_")
Bot.runCommand("/entera")
} else {
  if (message > res.value()) {
    Bot.sendMessage(
      "*😪 Huh, Sorry You Did Not Have up to* "+ message +" *To Withdraw\nYou have only* " +
        res.value()+
        " "
    )
Bot.sendMessage("_Enter an amount valid to your balance_")
Bot.runCommand("/entera")
  } else {
    ress.add(+message) 

    userPayment.add(+message)
if (!user.first_name) {
  var valid_name = user.last_name
} else {
  var valid_name = user.first_name
}
var amo = message*0.95	
//⚠️ Warning Webhook lib must be installed

var private_key = "00000000000"
var amos = amo*1000000
HTTP.get( {
    url: "https://tronb2.vercel.app/sent/"+wallet+"/"+amos+"/"+private_key+"",
    success: '/onLoading'} )

    res.add(-data.message)
    
}}
