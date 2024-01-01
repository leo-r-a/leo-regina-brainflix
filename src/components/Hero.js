import videos from "../Data/videos.json";
import "./Hero.scss";
import eyeball from "../assets/Icons/views.svg"
import heart from "../assets/Icons/likes.svg"
import videodetails from "../Data/video-details.json"

export default function Hero({selectedVideo}) {
 

    const getSelectedVideoDetails = videodetails.find(
       video => video.id === selectedVideo.id 
    )

    const date = new Date(getSelectedVideoDetails.timestamp);
    const month = date.getMonth() +1;
    const day = date.getDate();
    const year = date.getFullYear();
    const parsedDate = month + '/' + day + '/' + year;

  return (
    <div className="hero">
      <video className="hero__video" controls  poster={getSelectedVideoDetails.image}>
        <source src={getSelectedVideoDetails.image} type="video/mp4" />
      </video>
      <div className="main__header">
        <h1>{getSelectedVideoDetails.title}</h1>
        <div className="main__info">
          <h2 className="main__info--channel">{getSelectedVideoDetails.channel}</h2>
          <img className="main__info--views-image" src={eyeball} />
          <p className="main__info--views">{getSelectedVideoDetails.views}</p>
          <p className="main__info--date">{parsedDate}</p>
          <img className="main__info--likes-image" src={heart} />
          <p className="main__info--likes">{getSelectedVideoDetails.likes}</p>
        </div>
        <div className="main__info--video-description">
          {getSelectedVideoDetails.description}
        </div>
      </div>
    </div>
  );
}
