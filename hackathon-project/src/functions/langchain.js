import { OpenAI } from "@langchain/openai";


//variable declared to hold OpenAI's API key stored in env variable.  
//then use langchain to manage OpenAI's LLM by creating a new instance of the class using the API key
//this allows use to pass data through and recieve a response using invoke method

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const llm = new OpenAI({
    openAIApiKey: apiKey,
});

export async function getAnswer(question) {
    let answer = 'Should return an Answer'
    try {
        // answer = await llm.invoke(question);
        console.log(answer);
        return answer
    } catch (e) {
        console.error(e);
    }
}