import { Link, useNavigate } from "react-router";
import "./Header.css";
import { toast } from "react-toastify";
import { useAuth } from "../../services/AuthContext";

const Header = () => {
  const { isLogged, setIsLogged, setUser } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://localhost:3310/api/logout", {
      method: "POST",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        toast.success("Déconnexion réussie");
        setIsLogged(false);
        setUser(null);
        navigate("/");
      } else {
        toast.error("Erreur lors de la déconnexion");
      }
    });
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
