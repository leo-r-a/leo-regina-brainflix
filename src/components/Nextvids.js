function Nextvids({ videos, selectedVideo, setSelectedVideo }) {
  const filterVideos = videos.filter((video) => video.id !== selectedVideo.id);

  const videoSelector = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-container">
      <h2 className="video-header">NEXT VIDEOS</h2>
      <div className="video-list">
        {filterVideos.map((video) => (
          <div className="" key={video.id} onClick={() => videoSelector(video)}>
            <img src={video.image} />
            <h2>{video.title}</h2>
            <p>{video.channel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Nextvids;
