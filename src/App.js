import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Comments from './components/Comments';
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
    </div>
  );
}

export default App;
