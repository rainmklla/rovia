import { Link } from "react-router-dom";
import "../styles/Footer.css";

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__credit">
          &copy;{YEAR} &mdash; Rhianna Mikaella R. Gomez &mdash; ITE402
        </p>
        <nav aria-label="Footer">
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/my-trips">My Trips</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;