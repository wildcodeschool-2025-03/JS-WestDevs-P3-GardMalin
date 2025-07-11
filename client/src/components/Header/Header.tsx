import { Link } from "react-router";
import "./Header.css";
import { useAuth } from "../../services/AuthContext";

const Header = () => {
  const { isLogged } = useAuth();

  return (
    <header className="header-container">
      <Link to="/">
        <img src="./images/gardmalin-logo.png" alt="logo" />
      </Link>
      <nav>
        {!isLogged ? (
          <Link to="/login-parent">Connexion</Link>
        ) : (
          <button type="button">Se déconnecter</button>
        )}
        <Link to="about">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
