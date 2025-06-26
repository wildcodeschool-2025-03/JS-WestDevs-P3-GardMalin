import { type ChangeEvent, useState } from "react";
import { Link } from "react-router";
import "./RegistrationParentsPage.css";

function RegistrationParentsPage() {
  const [fileName, setFileName] = useState("Aucun fichier sélectionné");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Aucun fichier sélectionné");
    }
  };

  return (
    <main className="registration-parents-page">
      <section className="section-parents-page">
        <article className="logo-registration-parents">
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </article>

        <article className="title-registration-parents">
          <h1>Création de votre espace parents</h1>
        </article>

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
              <label htmlFor="birthday" hidden>
                Date de naissance
              </label>
              <input
                id="birthday"
                type="text"
                placeholder="Date de naissance ex : 01/01/1901"
                pattern="\d{2}/\d{2}/\d{4}"
                title="Format attendu : jj/mm/aaaa"
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
                type="password"
                placeholder="Confirmer cotre mot de passe"
              />
            </article>
            <label htmlFor="select-file" className="custom-file-label">
              Mettez en format PDF une copie de votre livret de famille
            </label>
            <span className="file-name">{fileName}</span>
            <input
              id="select-file"
              type="file"
              name="livretPdf"
              accept="application/pdf"
              onChange={handleFileChange}
              hidden
            />

            <button className="submit-parents" type="submit">
              Confirmer votre incription
            </button>
          </form>
          <Link to="/spaceparent">
            <button className="parents-button" type="submit">
              Espace parents
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default RegistrationParentsPage;
