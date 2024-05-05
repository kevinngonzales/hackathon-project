import React, { useState, useEffect, useRef } from "react";
import { getAnswer } from "../functions/langchain";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import ChatLog from "../components/ChatLog";

//home page
function Math() {
  const listEndRef = useRef(null);
  const scrollToBottom = () => {
    listEndRef.current?.scrollIntoView({
      behavior: "auto",
    });
  };

  const [list, setList] = useState([]);
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

    const newObject = { question: question, results: answer };

    setList([...list, newObject]);
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

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  return (
    <>
      <div className="ml-64 flex flex-col h-screen mr-10 pl-24">
        <Link to="/" className="text-white">
          <div className=" flex items-center justify-between mt-8 mr-10">
            <img className="h-20" src="/text.svg" />
            <div className="flex content-center align-middle">
              <button onClick={clearChat} className="order-1">
                <img className="h-9" src="/refresh.png" />
              </button>
              <button className="mr-3">
                <img className="h-9" src="note.svg" />
              </button>
            </div>
          </div>
        </Link>

        {isLoggedIn && !loadChat && (
          <img className="flex h-56 mt-32" src="/homelogo.svg" />
        )}

        {!isLoggedIn && !loadChat && (
          <img className="flex h-56 mt-32" src="/homelogo2.svg" />
        )}

        {/* shows users prompt and ai's answer like a chat display */}

        <div className=" flex flex-grow rounded-2xl m-6" ref={listEndRef}>
          {loadChat && (
            <ul>
              {list.map((item, key) => (
                <ChatLog key={key} item={item} />
              ))}
            </ul>
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
              }}
              className="border-white border-2 bg-slate-200/[0.1] text-white rounded-2xl transition-all ml-6 h-20 hover:bg-slate-800/[0.2]"
            >
              <div className="font-bold">Lesson Clarification</div>
              Understanding design patterns
            </button>

            <button
              onClick={(e) => {
                setQuestion(
                  "What are some ways I can be more prepared for technical interviews?"
                );
              }}
              className="border-white hover:bg-slate-800/[0.2] border-2 bg-slate-200/[0.1] text-white rounded-2xl transition-all mr-8 h-20 "
            >
              <div className="font-bold">Career Readiness</div>
              Preparing for technical interviews
            </button>

            <button
              onClick={(e) => {
                setQuestion(
                  "What are some ways I can be better at troubleshooting and debugging coding errors?"
                );
              }}
              className="border-white border-2  hover:bg-slate-800/[0.2] bg-slate-200/[0.1] text-white rounded-2xl transition-all ml-6 h-20"
            >
              <div className="font-bold">Project Assistance</div>
              Debugging coding errors
            </button>

            <button
              onClick={(e) => {
                setQuestion(
                  "What are up-to-date resources for learning about programming languages"
                );
              }}
              className="border-white border-2 bg-slate-200/[0.1] text-white hover:bg-slate-800/[0.2] rounded-2xl transition-all mr-8 h-20 "
            >
              <div className="font-bold">Help Me Study</div>
              Learning programming languages
            </button>
          </div>
        )}

        <form className=" mr-8 flex-col" onSubmit={handleSubmit}>
          <div className="flex mb-6">
            <input
              className="pl-5 border-white border-2 bg-slate-200/[0.1] text-white w-10/12 h-24 rounded-2xl ml-12 transition-all hover:bg-slate-800/[0.2] "
              type="text"
              id="question"
              placeholder="Type here...."
              style={{ lineHeight: "24px" }}
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />

            <button
              className="border-white rounded-2xl border-2 h-24 w-2/12 ml-6 transition-all hover:bg-pink"
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
