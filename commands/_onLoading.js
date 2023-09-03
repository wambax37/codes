/*CMD
  command: /onLoading
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

var git = JSON.parse(content)
let tx = git.response.transaction.txID
var amount = git.Amount/1000000
var userPayment = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
userPayment.add(amount)

var TRX = CurrencyQuote.crypto.TRX
var x = TRX * amount
var amounts = x
var con = x

Bot.sendMessage("*Your withdrawal of *"+amount+"  JAT~ $"+con.toFixed(5)+"*  has been successfully sent\nTxid:* ["+ tx + "]" +"(https://tx.botdev.me/trx/" + tx + ")")


Api.sendMessage({
  chat_id: "@JudgeGamesBotPayments",
text: "*✨ New Withdrawal Sent ✨\n"+"━━━━━━━━━━━━━━\n👷Name:* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n*💲Amount : * "+amount+" TRX~$"+con.toFixed(5)+"\n🆔 *Transaction ID:*  ["+ tx + "]" +"(https://tx.botdev.me/trx/" + tx + ")" + "\n━━━━━━━━━━━━━━━\n➡️ *Withdrawn From @"+bot.name+"*",
  parse_mode: "Markdown",
disable_web_page_preview: true
})
