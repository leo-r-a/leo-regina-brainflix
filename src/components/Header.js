import logo from "../assets/Logo/BrainFlix-logo.svg";
import search from "../assets/Icons/search.svg";
import mohan from "../assets/Images/Mohan-muruge.jpg";
import upload from "../assets/Icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={logo}></img>
      <div className="header-functions">
        <div className="header-functions--search">
          <img className="header-functions--mag" src={search}></img>
          <input
            className="header-functions--input"
            type="text"
            placeholder="Search..."
          />
          <img className="header-functions--mohan" src={mohan}></img>

          <div className="header-functions--button-container">
            <button className="header-functions--button">
              <img src={upload} /> UPLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
