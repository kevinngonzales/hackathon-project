import React, { useState, useEffect } from "react";
import { getAnswer } from "../functions/langchain";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";


//home page 
function Math() {
  const [question, setQuestion] = useState("");
  const [results, setResults] = useState("");
  const { isLoggedIn } = useAuth();
  const [loadChat, setLoadChat] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(question);
    const answer = await getAnswer(question);
    setResults(answer);

    setLoadChat(true);
  }

  function clearChat() {
    setQuestion("");
    setResults("");
    setLoadChat(false);
  }


  // check if user is not logged in then clearchat if user logs out
  useEffect(() => {
    if (!isLoggedIn) {
      clearChat(); 
    }
  }, [isLoggedIn]);

  return (
    <>
      <div class="ml-64 flex flex-col h-screen mr-10 pl-24 pr-24">
        <Link to="/" className="text-white">
          <div class=" flex items-center justify-between mt-8 mr-10">
            <img class="h-20" src="/text.svg" />
            <div class='flex content-center align-middle'>
              <button onClick={clearChat} class="order-1">
                <img class="h-14" src="/refresh.png" />
              </button>
              <button class='mr-3'>
                <img src="note.svg" />
              </button>
            </div>
          </div>
        </Link>

        {isLoggedIn && !loadChat && (
          <img class="flex h-64 mt-56" src="/homelogo.svg" />
        )}

        {!isLoggedIn && !loadChat && (
          <img class="flex h-64 mt-56" src="/homelogo2.svg" />
        )}

        {/* shows users prompt and ai's answer like a chat display */}

        <div className="flex-grow rounded-2xl pt-20 m-6">
          {loadChat && (
            <div className="flex-col pl-32 pr-32 items-start ">
              <div className="flex-col mb-20">
                <div class="flex items-center mb-2">
                  <img class="mr-2" src="profile.svg" />
                  <div class="mr-10">You:</div>
                </div>
                {question}
              </div>

              <div className="flex-col mr-24 ">
                <div class="flex items-center mb-6">
                  <img class="mr-2" src="robot.svg" />
                  <div class="mr-12">TechUp:</div>
                </div>
                {results}
              </div>
            </div>
          )}
        </div>

        {/* bg-white/[0.7] */}

        {/* conditonally render predetermined prompts if user is logged in */}

        {isLoggedIn && (
          <div className=" grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={(e) => {
                setQuestion(
                  "What are some ways I can get a better understanding of design patterns?"
                );
                handleSubmit(e);
              }}
              className="border-white border-2 bg-slate-200/[0.1] text-white rounded-2xl transition-all ml-6 h-20"
            >
              <div class="font-bold">Lesson Clarification</div>
              Understanding design patterns
            </button>
            <button
              onClick={(e) => {
                setQuestion(
                  "What are some ways I can get a better understanding of design patterns?"
                );
                handleSubmit(e);
              }}
              className="border-white border-2 bg-slate-200/[0.1] text-white rounded-2xl transition-all mr-8 h-20"
            >
              <div class="font-bold">Career Readiness</div>
              Preparing for technical interviews
            </button>
            <button
              onClick={(e) => {
                setQuestion(
                  "What are some ways I can be more prepared for technical interviews?"
                );
                handleSubmit(e);
              }}
              className="border-white border-2 bg-slate-200/[0.1] text-white rounded-2xl transition-all ml-6 h-20"
            >
              <div class="font-bold">Project Assistance</div>
              Debugging coding errors
            </button>
            <button
              onClick={(e) => {
                setQuestion(
                  "What are some ways I can be better at troubleshooting and debugging coding errors?"
                );
                handleSubmit(e);
              }}
              className="border-white border-2 bg-slate-200/[0.1] text-white rounded-2xl transition-all mr-8 h-20"
            >
              <div class="font-bold">Help Me Study</div>
              Learning programing languages
            </button>
          </div>
        )}

        <form class=" mr-8 flex-col" onSubmit={handleSubmit}>
          <div class="flex mb-6">
            <input
              type="text"
              id="question"
              placeholder='Type here....'
              class="border-white border-2 bg-slate-200/[0.1] text-white w-10/12 h-24 rounded-2xl ml-6 transition-all hover:bg-slate-800/[0.2]"
              style={{ lineHeight: "24px" }}
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />

            <button
              class="border-white rounded-2xl border-2 h-24 w-2/12 ml-6 transition-all hover:bg-slate-800/[0.6]"
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

export default Math;
