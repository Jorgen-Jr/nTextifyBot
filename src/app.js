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

router.post('/getText', TextController.index);
router.get('/', (req, res) => {
  res.json({ message: "I'm working hooman!" });
});


const bot = require('./examplebot');


module.exports = app.use('', router);