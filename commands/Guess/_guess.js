/*CMD
  command: /guess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Guess
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently In Mantainance*",{is_reply:true})
return }
var state2 = Bot.getProperty("GUE")
if (state2=="🛑 Turned OFF"){
Bot.sendMessage("*❌ Guess Is Currently Turned Off*",{is_reply:true})
return }
let stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You're Ban From Using The Bot*",{is_reply:true})
return }
let res = Libs.ResourcesLib.userRes("trx")
if(res.value()<0.99){
Bot.sendMessage("❌ To Participate In Guess You Must Have 1 TRX",{is_reply:true})
return }
if(!params){ return }
var chk_now = params.split(" ")
var selected = Bot.getProperty(""+user.telegramid+"GuessSelc")
let selc = selected?selected:[]
if(selc.length>14){
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var butt = [[{title:"✅ Start Game",command:"/guess#start Yes"}]]
Bot.sendInlineKeyboard(butt,"🚀 15 Digits Selected, Now You Can Start Game")
return }
if(selc.includes(""+chk_now+"")){
Bot.sendMessage("❌ "+chk_now+" Already Selected")
return }
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
selc.push(""+chk_now+"")
Bot.setProperty(""+user.telegramid+"GuessSelc",selc,"json")
Bot.sendMessage("✅ "+chk_now+" Selected")
var b=[[{title:"0",command:"/guess 0"},{title:"1",command:"/guess 1"},{title:"2",command:"/guess 2"},{title:"3",command:"/guess 3"}],[{title:"4",command:"/guess 4"},{title:"5",command:"/guess 5"},{title:"6",command:"/guess 6"},{title:"7",command:"/guess 7"}],[{title:"8",command:"/guess 8"},{title:"9",command:"/guess 9"},{title:"a",command:"/guess a"},{title:"b",command:"/guess b"}],[{title:"c",command:"/guess c"},{title:"d",command:"/guess d"},{title:"e",command:"/guess e"},{title:"f",command:"/guess f"}]]
Bot.sendInlineKeyboard(b,"🚀 Enter Your Choice\n🔎 Your Choice : `"+selected+"`")
/*}else{
Bot.sendMessage("❌ "+chk_now+" Already Selected")
}*/
