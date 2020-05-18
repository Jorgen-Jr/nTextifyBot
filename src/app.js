const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const TextController = require('./controllers/TextController');

//Usando as politicas de acesso do cors
app.use(cors());

//Permitir que a aplicação receba requisições em formato json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Carregar as variáveis de enviromnent.
if (process.env.NODE_ENV !== 'production') {
  if (process.env.NODE_ENV === 'test') {
      require('dotenv').config({
          path: '.env.test',
      });
  }else{
    require('dotenv').config({
        path: '.env',
    });
  }
}

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('inline_query', (query) => {
  const queryId = query.id;
  const queryContent = query.query;

  console.log(query);

  const results = [{
    type: 'game',
    id: 1,
    game_short_name: "I'm not playing these games!",
  }, {
    type: 'game',
    id: 2,
    game_short_name: queryContent,
  },{
    type: 'game',
    id: 3,
    game_short_name: "I'm sorry...",
  },
]

  bot.answerInlineQuery(queryId, results);
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

router.post('/getText', TextController.index);

router.get('/', (req, res) => {
  res.json({ message: "I'm working hooman!" });
});

module.exports = app.use('', router);