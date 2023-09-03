/*CMD
  command: was
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📤 withdraw funds
CMD*/

var bannnk=Bot.getProperty("banuser"+user.telegramid)
if(bannnk=="banned"){
Bot.sendMessage("*😪 You are banned*")
}else{
let res = Libs.ResourcesLib.userRes("JAT")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("*❌ wallet Not set*")
}else{
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
if (res.value() < 1){
Bot.sendMessage("_❌ You Need Minimum 10,000 JAT To Withdraw_")
}else{
Bot.sendMessage("📤* Enter amount to withdraw*")
Bot.runCommand("/entera")
}
}
}
