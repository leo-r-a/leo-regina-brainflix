import Hero from '../../components/Hero/Hero.js';
import Comments from '../../components/Comments/Comments.js';
import Nextvids from '../../components/Nextvids/Nextvids.js';
import videos from '../../Data/videos.json';
import { useState } from 'react';
import videodetails from "../../Data/video-details.json";



function Home() {
  const [selectedVideo, setSelectedVideo] = useState (videos[0]); 

  const selectedVideoDetails = videodetails.find(
    video => video.id === selectedVideo.id 
 )
 
  return ( 
    <div className="App">
      <Hero 
       selectedVideoDetails = {selectedVideoDetails}
      />
      <Comments
      selectedVideoDetails = {selectedVideoDetails} />
      <Nextvids 
      videos = {videos}
      selectedVideo = {selectedVideo}
      setSelectedVideo = {setSelectedVideo}
      />
    </div>
  );
}

export default Home;
