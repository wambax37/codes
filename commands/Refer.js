/*CMD
  command: Refer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👨‍👨‍👧‍👦 referral
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let refList = Libs.ReferralLib.getRefList()
  let users = refList.getUsers()
  if (users.length < 100000000) {
    var count = users.length
  } else {
    var count = refList.count
  }
let res = Libs.ResourcesLib.userRes("refcom");
let reflink=Libs.ReferralLib.currentUser.getRefLink(bot.name,"start");
let lib = Libs.ReferralLib
var conRef= Libs.ResourcesLib.userRes("conRef")
Bot.sendMessage("*🤑 Earn 25 Judge Torres JAT for New referral\n\n🔥 Your Total Downlines*\n  `"+count+"` *Downlines\n\n✅ Ref Link to share link with your friends: "+reflink+"*");}
