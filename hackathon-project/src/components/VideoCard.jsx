/* eslint-disable react/prop-types */

import { useState, useRef } from "react";

const Card = ({ item }) => {
  const videoId = item.id.videoId;

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const videoEmbedd = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className="border border-gray-400 rounded-md overflow-hidden shadow-lg w-1/3 bg-white bg-opacity-20 hover:shadow-2xl hover:-translate-y-1">
        <div className="p-4 flex flex-col items-center">
          <iframe
            className="w-full h-48 rounded-lg"
            src={videoEmbedd}
            title="YouTube video player"
            allowFullScreen
            loading="lazy"

            // Ensure each iframe has a unique key
          ></iframe>
          <div className="p-4">
            <p className="text-sm font-semibold">{item.snippet.title}</p>
            <p className="text-sm text-gray-300 mt-2">
              {item.snippet.description}
            </p>
          </div>
          <button className="mt-2 bg-purple-800 text-sm text-white px-4 py-2 rounded-md">
            <a href={videoUrl}>Go To Video</a>
          </button>
        </div>
      </div>
    </>
  );
};

const VideoCard = ({ data, text }) => {
  const [count, setCount] = useState(0);

  const length = data.items.length;

  const handleClick = () => {
    if (count + 3 < length - 2) setCount(count + 3);
    else {
      setCount(0);
    }
    console.log(count);
  };

  return (
    <>
      <div className="mb-5 w-full flex flex-row justify-between items-center">
        <h2 className="font-bold">{text}</h2>
        <div className="flex items-center cursor-pointer hover:text-purple-500">
          <h3 onClick={handleClick}>View Next </h3>
          <svg
            fill="currentColor"
            height="1em"
            width="1em"
            viewBox="0 0 330 330"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
          </svg>
        </div>
      </div>

      <div className="flex gap-10">
        {data.items.slice(count, count + 3).map((item) => (
          <Card key={item.id.videoId} item={item} />
        ))}
      </div>
    </>
  );
};

export default VideoCard;
