import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import Nextvids from './components/Nextvids/Nextvids';
import videos from './Data/videos.json';
import { useState } from 'react';
import videodetails from "./Data/video-details.json";



function App() {
  const [selectedVideo, setSelectedVideo] = useState (videos[0]); 

  const selectedVideoDetails = videodetails.find(
    video => video.id === selectedVideo.id 
 )

  return ( 
    <div className="App">
      <Header />
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

export default App;
