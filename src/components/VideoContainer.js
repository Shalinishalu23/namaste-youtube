import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from "../utility/constant"
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json();
    // console.log('json', json)
    setVideos(json.items);
  };
  return (
    <div className='flex flex-wrap'>
      {/* higher order function  */}
      {/* {console.log('videos', videos)} */}
      <AdVideoCard info={videos[0]}></AdVideoCard>
      {/* above line */}
      {videos.map(video => (
        <Link key={video.id} to={"/watch?v="+ video.id}> <VideoCard  info={video} /> </Link>
      )
      )}
    </div>)
};

export default VideoContainer