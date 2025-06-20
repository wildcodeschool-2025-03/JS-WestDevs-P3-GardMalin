import { Link } from "react-router";
import "./LoginPro.css";

const LoginPro = () => {
  return (
    <>
      <main className="login-pro-container">
        <section className="picture-pro-container">
          <h1>Gérez ici votre espace Pro comme un pro</h1>
          <img src="./images/login_pro.png" alt="parents avec des enfants" />
        </section>
        <section>
          <img src="./images/gardmalin-logo.png" alt="logo gardmalin" />
          <h1>Gérez ici votre espace Pro comme un pro</h1>
          <h2>Connexion</h2>
          <form className="form-pro-container">
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
            <p>Vous n'avez pas de compte ?</p>
            <Link to="/">Cliquez ici !</Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginPro;
