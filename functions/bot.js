const axios = require('axios');

const transformer = require('../src/util/transformer');

exports.handler = async event => {

    const body = event.body;

    const req = JSON.parse(body);

    const {
        message,
        inline_query,
    } = req;

    console.log('Update received: ', req);

    const bot_url = "https://api.telegram.org/bot" + process.env.BOT_TOKEN;

    console.log('BOT endpoint: ' + bot_url);

    let response = {};

    if (inline_query) {
        const query = inline_query.query;

        const results = [{
            type: 'Article',
            id: 1,
            title: "Regular, just normal boring text",
            description: query,
            input_message_content: {
                message_text: query,
            },
        }, {
            type: 'Article',
            id: 2,
            title: 'Backwards',
            description: transformer.backwards(query),
            input_message_content: {
                message_text: transformer.backwards(query)
            },
        }, {
            type: 'Article',
            id: 3,
            title: 'Upside Down',
            description: transformer.upsideDown(query),
            input_message_content: {
                message_text: transformer.upsideDown(query),
            },
        }, {
            type: 'Article',
            id: 4,
            title: "Mirrored",
            description: transformer.mirrored(query),
            input_message_content: {
                message_text: transformer.mirrored(query),
            },
        }, {
            type: 'Article',
            id: 5,
            title: "Tiny",
            description: transformer.tiny(query),
            input_message_content: {
                message_text: transformer.tiny(query),
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
        return await axios.post('https://ntextifybot.netlify.app/.netlify/functions/answerInlineQuery', response);
    }

    async function answerInlineQuery(response) {
        return await axios.post('https://ntextifybot.netlify.app/.netlify/functions/sendMessage', response);
    }

    return {
        statusCode: 200,

        body: JSON.stringify(response),
    }

}