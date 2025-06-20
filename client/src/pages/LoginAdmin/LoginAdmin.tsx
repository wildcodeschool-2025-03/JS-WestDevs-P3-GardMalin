import { Link } from "react-router";
import "./LoginAdmin.css";

const LoginAdmin = () => {
  return (
    <>
      <main className="login-admin-container">
        <section className="picture-admin-container">
          <h1>Espace administrateur</h1>
          <img
            src="./images/login_admin.png"
            alt="admloginadmins avec un enfant"
          />
        </section>
        <section>
          <img src="./images/gardmalin-logo.png" alt="logo gardmalin" />
          <h1>Espace administrateur</h1>
          <h2>Connexion</h2>
          <form className="form-admin-container">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Adresse mail"
              required
            />
            <label htmlFor="password" hidden>
              {" "}
              Votre mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="Mot de passe"
              required
            />
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <Link to="/">Conditions d'utilisation</Link>
            </label>
            <button type="submit">Se connecter</button>
            <p>Mot de passe oublié ?</p>
            <Link to="/">Contactez-nous ici</Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginAdmin;
