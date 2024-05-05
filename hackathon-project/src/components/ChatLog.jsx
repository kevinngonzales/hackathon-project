const ChatLog = ({ item }) => {
  return (
    <li className="flex-col pl-32 pr-32 items-start">
      <div className="flex flex-row mb-6 items-start">
        <img className="mr-2" src="profile.svg" />
        <div className="mr-10">You: {item?.question}</div>
      </div>
      <div className="flex flex-row mb-6 items-start">
        <img className="mr-2" src="robot.svg" />
        <div className="mr-12">TechUp: {item?.results}</div>
      </div>
    </li>
  );
};

export default ChatLog;

{
  /* <div className="flex-col pl-32 pr-32 items-start ">
  <div className="flex-col mb-20">
    <div className="flex items-center mb-2">
      <img className="mr-2" src="profile.svg" />
      <div className="mr-10">You:</div>
    </div>
    {question}
  </div>

  <div className="flex-col mr-24 ">
    <div className="flex items-center mb-6">
      <img className="mr-2" src="robot.svg" />
      <div className="mr-12">TechUp:</div>
    </div>
    {results}
  </div>
</div>; */
}
