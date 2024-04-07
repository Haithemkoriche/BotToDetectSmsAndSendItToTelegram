// Import the necessary library
const TelegramBot = require('node-telegram-bot-api');

// Retrieve the bot token from an environment variable
const token = process.env.TELEGRAM_TOKEN;
if (!token) {
    console.error('TELEGRAM_TOKEN environment variable not set');
    process.exit(1);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message
bot.on('message', (msg) => {
    // The chat ID is needed to send messages back to the user
    const chatId = msg.chat.id;

    // Check if the message text is "/start"
    if (msg.text.toString().toLowerCase() === "/start") {
        bot.sendMessage(chatId, "Hi! I am your bot. I will show you your SMS here.");
    } else {
        // For any other message, echo it back to the user
        bot.sendMessage(chatId, "Echo: " + msg.text);
    }
});
