import { Link } from "react-router";
import "./LoginParent.css";
import BackButton from "../../components/BackButton/BackButton";

const LoginParent = () => {
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
          <form className="form-parent-container">
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
          <BackButton />
        </section>
      </main>
    </>
  );
};

export default LoginParent;
