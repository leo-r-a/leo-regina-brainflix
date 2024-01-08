import Hero from "../../components/Hero/Hero.js";
import Comments from "../../components/Comments/Comments.js";
import Nextvids from "../../components/Nextvids/Nextvids.js";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const api_key = "3a9c8666-484e-4ce1-b353-874b94446ddd";
  const [selectedVideoDetails, setSelectedVideoDetails] = useState();

  useEffect(() => {
    const api_key = "3a9c8666-484e-4ce1-b353-874b94446ddd";
    async function videoDetails(apiKey) {
      await axios
        .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`)
        .then((response) => {
          const videoInfo = response.data;
          console.log(videoInfo)
          setSelectedVideoDetails(videoInfo);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    videoDetails(api_key);
  }, []);

  if (!selectedVideoDetails) {
    return <p>loading...</p>;
  }
  return (
    <div className="App">
      <Hero selectedVideoDetails={selectedVideoDetails} />
      <Comments selectedVideoDetails={selectedVideoDetails} />
      <Nextvids
        selectedVideo={selectedVideoDetails}
      />
    </div>
  );
}

export default Home;
