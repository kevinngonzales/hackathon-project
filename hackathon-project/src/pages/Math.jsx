import React, { useState } from "react";
// import { getAnswer } from "../functions/langchain";

function Math() {
  const [question, setQuestion] = useState("");
  const [results, setResults] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('testing')
    console.log(question);
    const answer = await getAnswer("question");
    setResults(answer);
    console.log(results);
    // setResults('I clicked the button');
  }

  return (
    <>
      <h1 class="flex font-bold justify-center p-8">Math</h1>

      <div class="flex">
        <form class="flex justify-center w-full" onSubmit={handleSubmit}></form>
      </div>

      <div class="flex justify-center p-14 h-80 border-black border-2 w-">
        <span class="content-center">Results displayed here: {results}</span>
      </div>

      <div class="flex flex-col justify-center content-center align-middle border-2">
        <label>Custom Prompt</label>

        <textarea
          class=" border-black border-2 w-128 text-black"
          value={question}
          placeholder="ask a question"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        ></textarea>

        <button
          class="w-40 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5"
          type="submit"
        >
          Request Results
        </button>
      </div>
    </>
  );
}

export default Math;
