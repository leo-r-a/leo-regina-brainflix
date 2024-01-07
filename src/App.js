import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'



function App() {

  return ( 
    
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/:videoid' element={<VideoPlayer/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
