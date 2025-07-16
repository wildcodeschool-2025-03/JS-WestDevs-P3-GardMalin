import { Link } from "react-router";
import "./RegistrationParentsPage.css";

function RegistrationParentsPage() {
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   street: "",
  //   postal_code: "",
  //   city: "",
  //   phone_number: "",
  // });
  return (
    <div className="registration-parents-page">
      <section>
        <article>
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </article>

        <article>
          <h1>Création de votre espace parents</h1>
        </article>

        <section>
          <form className="registration-parents">
            <article className="grid-box-parents1">
              <label htmlFor="role" className="checkbox-label" hidden>
                Rôle
              </label>
              <input
                id="role"
                name="role"
                type="checkbox"
                className="checkbox-input"
              />
              Parent
              <label htmlFor="lastnames" hidden>
                Nom
              </label>
              <input
                id="lastnames"
                name="lastname"
                type="text"
                placeholder="Nom"
              />
              <label htmlFor="firstnames" hidden>
                Prénom
              </label>
              <input
                id="firstnames"
                name="firstname"
                type="text"
                placeholder="Prénom"
              />
              <label htmlFor="email" hidden>
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Adresse email"
              />
              <label htmlFor="street" hidden>
                Adresse
              </label>
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Adresse"
              />
            </article>
            <article className="grid-box-parents2">
              <label htmlFor="city" hidden>
                Ville
              </label>
              <input id="city" name="city" type="text" placeholder="Ville" />
              <label htmlFor="postal" hidden>
                Code postale
              </label>
              <input
                id="postal"
                name="postal_code"
                type="number"
                placeholder="Code postale"
              />
              <label htmlFor="phone" hidden>
                Numéro de téléphone
              </label>
              <input
                id="phone"
                name="phone_number"
                type="tel"
                placeholder="Numéro de téléphone"
              />
              <label htmlFor="password" hidden>
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
              />
              <label htmlFor="confirm-password" hidden>
                Confirmer votre mot de passe
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirmer cotre mot de passe"
              />
            </article>

            <button className="submit-parents" type="submit">
              Confirmer votre incription
            </button>
          </form>
          <Link to="/space-parent">
            <button className="parents-button" type="button">
              Espace parents
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default RegistrationParentsPage;
