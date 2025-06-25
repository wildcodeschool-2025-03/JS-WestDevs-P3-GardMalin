import "./RegistrationParentsPage.css";

function RegistrationParentsPage() {
  return (
    <main className="registration-parents-page">
      <section className="section-parents-page">
        <div>
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </div>

        <div className="title-registration">
          <h1>Création de votre espace parents</h1>
        </div>

        <section className="form-parents">
          <form className="registration-parents">
            <article className="grid-box-parents1">
              <label htmlFor="name" hidden>
                Nom
              </label>
              <input id="name" type="text" placeholder="Nom" />
              <label htmlFor="firstname" hidden>
                Prénom
              </label>
              <input id="firstname" type="text" placeholder="Prénom" />
              <label htmlFor="email" hidden>
                Adresse email
              </label>
              <input id="email" type="email" placeholder="Adresse email" />
              <label htmlFor="birthday">Date de naissance</label>
              <input
                id="birthday"
                type="date"
                placeholder="Date de naissance"
              />
              <label htmlFor="address" hidden>
                Adresse
              </label>
              <input id="address" type="text" placeholder="Adresse" />
            </article>
            <article className="grid-box-parents2">
              <label htmlFor="city" hidden>
                Ville
              </label>
              <input id="city" type="text" placeholder="Ville" />
              <label htmlFor="postal" hidden>
                Code postale
              </label>
              <input id="postal" type="number" placeholder="Code postale" />
              <label htmlFor="phone" hidden>
                Numéro de téléphone
              </label>
              <input id="phone" type="tel" placeholder="Numéro de téléphone" />
              <label htmlFor="password" hidden>
                Mot de passe
              </label>
              <input id="password" type="password" placeholder="Mot de passe" />
              <label htmlFor="confirm-password" hidden>
                Confirmer votre mot de passe
              </label>
              <input
                id="confirm-password"
                type="text"
                placeholder="Confirmer cotre mot de passe"
              />
            </article>
            <label htmlFor="file">
              Mettez en format PDF une copie de votre livret de famille
            </label>

            <input
              id="file"
              type="file"
              name="livretPdf"
              accept="application/pdf"
            />

            <button className="submit-parents" type="submit">
              Confirmer votre incription
            </button>
          </form>
          <button className="parents-button" type="button">
            Espace parents
          </button>
        </section>
      </section>
    </main>
  );
}

export default RegistrationParentsPage;
