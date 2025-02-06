import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
//   const { snippet, statistics } = info;
//   console.log(snippet);
//   const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-96 shadow-md">
      <img className="rounded-lg w-full" alt="thumbnail" src={info?.snippet?.thumbnails?.medium?.url}/>
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
