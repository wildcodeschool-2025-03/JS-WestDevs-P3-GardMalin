import { Link } from "react-router";
import "./SpacePro.css";

const SpacePro = () => {
  return (
    <div className="space-pro-container">
      <header>
        <h1>Espace pro</h1>
        <h2>"Les Petits Explorateurs"</h2>
      </header>
      <Link to="/">Accès au planning</Link>
      <section>
        <article>
          <h2>Ma présentation</h2>
          <p>
            Bienvenue à "Les Petits Explorateurs", une crèche chaleureuse et
            innovante située en plein cœur d’un quartier verdoyant et familial.
            Notre structure accueille les enfants de 3{" "}
          </p>
        </article>
        <h2>Mes coordonnées</h2>
        <article>
          <p>📍 12 rue des Érables, 75000 Paris</p>
          <p>📞 01 23 45 67 89</p>
          <p>✉️ contact@lespetitsexplorateurs.fr</p>
          <input type="file" />
        </article>
      </section>
      <section>
        <article>
          <h2>Nos atouts</h2>
          <p>
            🌿 Espaces d’éveil thématiques : coin nature, salle de motricité,
            bibliothèque enfantine, atelier sensoriel… 👶 Accueil personnalisé :
            adaptation progressive,
          </p>
        </article>
        <article>
          <h2>Mes horaires</h2>
          <ul>
            <li>Lundi : 7h00 - 19h00</li>
            <li>Mardi : 7h00 - 19h00</li>
            <li>Mercredi : 7h00 - 18h00</li>
            <li>Jeudi : 7h00 - 19h00</li>
            <li>Vendredi : 7h00 - 18h00</li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default SpacePro;
