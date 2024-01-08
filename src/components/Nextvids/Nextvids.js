import { useEffect, useState } from "react";
import "./Nextvids.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Nextvids({ selectedVideo }) {
  const [videoList, setVideoList] = useState([]);

    useEffect(() => {
      const api_key = "3a9c8666-484e-4ce1-b353-874b94446ddd";
      async function videoList(apiKey, video_id) {
        await axios
          .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
          .then((response) => {
            const videos = response.data;
            const filterVideos = videos.filter((video) => video.id !== video_id);
            setVideoList(filterVideos)
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
      videoList(api_key, selectedVideo.id);
    }, [selectedVideo.id]);


    if (!videoList) {
      return <p>loading...</p>
    };
  return (
    <section className="video-container">
      <h2 className="video-container__header">NEXT VIDEOS</h2>
      <div className="video-container__list">
        {videoList.map((video) => (
          <Link to={`/${video.id}`}
            className="video-container__video"
            key={video.id}
          >
            <img className="video-container__image" src={video.image} alt="video thumbnail" />
            <div className="video-container__details">
              <h2 className="video-container__title">{video.title}</h2>
              <p className="video-container__channel">{video.channel}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Nextvids;
