import videos from "../Data/videos.json";
import "./Hero.scss";
import eyeball from "../assets/Icons/views.svg";
import heart from "../assets/Icons/likes.svg";
import videodetails from "../Data/video-details.json";

export default function Hero({ selectedVideoDetails }) {
  const date = new Date(selectedVideoDetails.timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const parsedDate = month + "/" + day + "/" + year;

  return (
    <div className="hero">
      <video
        className="hero__video"
        controls
        poster={selectedVideoDetails.image}
      >
        <source src={selectedVideoDetails.image} type="video/mp4" />
      </video>
      <div className="main__header">
        <h1 className="main__header--title">{selectedVideoDetails.title}</h1>
        <div className="main__info">
          <div className="main__info--one">
            <h2 className="main__info--channel">
              By {selectedVideoDetails.channel}
            </h2>

            <p className="main__info--views">
              {" "}
              <img className="main__info--views-image" src={eyeball} />
              {selectedVideoDetails.views}
            </p>
          </div>
          <div className="main__info--two">
            <p className="main__info--date">{parsedDate}</p>

            <p className="main__info--likes">
              {" "}
              <img className="main__info--likes-image" src={heart} />
              {selectedVideoDetails.likes}
            </p>
          </div>
        </div>
        <div className="main__info--video-description">
          {selectedVideoDetails.description}
        </div>
      </div>
    </div>
  );
}
