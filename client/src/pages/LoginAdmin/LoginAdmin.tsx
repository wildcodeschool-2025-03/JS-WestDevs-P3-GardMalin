import { Link, useNavigate } from "react-router";
import "./LoginAdmin.css";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton/BackButton";
import { useAuth } from "../../services/AuthContext";

const LoginAdmin = () => {
  const { setIsLogged, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3310/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Echec de connexion");
          throw new Error("Connexion failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data.role !== "admin") {
          toast.error("Accès refusé : rôle non autorisé");
          return;
        }

        toast.success("Vous êtes connecté");
        setIsLogged(true);
        setUser(data);
        navigate("/space-admin");
      });
  };

  return (
    <div className="login-admin-container">
      <section>
        <h1>Espace administrateur</h1>
        <img src="/images/login_admin.png" alt="avatar of a man" />
      </section>
      <section>
        <img src="/images/gardmalin-logo.png" alt="logo gardmalin" />
        <h1>Espace administrateur</h1>
        <h2>Connexion</h2>
        <form action={handleSubmit} className="form-admin-container">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresse mail"
            required
          />
          <label htmlFor="password" hidden>
            Votre mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            required
          />
          <label htmlFor="checkbox">
            <input type="checkbox" id="checkbox" required />
            <Link to="/">Conditions d'utilisation</Link>
          </label>
          <button type="submit">Se connecter</button>
          <p>Mot de passe oublié ?</p>
          <Link to="/">Contactez-nous ici</Link>
        </form>
        <BackButton />
      </section>
    </div>
  );
};

export default LoginAdmin;
