import { OpenAI } from "@langchain/openai";


const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const llm = new OpenAI({
    openAIApiKey: apiKey,
});

export async function getAnswer(question) {
    let answer = ''

    try {
        console.log('testinglangchain')
        const answer = await llm.invoke(question);
        console.log(answer);
        return answer
    } catch (e) {
        console.error(e);
    }
}