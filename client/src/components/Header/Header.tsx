import { Link, useNavigate } from "react-router";
import "./Header.css";
import { toast } from "react-toastify";
import { useAuth } from "../../services/AuthContext";

const Header = () => {
  const { isLogged, setIsLogged, setUser, user } = useAuth();
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
        {!isLogged || !user ? (
          <>
            <Link to="/login-parent">Connexion parents</Link>
            <Link to="/login-pro">Connexion pros</Link>
            <Link to="/login-admin">Connexion admin</Link>
          </>
        ) : user.role === "parent" ? (
          <>
            <Link to="/space-parent">Tableau de bord parent</Link>
            <button type="button" onClick={handleLogout}>
              Se déconnecter
            </button>
          </>
        ) : user.role === "professional" ? (
          <>
            <Link to="/space-pro">Tableau de bord pro</Link>
            <button type="button" onClick={handleLogout}>
              Se déconnecter
            </button>
          </>
        ) : user.role === "admin" ? (
          <>
            <Link to="/space-admin">Tableau de bord admin</Link>
            <button type="button" onClick={handleLogout}>
              Se déconnecter
            </button>
          </>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
