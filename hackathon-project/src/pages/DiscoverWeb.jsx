import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DiscoverTab from "../components/DiscoverTab";
import VideoCard from "../components/VideoCard";

import Divider from "../components/Divider";
import { webData } from "../dummyData/webData";
import { webArticleData } from "../dummyData/webArticleData";
import { webTools } from "../dummyData/webTools";

function DiscoverWeb() {
  const tabs = [
    { name: "UX UI Design", href: "/discover", current: false },
    { name: "Web Development", href: "/discoverWeb", current: true },
    { name: "Cyber Security", href: "/discoverCyber", current: false },
    { name: "Data Analysis", href: "/discoverData", current: false },
  ];

  const [text, setText] = useState("Web Development");

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
          data={webData}
          text={`Recommended videos for you in ${text} `}
        />
      </div>
      <div className="mt-20 mb-10">
        <Divider />
      </div>
      <VideoCard data={webTools} text={`Trending Tools for  ${text}`} />
      <div className="mt-20 mb-10">
        <Divider />
      </div>
      <VideoCard data={webArticleData} text={`Articles & books for  ${text}`} />
    </div>
  );
}

export default DiscoverWeb;
