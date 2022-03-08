import { ReactComponent as InstagramIcon } from "./instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "./twitter-icon.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <footer className="app-footer">
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/#">Terms & Privacy</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="copyright-socials">
          <span>
            @ {new Date().getFullYear()} | SKILLDAR | All rights reserved
          </span>
          <span className="social-icons">
            <a href="/#">{<InstagramIcon />}</a>
            <a href="/#">
              <TwitterIcon />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
