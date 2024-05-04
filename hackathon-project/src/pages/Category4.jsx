import React, { useState } from "react";
import { getAnswer } from "../functions/langchain";

function Art() {
    const [question, setQuestion] = useState("");
    const [results, setResults] = useState("");
  
    async function handleSubmit(e) {
      e.preventDefault();
      console.log(question);
      const answer = await getAnswer("question");
      setResults(answer);
      // setResults('I clicked the button');
    }
  
    return (
      <>
        <div class="ml-64 flex flex-col h-screen mr-10">
          <div class="flex justify-center mt-11">Category 4</div>
  
          <div class="border-white border-2 flex-grow rounded-2xl content-center m-6 bg-white/[0.1] ">
            <span class="">Results displayed here: {results}</span>
          </div>
  
          <form class=" mr-8 flex-col" onSubmit={handleSubmit}>
            <div class="flex mb-6">
              <textarea
                id="question"
                class="border-white border-2 bg-slate-200/[0.1] text-white w-10/12 h-20 rounded-2xl ml-6 transition-all hover:bg-slate-800/[0.2]"
                value={question}
                placeholder=""
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              ></textarea>
  
              <button
                class="border-white rounded-2xl border-2 h-20 w-2/12 ml-6 transition-all hover:bg-slate-800/[0.6]"
                type="submit"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </>
  );
}

export default Art;
