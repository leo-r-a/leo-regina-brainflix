import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";

const Upload = () => {
  return (
    <section className="upload-container">
      <h2 className="upload-container__header">Upload Video</h2>
      <div className="upload-container__image">
        <h4 className="upload-container__image--text">VIDEO THUMBNAIL</h4>
        <img
          className="upload-container__image--thumbnail"
          src={thumbnail}
          alt=" point of view shot of riding a bike with blue handlebars"
        />
      </div>
      <div className="upload-container__entry-container">
        <h4 className="upload-container__entry-container--title">
          TITLE YOUR VIDEO
        </h4>
        <input
          className="upload-container__entry-container--title-text"
          placeholder="Add a title to your video"
        ></input>
          <h4 className="upload-container__entry-container--description">
          ADD A VIDEO DESCRIPTION
        </h4>
        <input
          className="upload-container__entry-container--description-text"
          placeholder="Add a description to your video"
        ></input>
           <div className="upload-container__button-container">
            <button className="upload-container__button-container--button">
              <img src={publish} alt="small white arrow pointing up with a white underline"/> PUBLISH
            </button>
          <a className="upload-container__button-container--button-cancel">CANCEL</a>
          </div>
      </div>
    </section>
  );
};
export default Upload
