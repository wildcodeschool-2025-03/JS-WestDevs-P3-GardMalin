import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src="./images/gardmalin-logo.png" alt="logo" />
      </Link>
      <nav>
        <Link to="space-parent">Espace parent</Link>
        <Link to="space-pro">Espace pro</Link>
        <Link to="about">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
