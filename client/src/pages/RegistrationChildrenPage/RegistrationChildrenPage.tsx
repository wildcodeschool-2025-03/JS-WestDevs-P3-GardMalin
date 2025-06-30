// import { Link } from "react-router";
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
            <label htmlFor="checkbox">Féminin</label>
            <input type="checkbox" id="féminin" value="féminin" />
            <label htmlFor="checkbox">Masculin</label>
            <input type="checkbox" id="masculin" value="masculin" />
          </article>

          <label htmlFor="text" hidden>
            Nom
          </label>
          <input type="text" id="lastname" placeholder="Nom" required />
          <br />
          <label htmlFor="text" hidden>
            Prénom
          </label>
          <input type="text" id="firstname" placeholder="Prénom" required />
          <br />
          <label htmlFor="text" hidden>
            Age
          </label>
          <input type="text" id="firstname" placeholder="Age" required />
          <br />

          <article className="handicap">
            <label htmlFor="text">Handicap ou spécificités</label>
            <br />
            <input type="checkbox" id="yes" value="yes" />
            <label htmlFor="">Oui</label>
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              Non
            </label>
          </article>

          <label htmlFor="text" hidden>
            Allergies
          </label>
          <input type="text" id="firstname" placeholder="Allergies" />
          <br />
          <article className="walk">
            <label htmlFor="text">Est-ce que votre enfant marche ?</label>
            <br />
            <input type="checkbox" id="yes" value="yes" />
            <label htmlFor="">Oui</label>
            <input type="checkbox" id="no" value="no" />
            <label htmlFor="">Non</label>
          </article>

          <button className="validated" type="submit">
            Valider
          </button>
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
