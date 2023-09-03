/*CMD
  command: /broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let p = User.getProperty("adminmsgsid")
let ad= Bot.getProperty("6606284055")
if(data.chat.chatid==6606284055){
//let x ="Now send me text of your global message you can use the formatting of text bellow given\n➡️ * Your text * For Bold Text\n➡️ _Your Text_ For Show italic text\n➡️ [Text Button Text](Text button link) For create text button for opening link\n\n✏️ Now Send Me Text of your global Message "
let yo=Bot.getProperty("formatting_style")
let x= "*🖇 Now Send Me Your Global Message Which You Want To Send All Users Of Your Bot*\n\n_🚫 Note:To Check The Messages Before Sending Because It Will Sent To All Users After This_"
Bot.runCommand("msgglo01")
Bot.editMessage(x,p,{parse_mode:"HTML"})}else{
Bot.runCommand("/start")}
