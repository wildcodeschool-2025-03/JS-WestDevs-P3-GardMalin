import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section>
        <article>
          <form>
            <label htmlFor="Ecrivez ici votre adresse e-mail :">
              <input type="text" name="Adresse e-mail" id="email" />
            </label>
            <label htmlFor="Indiquez ici le motif de votre demande :">
              <select name="Motifs de la demande" id="reason-select">
                <option value="">--Veuillez choisir un motif-</option>
                <option value="informations">Demande de renseignements</option>
                <option value="dispute">Je veux signaler un litige</option>
                <option value="suggestion">
                  Je vous soumettre une suggestion
                </option>
                <option value="others">Autres</option>
              </select>
            </label>
            <label>
              Ecrivez votre message ici :
              <textarea
                id="message"
                name="message"
                rows={5}
                cols={33}
                maxLength={500}
                wrap="soft"
                placeholder="Tapez votre message ici..."
              />
            </label>
          </form>
        </article>
      </section>
    </main>
  );
}

export default About;
