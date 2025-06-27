import { useState } from "react";
import "./About.css";

function About() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  return (
    <main className="about-page">
      <section className="about-page-component">
        <h1>A propos de Gard Malin</h1>
        <h3>La garde d'enfants sur mesure, humaine et engagée</h3>
        <section className="first-presentation-paragraphe">
          <p>
            Chez Gard Malin, nous croyons qu'une solution de garde ne se résume
            pas à surveiller un enfant : c'est un véritable accompagnement
            humain, bienveillant et adapté à chaque situation. Notre mission est
            simple mais essentielle : permettre à chaque famille de vivre son
            quotidien sereinement, et à chaque professionnel de la garde de
            s'épanouir dans son métier.
          </p>
        </section>
        <section className="item-conditional-display">
          <section className="item-conditional-display-button">
            <button type="button" onClick={() => setIsFormOpen(true)}>
              Nous écrire
            </button>
            <button type="button" onClick={() => setIsFormOpen(false)}>
              Nos coordonnées
            </button>
          </section>
          <article
            className={`contact-form ${isFormOpen ? "open" : "form-closed"}`}
          >
            <form>
              <label>
                <input
                  type="email"
                  name="Adresse e-mail"
                  id="email"
                  placeholder="Ecrivez ici votre adresse e-mail"
                />
              </label>
              <select>
                <option value="">--Veuillez choisir un motif-</option>
                <option value="informations">Demande de renseignements</option>
                <option value="dispute">Je veux signaler un litige</option>
                <option value="suggestion">
                  Je vous soumettre une suggestion
                </option>
                <option value="others">Autres</option>
              </select>
              <label>
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
              <button type="submit">Envoyer ma demande</button>
            </form>
          </article>
          <article
            className={`coordinate-sheet ${!isFormOpen ? "open" : "form-closed"}`}
          >
            <h3>Horaires & Contact</h3>
            <p>
              📅 Ouvert du lundi au vendredi <br />🕘 De 9h00 à 18h00 <br />📍
              05 place de la Victoire, <br />
              33000 Bordeaux <br />📞 05 56 45 67 89 <br />
              ✉️ contact@gardmalin.com
            </p>
          </article>
        </section>
        <section className="second-presentation-paragraph">
          <h4>💛 Notre raison d'être</h4>
          <p>
            Parce que chaque enfant est unique, chaque famille différente, et
            chaque intervenant porteur de valeurs, nous avons imaginé un service
            sur mesure qui tient compte de vos besoins réels et de vos attentes
            profondes. Nous mettons un point d'honneur à bâtir des relations de
            confiance durables, basées sur le respect mutuel, l'écoute et la
            transparence.
          </p>
          <h4>🌱 Notre engagement : qualité, sécurité, épanouissement</h4>
          <p>
            La garde d'enfants, pour nous, est un engagement social fort. Chaque
            interaction compte. Chaque sourire d'enfant, chaque parent rassuré,
            chaque professionnel valorisé est une réussite. Nous œuvrons au
            quotidien pour : Garantir une sécurité optimale à chaque étape
            S'assurer d'un environnement épanouissant pour les enfants Apporter
            de la sérénité aux familles Donner du sens et du respect au métier
            de garde d'enfants
          </p>
          <h4>🤝 Rejoignez la communauté Gard Malin</h4>
          <p>
            Que vous soyez parent à la recherche de la perle rare, ou
            professionnel de la garde en quête d'un cadre humain et
            professionnel, Gard Malin est là pour vous accompagner. Ici, tout
            est pensé pour le bien-être des enfants… et la tranquillité des
            grands.
          </p>
        </section>
      </section>
    </main>
  );
}

export default About;
