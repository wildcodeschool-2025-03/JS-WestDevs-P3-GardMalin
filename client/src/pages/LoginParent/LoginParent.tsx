import { Link } from "react-router";
import "./LoginParent.css";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton/BackButton";

const LoginParent = () => {
  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3310/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        toast.success("Vous êtes connecté !");
      } else {
        toast.error("Echec de connexion");
      }
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
