const transformer = require('../util/transformer');

module.exports = {
    async index(req, res) {

        const { text } = req.body;

        let response_texts = {
            regular: text,
            backwards: transformer.backwards(text),
            upside_down: transformer.upsideDown(text),
            mirrored: transformer.mirrored(text),
            tiny: transformer.tiny(text),
            tiny_upside_down: transformer.tinyUpsideDown(text),
        }

        return res.json(response_texts);
    },
}