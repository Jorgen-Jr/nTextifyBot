
const TelegramBot = require('node-telegram-bot-api');
const transformer = require('./util/transformer');

const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('inline_query', (query) => {
  const queryId = query.id;
  const queryContent = query.query;

  const results = [{
    type: 'Article',
    id: 1,
    title: "Regular, just normal boring text",
    description: queryContent,
    input_message_content: {
      message_text: queryContent,
    },
  }, {
    type: 'Article',
    id: 2,
    title: 'Backwards',
    description: transformer.backwards(queryContent),
    input_message_content: {
      message_text: transformer.backwards(queryContent)
    },
  }, {
    type: 'Article',
    id: 3,
    title: 'Upside Down',
    description: transformer.upsideDown(queryContent),
    input_message_content: {
      message_text: transformer.upsideDown(queryContent),
    },
  }, {
    type: 'Article',
    id: 4,
    title: "Mirrored",
    description: transformer.mirrored(queryContent),
    input_message_content: {
      message_text: transformer.mirrored(queryContent),
    },
  }, {
    type: 'Article',
    id: 5,
    title: "Tiny",
    description: transformer.tiny(queryContent),
    input_message_content: {
      message_text: transformer.tiny(queryContent),
    },
  }, {
    type: 'Article',
    id: 6,
    title: "Tiny and Upside Down",
    description: transformer.tinyUpsideDown(queryContent),
    input_message_content: {
      message_text: transformer.tinyUpsideDown(queryContent),
    },
  },
  ]

  bot.answerInlineQuery(queryId, results);
});

// Listen for any kind of message.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'To use this bot, simply use the inline option @ntextifybot + text');
});
