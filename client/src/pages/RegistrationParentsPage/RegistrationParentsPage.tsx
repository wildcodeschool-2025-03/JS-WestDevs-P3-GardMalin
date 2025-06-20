import "./RegistrationParentsPage.css";

function RegistrationParentsPage() {
  return (
    <main className="registration-parents-page">
      <section className="section-page">
        <div>
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </div>

        <div className="title-registration">
          <h1>Création de votre espace parents</h1>
        </div>

        <section className="form-parents">
          <form className="registration-parents">
            <input type="text" placeholder=" Nom" />

            <input type="text" placeholder=" Prénom" />

            <input type="email" placeholder=" Adresse email" />

            <input type="date" placeholder="Date de naissance" />

            <input type="address" placeholder="Adresse" />

            <input type="tel" placeholder=" Numéro de téléphone" />

            <input type="password" placeholder=" Mot de passe" />

            <input type="text" placeholder=" Confirmer cotre mot de passe" />

            <label htmlFor="file">
              Mettez en format PDF une copie de votre livret de famille
            </label>

            <input type="file" name="livretPdf" accept="application/pdf" />

            <button type="submit">Confirmer votre incription</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default RegistrationParentsPage;
