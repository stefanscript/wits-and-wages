import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Write me a question and an answer on general knowledge, the answer needs to be a positive whole number' }],
        model: 'ada',
    });

    console.log(chatCompletion);
}

main();