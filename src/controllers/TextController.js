const Text = require('../models/Text');
const transformer = require('../util/transformer');

module.exports = {
    async index(req, res) {

        const { text } = req.body;

        const Text = {
            text
        }

        let response_texts = {
            regular: text,
            backwards: transformer.backwards(text),
        }

        return res.json(response_texts);
    },
}