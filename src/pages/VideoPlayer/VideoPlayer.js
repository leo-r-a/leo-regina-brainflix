import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import Nextvids from "../../components/Nextvids/Nextvids";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function VideoPlayer() {
  const { videoid } = useParams();
  const [selectedVideoDetails, setSelectedVideoDetails] = useState();

  useEffect(() => {
    const api_key = "3a9c8666-484e-4ce1-b353-874b94446ddd";
    async function videoDetails(apiKey) {
      await axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoid}?api_key=${apiKey}`
        )
        .then((response) => {
          const videoInfo = response.data;
          setSelectedVideoDetails(videoInfo);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    videoDetails(api_key);
  }, [videoid]);

  if (!selectedVideoDetails) {
    return <p>loading...</p>;
  }
  return (
    <div className="App">
      <Hero selectedVideoDetails={selectedVideoDetails} />
      <Comments selectedVideoDetails={selectedVideoDetails} />
      <Nextvids selectedVideo={selectedVideoDetails} />
    </div>
  );
}

export default VideoPlayer;
