const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN; // We will set the token as an environment variable
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toString().toLowerCase().includes("/start")) {
    bot.sendMessage(chatId, "Hi! I am your bot.");
  } else {
    bot.sendMessage(chatId, "Echo: " + msg.text);
  }
});
