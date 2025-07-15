import { Link } from "react-router";
import "./Header.css";
import { useAuth } from "../../services/AuthContext";

const Header = () => {
  const { isLogged, setIsLogged } = useAuth();

  function handleLogout() {
    fetch("http://localhost:3310/api/logout", {
      method: "POST",
      credentials: "include",
    }).then((res) => res.ok && setIsLogged(false));
  }

  return (
    <header className="header-container">
      <Link to="/">
        <img src="./images/gardmalin-logo.png" alt="logo" />
      </Link>
      <nav>
        {!isLogged ? (
          <>
            <Link to="/login-parent">Connexion parents</Link>
            <Link to="/login-pro">Connexion pros</Link>
          </>
        ) : (
          <button type="button" onClick={handleLogout}>
            Se déconnecter
          </button>
        )}
        <Link to="about">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
