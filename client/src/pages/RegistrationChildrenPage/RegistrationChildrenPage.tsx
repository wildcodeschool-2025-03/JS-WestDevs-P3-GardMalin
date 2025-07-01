import "./RegistrationChildrenPage.css";

function RegistrationChildrenPage() {
  return (
    <main className="page-registration-children">
      <section className="header-registration-children">
        <h1>Inscription de l'enfant</h1>
      </section>

      <section className="form-section">
        <form className="fields">
          <article className="gender">
            <label htmlFor="text">Sexe de l'enfant</label>
            <br />

            <label htmlFor="girl">Féminin</label>
            <input type="radio" id="girl" value="girl" checked />
            <label htmlFor="man">Masculin</label>
            <input type="radio" id="man" value="man" />
          </article>

          <label htmlFor="lastname" hidden>
            Nom
          </label>
          <input type="text" id="lastname" placeholder="Nom" required />
          <br />

          <label htmlFor="firstname" hidden>
            Prénom
          </label>
          <input type="text" id="firstname" placeholder="Prénom" required />
          <br />

          <label htmlFor="age" hidden>
            Age
          </label>
          <input type="text" id="age" placeholder="Age" required />
          <br />

          <article className="handicap">
            <label htmlFor="text">Handicap ou spécificités</label>
            <br />

            <input type="radio" id="yes" value="yes" checked />
            <label htmlFor="yes">Oui*</label>
            <label htmlFor="radio">
              <input type="radio" id="no" value="no" />
              Non
            </label>
          </article>
          <p className="details">
            *Si oui, merci de vous rapprocher de l'établissement choisi afin
            d'en discuter plus en détails.
          </p>
          <label htmlFor="text" hidden>
            Allergies
          </label>
          <input type="text" id="firstname" placeholder="Allergies" />
          <br />

          <article className="walk">
            <label htmlFor="text">Est-ce que votre enfant marche ?</label>
            <br />
            <input type="radio" id="yes2" value="yes2" checked />
            <label htmlFor="yes2">Oui</label>
            <input type="radio" id="no2" value="no2" />
            <label htmlFor="no2">Non</label>
          </article>

          <div className="block-validated">
            <button className="validated" type="submit">
              Valider
            </button>
          </div>
        </form>

        <section className="footer-registration-children">
          <button className="return-button" type="button">
            Retour
          </button>

          <button className="next-button" type="button">
            Suivant
          </button>
        </section>
      </section>
    </main>
  );
}

export default RegistrationChildrenPage;
