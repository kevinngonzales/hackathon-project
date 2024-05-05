import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DiscoverTab from "../components/DiscoverTab";
import VideoCard from "../components/VideoCard";

import Divider from "../components/Divider";
import { dataAnalysisData } from "../dummyData/dataAnalysisData";
import { dataAnalysisArticleData } from "../dummyData/dataAnalysisArticleData";
import { dataAnalysisTools } from "../dummyData/dataAnalysisTools";

function DiscoverData() {
  const tabs = [
    { name: "UX UI Design", href: "/discover", current: false },
    { name: "Web Development", href: "/discoverWeb", current: false },
    { name: "Cyber Security", href: "/discoverCyber", current: false },
    { name: "Data Analysis", href: "/discoverData", current: true },
  ];

  const [text, setText] = useState("Data Analysis");

  const handleClick = (e) => {
    setText(e.target.innerText);
  };

  return (
    <div className="ml-64 mr-10 h-screen pl-24 flex flex-col justify-between">
      <div className="mt-4 flex justify-center">
        <img src="/text.svg" />
      </div>

      <div className="mt-2 mb-2">
        <Divider />
      </div>
      <DiscoverTab handleClick={handleClick} tabs={tabs} />
      <div className="mt-2">
        <Divider />
      </div>

      <div className="mt-5">
        <VideoCard
          data={dataAnalysisData}
          text={`Recommended videos for you in ${text} `}
        />
      </div>
      <div className="mt-20 mb-10">
        <Divider />
      </div>
      <VideoCard
        data={dataAnalysisTools}
        text={`Trending Tools for  ${text}`}
      />
      <div className="mt-20 mb-10">
        <Divider />
      </div>
      <VideoCard
        data={dataAnalysisArticleData}
        text={`Articles & books for  ${text}`}
      />
    </div>
  );
}

export default DiscoverData;
