import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="link-footer">
        <li className="link-logo">
          <a href="https://fr-fr.facebook.com/" target="blank">
            <img src="/images/facebook.png" alt="logo Facebook" />
          </a>
          <a
            href="https://github.com/wildcodeschool-2025-03/JS-WestDevs-P3-GardMalin"
            target="blank"
          >
            <img src="/images/github.png" alt="logo GitHub" />
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <img src="/images/linkedin.png" alt="logo linkedin" />
          </a>
        </li>
        <li className="link-pages">
          <p>
            <Link to="/maintenance">CGU</Link>
          </p>
          <p>
            <Link to="/maintenance">Nous rejoindre</Link>
          </p>
          <p>
            <Link to="/about">A propos</Link>
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
