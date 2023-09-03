/*CMD
  command: ❓ Help
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Help
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
var msg="1.) If You Want To Deposit Then Click On 📥 Add Funds\n\n2.) If You Want To Withdraw Then Click On 📤 Withdraw Funds\n\n3.) If you want to set a wallet address, click On 💼 Set wallet\n\n4.) To start playing and make a x10, click On 🧮 Game Spot\n\n5.) To receive free bonuses every day and earn more, Click On 🎁 Free Bonus\n\n6.) If you want to earn much more by inviting friends, Click On 👨‍👨‍👧‍👦 Referral\n\n7.) To know the statistics of the Bot, Click On 📊 Statistics\n\n8.) To know the account information, Click On 👤 Account Information\n\n8.) If you want to see our terms and conditions, Click On 📄 Terms And Conditions\n\n9.)Transparency with our community. Payments Channel: @JudgeGamesBotPayments\n\n10.) For contacts and questions write to us at: @judgetorres or Visit our website: www.judgetorres.vip"
Bot.sendMessage(msg,{is_reply:true})
