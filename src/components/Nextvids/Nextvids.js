import "./Nextvids.scss";

function Nextvids({ videos, selectedVideo, setSelectedVideo }) {
  const filterVideos = videos.filter((video) => video.id !== selectedVideo.id);

  const videoSelector = (video) => {
    setSelectedVideo(video);
  };

  return (
    <section className="video-container">
      <h2 className="video-container__header">NEXT VIDEOS</h2>
      <div className="video-container__list">
        {filterVideos.map((video) => (
          <div
            className="video-container__video"
            key={video.id}
            onClick={() => videoSelector(video)}
          >
            <img className="video-container__image" src={video.image} alt="video thumbnail" />
            <div className="video-container__details">
              <h2 className="video-container__title">{video.title}</h2>
              <p className="video-container__channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Nextvids;
