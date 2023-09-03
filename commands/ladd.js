/*CMD
  command: ladd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ladd
CMD*/

var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var bonus = 0.1
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "JAT",
    referrer.telegramid
  )
  referrerRes.add(bonus)

var referrers = Libs.ReferralLib.currentUser.attractedByUser()
if (referrers) {
  var referrerRess = Libs.ResourcesLib.anotherUserRes(
    "JAT",
    referrers.telegramid
  )
  referrerRess.add(bonus)
}
}
