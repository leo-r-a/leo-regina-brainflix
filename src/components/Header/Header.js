import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to='/'>
      <img className="header-logo" src={logo} alt="white play button arrow with blue background"></img>
      </Link>
      <div className="header-functions">
        <div className="header-functions--search">
          <img className="header-functions--mag" src={search} alt="small black magnifying glass"></img>
          <input
            className="header-functions--input"
            type="text"
            placeholder="Search..."
          />
          <img className="header-functions--mohan" src={mohan} alt="photo of man in profile with purple background"></img>

          <div className="header-functions--button-container">
            <Link className="header-functions--button-link"  to='/upload'>
            <button className="header-functions--button">
              <img src={upload} alt="small white arrow pointing up with a white underline"/> UPLOAD
            </button>
            </Link>
          
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
