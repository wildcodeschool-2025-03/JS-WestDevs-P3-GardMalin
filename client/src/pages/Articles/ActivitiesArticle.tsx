import { Link } from "react-router";
import BackButton from "../../components/BackButton/BackButton";
import "./StyleArticles.css";

function ActivitiesArticle() {
  return (
    <section className="article-section">
      <Link to="/articles">Voir tous les articles</Link>
      <h1> Activités pour les vacances avec un bébé de 0 à 3 ans</h1>
      <section className="section-articles-component">
        <section className="on-the-left">
          <h3>🍼 0 à 6 mois – Des sensations douces et rassurantes</h3>
          <p>
            À cet âge, l’essentiel est de favoriser la détente et la découverte
            sensorielle. Inutile de surstimuler : bébé a besoin de calme et de
            sécurité pour profiter pleinement. <br />
            <h4>Idées d’activités :</h4>• 🌊 Bain sensoriel avec quelques jouets
            dans une bassine à l’ombre (eau tiède, bulles, éponges colorées).{" "}
            <br />• 🍃 Promenades en poussette ou porte-bébé dans un parc ou en
            forêt pour découvrir sons et odeurs. <br />
            •🎶 Moments musicaux doux (comptines, bruit de vagues, instruments
            simples comme un hochet).
            <br />• 🌞 Tapis d’éveil à l’extérieur (à l’ombre) pour regarder les
            feuilles bouger, écouter les oiseaux.
            <br />
            <strong>Astuce sécurité : </strong>Toujours protéger bébé du soleil,
            même à l’ombre (chapeau, crème, hydratation).
          </p>
          <h3>👶 6 à 18 mois – Explorer et toucher</h3>
          <p>
            Bébé commence à mieux se mouvoir et devient curieux de tout. Les
            vacances sont parfaites pour lui proposer de nouvelles textures,
            couleurs et expériences motrices. <br />
            <h4>Activités adaptées :</h4>• 🏖️ Jeux de sable ou d’eau, dans un bac
            sécurisé ou sur une plage calme.
            <br />• 🍓 Dégustation de fruits frais de saison avec les doigts :
            sensoriel et gustatif !<br />• 🧩 Paniers de découverte avec objets
            du quotidien à explorer (cuillères, tissus, pommes de pin…).
            <br />• 🎨 Peinture propre (peinture dans une pochette plastique, à
            malaxer sans se salir).
            <br />
            <strong>Petite pause :</strong> Lire un livre sous un arbre ou
            écouter une histoire enregistrée.
          </p>
        </section>
        <section className="on-the-right">
          <h3>🚼 18 à 36 mois – Bouger, créer, imiter</h3>
          <p>
            L’enfant entre dans une phase active et imaginative. Il aime
            expérimenter, copier les adultes, et tester ses capacités. Les
            vacances sont un moment rêvé pour nourrir son autonomie et sa
            créativité.
            <h4>Activités coup de cœur :</h4>• 🧺 Pique-nique où il peut aider à
            sortir la nappe, goûter aux aliments, ranger.
            <br />• 🪁 Jeux de motricité : grimper sur une butte, faire rouler
            une balle, courir après des bulles.
            <br />• 🎭 Jeux d’imitation : jouer à la marchande avec de vrais
            fruits, mettre une couche à une poupée.
            <br />• 🌼 Balades nature avec chasse aux trésors : chercher une
            fleur jaune, une feuille ronde… <br />
            <strong>Pensez-y :</strong> laissez des moments de jeu libre,
            essentiels pour le développement émotionnel.
          </p>
          <h3>🧳 Des vacances à son rythme</h3>
          <p>
            Même en vacances, les jeunes enfants ont besoin de rituels (repas,
            sieste, bain). Organisez les journées autour de ses besoins pour que
            l’expérience soit agréable pour tous.
            <h4>Conseils clés :</h4>• Préparez un petit sac d’activités pour les
            trajets (livres, doudou, objets sensoriels). <br />• Préférez des
            lieux calmes à forte stimulation (évitez les foules, les musiques
            fortes).
            <br />• Profitez des routines de vacances pour renforcer les liens :
            câlins du matin, histoires du soir...
            <br />
          </p>
        </section>
      </section>
      <h2>💡 À retenir</h2>
      <p className="cloture">
        Les meilleures activités sont souvent les plus simples. Ce n’est pas la
        quantité qui compte, mais la qualité des moments partagés. Offrez à
        votre bébé des vacances remplies de <strong>découvertes douces</strong>,
        de rire, et surtout, de <strong>présence</strong>.
      </p>
      <BackButton />
    </section>
  );
}

export default ActivitiesArticle;
