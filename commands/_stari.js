/*CMD
  command: /stari
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

Api.sendPhoto({
  photo: "https://judgetorres.vip/img/2.png", // it is picture!
  caption:
  "📢 Now "+user.first_name+",\n\n🔥Welcome to JUDGE Games Bot🔥\n\n✨AUTO-PAYMENTS BOT✨\nTo start playing and make a x100🎮\n\nThis bot lets you earn JAT by simples gaming.\n\n✨ Lottery\n🎰 Bet\n🎲 Dice\n⚽️ Football\n🌀 Twister\n\nMinimum deposit: 10,000 JAT\n\n👋 Please join our spot channel to continue more details and to continue to our Bot", parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [[{ text: "🚀🚀 Join Our Channel 🚀🚀", url: "https://t.me/JudgeGamesBotPayments" }],[{text:"✅ Continue to Bot", callback_data:"/jo"} 
    ]]}
  });

