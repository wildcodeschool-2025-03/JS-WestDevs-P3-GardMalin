import { Link } from "react-router";
import "./RegistrationNurseryPage.css";

function RegistrationNurseryPage() {
  return (
    <main className="registration-professional-page">
      <section>
        <article>
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </article>

        <article>
          <h1>Création de votre espace professionnel</h1>
        </article>

        <section>
          <form className="registration-professional">
            <article className="grid-box1">
              <label htmlFor="company" hidden>
                Nom de votre établissement
              </label>
              <input
                id="company"
                type="text"
                placeholder=" Nom de votre établissement"
              />

              <label htmlFor="siret" hidden>
                Numéro de SIRET
              </label>
              <input id="siret" type="text" placeholder="Numéro de SIRET" />

              <label htmlFor="email" hidden>
                Adresse email
              </label>
              <input id="email" type="email" placeholder=" Adresse email" />

              <label htmlFor="adress" hidden>
                Adresse
              </label>
              <input id="adress" type="text" placeholder="Adresse" />

              <label htmlFor="city" hidden>
                Ville
              </label>
              <input id="city" type="text" placeholder="Ville" />
            </article>
            <article className="grid-box2">
              <label htmlFor="postal" hidden>
                Code postale
              </label>
              <input id="postal" type="number" placeholder="Code postale" />

              <label htmlFor="phone" hidden>
                Numéro de téléphone
              </label>
              <input id="phone" type="tel" placeholder=" Numéro de téléphone" />

              <label htmlFor="reception-capacity" hidden>
                Capacité d'accueil
              </label>
              <input
                id="reception-capacity"
                type="number"
                placeholder="Capacité d'accueil"
              />

              <label htmlFor="password" hidden>
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder=" Mot de passe"
              />

              <label htmlFor="confirm-password" hidden>
                Confirmer votre mot de passe
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder=" Confirmer votre mot de passe"
              />
            </article>
            <button type="submit">Validé vos informations</button>
          </form>
          <Link to="">
            <button type="button">Suivant</button>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default RegistrationNurseryPage;
