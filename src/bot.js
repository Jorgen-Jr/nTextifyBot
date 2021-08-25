
const TelegramBot = require('node-telegram-bot-api');
const transformer = require('./util/transformer');

const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('inline_query', (query) => {
  const queryId = query.id;
  const queryContent = query.query;
  const result = {
    regular: queryContent,
    owo: transformer.owo(queryContent),
    backwards: transformer.backwards(queryContent),
    upside_down: transformer.upsideDown(queryContent),
    mirrored: transformer.mirrored(queryContent),
    tiny: transformer.tiny(queryContent),
  };

  const results = [{
    type: 'Article',
    id: 1,
    title: "Regular, just normal boring text",
    description: result.regular,
    input_message_content: {
      message_text: result.regular,
    },
  }, {
    type: 'Article',
    id: 2,
    title: 'OwU)~*',
    description: result.owo,
    input_message_content: {
      message_text: result.owo
    },
  }, {
    type: 'Article',
    id: 3,
    title: 'Backwards',
    description: result.backwards,
    input_message_content: {
      message_text: result.backwards
    },
  }, {
    type: 'Article',
    id: 4,
    title: 'Upside Down',
    description: result.upside_down,
    input_message_content: {
      message_text: result.upside_down,
    },
  }, {
    type: 'Article',
    id: 5,
    title: "Mirrored",
    description: result.mirrored,
    input_message_content: {
      message_text: result.mirrored,
    },
  }, {
    type: 'Article',
    id: 6,
    title: "Tiny",
    description: result.tiny,
    input_message_content: {
      message_text: result.tiny,
    },
  }
  ]

  bot.answerInlineQuery(queryId, results);
});

// Listen for any kind of message.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'To use this bot, simply use the inline mode @ntextifybot + message');
});