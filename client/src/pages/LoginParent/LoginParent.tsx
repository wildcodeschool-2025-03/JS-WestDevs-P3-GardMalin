import { Link, useNavigate } from "react-router";
import "./LoginParent.css";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton/BackButton";
import { useAuth } from "../../services/AuthContext";

const LoginParent = () => {
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
        toast.success("Vous êtes connecté");
        setIsLogged(true);
        setUser(data);
        navigate("/space-parent");
      });
  };

  return (
    <>
      <main className="login-parent-container">
        <section className="picture-parent-container">
          <h1>Chers parents, gérez ici la garde de vos enfants !</h1>
          <img src="./images/login_parent.png" alt="parents avec un enfant" />
        </section>
        <section>
          <img src="./images/gardmalin-logo.png" alt="logo gardmalin" />
          <h1>Chers parents, gérez ici la garde de vos enfants !</h1>
          <h2>Connexion</h2>
          <form action={handleSubmit} className="form-parent-container">
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
              <input type="checkbox" id="checkbox" />
              <Link to="/">Conditions d'utilisation</Link>
            </label>
            <button type="submit">Se connecter</button>
            <p>Vous n'avez pas de compte ?</p>
            <Link to="/registration-parents">Cliquez ici !</Link>
          </form>
          <BackButton />
        </section>
      </main>
    </>
  );
};

export default LoginParent;
