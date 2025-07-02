import BackButton from "../../components/BackButton/BackButton";
import "./RegistrationChildrenPage.css";

function RegistrationChildrenPage() {
  return (
    <div className="page-registration-children">
      <section className="header-registration-children">
        <h1>Inscription de l'enfant</h1>
      </section>

      <section className="form-section">
        <form>
          <article className="gender">
            <div>
              <label htmlFor="text">Sexe de l'enfant</label>
            </div>
            <label htmlFor="girl">Féminin</label>
            <input type="radio" id="girl" value="girl" name="done" />
            <label htmlFor="man">Masculin</label>
            <input type="radio" id="man" value="man" name="done" />
          </article>

          <label htmlFor="lastname" hidden>
            Nom
          </label>
          <input type="text" id="lastname" placeholder="Nom" required />

          <label htmlFor="firstname" hidden>
            Prénom
          </label>
          <input type="text" id="firstname" placeholder="Prénom" required />

          <label htmlFor="age" hidden>
            Age
          </label>
          <input type="text" id="age" placeholder="Age" required />

          <article className="handicap">
            <div>
              <label htmlFor="text">Handicap ou spécificités</label>
            </div>
            <input type="radio" id="yes" value="yes" name="donetwo" />
            <label htmlFor="yes">Oui*</label>
            <input type="radio" id="no" value="no" name="donetwo" />
            <label htmlFor="no">Non</label>
          </article>
          <p className="details">
            *Si oui, merci de vous rapprocher de l'établissement choisi afin
            d'en discuter plus en détails.
          </p>
          <label htmlFor="text" hidden>
            Allergies
          </label>
          <input type="text" id="firstname" placeholder="Allergies" />

          <article className="walk">
            <div>
              <label htmlFor="text">Est-ce que votre enfant marche ?</label>
            </div>
            <input type="radio" id="yes2" value="yes2" name="donetree" />
            <label htmlFor="yes2">Oui</label>
            <input type="radio" id="no2" value="no2" name="donetree" />
            <label htmlFor="no2">Non</label>
          </article>

          <div className="block-validated">
            <button className="validated" type="submit">
              Valider
            </button>
          </div>
        </form>

        <section className="footer-registration-children">
          <BackButton />

          <button className="next-button" type="button">
            Suivant
          </button>
        </section>
      </section>
    </div>
  );
}

export default RegistrationChildrenPage;
