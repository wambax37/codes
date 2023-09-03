/*CMD
  command: getingmoneyfou
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
if (!content) {
  // for security we need to check
  // that this command runned only by lib
  // user can not run command with options
  return
}
var data = JSON.parse(content)

var amous = data.Amount
if (amous == undefined) {
  Bot.sendMessage("*😪 Your Deposit not found*")
}else {

var txid = data.response.transaction.txID
let amoun = data.Amount
var amounts = amoun
var currency = "TRX"

var TRX = CurrencyQuote.crypto.TRX
var x = TRX * amounts
var amount = x
var con = x

if (amoun >= 0 && con <= 50000000) {
  var amt = amoun*0.95
  
Bot.sendMessage("Your deposit confirmed\namount: "+amt+" JAT ~ $"+con.toFixed(3)+"\n\nTxid: "+txid+"")

Api.sendMessage({
  chat_id: "@JudgeGamesBotPayments",
text: "*🚀 New Deposit Received 🚀\n"+"━━━━━━━━━━━━━━━━━━\n👷User:* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n*💲Amount : * `"+
amt+"` TRX ~ $"+con.toFixed(3)+"\n🆔 *Transaction ID:*  ["+ txid + "]" +"(https://tx.botdev.me/trx/" + txid + ")" + "\n━━━━━━━━━━━━━━━━━━━\n➡️ *Deposit Again @"+bot.name+"*",
  parse_mode: "Markdown",
disable_web_page_preview: true
})
var res = Libs.ResourcesLib.userRes("JAT")
res.add(amt)


var naijar = "6555555566"  
let ui = Libs.ResourcesLib.anotherUserRes("activer",naijar);  
ui.add(amoun)
}
}
