import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import videos from './Data/videos.json'
import { useState } from 'react';


function App() {
  const [selectedVideo, setSelectedVideo] = useState (videos[0]); 

  return ( 
    <div className="App">
      <Header />
      <Hero 
       selectedVideo = {selectedVideo}
      />
    </div>
  );
}

export default App;
