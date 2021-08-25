const axios = require('axios');

const transformer = require('../src/util/transformer');

exports.handler = async event => {
    const body = event.body;
    const req = JSON.parse(body);
    const { message, inline_query } = req;

    console.log('Update received: ', req);

    const bot_url = "https://api.telegram.org/bot" + process.env.BOT_TOKEN;

    console.log('BOT endpoint: ' + bot_url);

    let response = {};

    if (inline_query) {
        const query = inline_query.query;

        const result = {
            regular: queryContent,
            owo: transformer.owo(query),
            backwards: transformer.backwards(query),
            upside_down: transformer.upsideDown(query),
            mirrored: transformer.mirrored(query),
            tiny: transformer.tiny(query),
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

        const res = await answerInlineQuery({
            inline_query_id: inline_query.id,
            results,
        });

        console.log("Response generated: ", res.data);
    }
    else if (message) {
        const chatId = message.chat.id;

        /* Answer message. */

        // send a message to the chat acknowledging receipt of their message
        const parse_mode = "HTML";

        // send a message in case it doesn't find anything.
        response = {
            chat_id: chatId,
            text: "Sorry, coudn't catch that 😢 \nPlease use only inline commands for now",
            parse_mode,
        }

        const res = await sendMessage(response);
        console.log("Response generated: ", res.data);
    }

    async function sendMessage(response) {
        return await axios.post('https://ntextifybot.netlify.app/.netlify/functions/sendMessage', response);
    }

    async function answerInlineQuery(response) {
        return await axios.post('https://ntextifybot.netlify.app/.netlify/functions/answerInlineQuery', response);
    }

    return {
        statusCode: 200,

        body: JSON.stringify(response),
    }
}