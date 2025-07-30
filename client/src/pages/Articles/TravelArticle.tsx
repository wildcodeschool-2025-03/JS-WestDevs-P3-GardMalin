import { Link } from "react-router";
import BackButton from "../../components/BackButton/BackButton";
import "./StyleArticles.css";

function TravelArticle() {
  return (
    <section className="article-section">
      <Link to="/articles">Voir tous les articles</Link>
      <h1>
        {" "}
        Voyager avec bébé (0–3 ans) : conseils pour partir l’esprit léger
      </h1>
      <section className="section-articles-component">
        <section className="on-the-left">
          <h3>🍼 Avant le départ : bien préparer le voyage</h3>
          <p>
            <h4>1. Anticipez les besoins de votre bébé :</h4>• Préparez une
            trousse avec : couches, lingettes, biberons, tétines, médicaments,
            vêtements de rechange, doudou.
            <br />• Pensez à emporter ses objets familiers : couverture, jouet
            préféré, veilleuse. <br />
            <h4>2. Adaptez le moyen de transport :</h4>• 🚗 En voiture : siège
            auto adapté, pauses régulières, pare-soleil, musique douce.
            <br />• 🚄 En train : réservez une place avec espace poussette ou en
            carré famille si possible.
            <br />• ✈️ En avion : demandez un berceau si bébé a moins de 10 kg,
            donnez le sein ou un biberon au décollage et à l’atterrissage pour
            éviter les douleurs d’oreilles.
            <br />
          </p>
          <h3>👶 Pendant le trajet : le confort avant tout</h3>
          <p>
            <h4>0–6 mois :</h4>• Priorité au confort : portage recommandé, peu
            de stimulations.
            <br />• Respectez les horaires de sieste, même en déplacement.
            <br />
            <h4>6–18 mois :</h4>• Préparez quelques jouets d’occupation simples
            (livres, cubes, objets sensoriels).
            <br />• Laissez-le se dégourdir dès que possible lors des pauses.
            <br />
            <h4>18 mois – 3 ans :</h4>• Préparez des petits jeux, des chansons,
            ou une histoire audio.
            <br />• Impliquez-le : "Tu veux quelle peluche pour le voyage ?",
            cela le rassure.
            <br />
          </p>
        </section>
        <section className="on-the-right">
          <h3>🏠 Sur place : recréer un cocon rassurant</h3>
          <p>
            Même en vacances, les tout-petits ont besoin de repères.
            <h4>Astuces :</h4>• Gardez des rituels du soir semblables à la
            maison (histoire, chanson).
            <br />• Aménagez un coin "à lui" avec sa couverture, ses livres.
            <br />• Privilégiez des activités calmes en début de séjour pour
            faciliter l’adaptation.
            <br />
          </p>
          <h3>🧳 Check-list utile pour ne rien oublier :</h3>
          <p>
            • 🍼 Biberons, lait, eau ou tasses d’apprentissage <br />• 🎽 Tenues
            légères + vêtements chauds selon le lieu
            <br />• 🚿 Gel lavant, crème solaire, trousse de soin
            <br />• 🧸 Jeux simples, livres, peluche
            <br />• 🪥 Brosse à dents, couches, crème de change
            <br />• 💤 Lit parapluie ou lit bébé si non fourni
            <br />
          </p>
          <h3>💡 Bon à savoir :</h3>
          <p>
            • Les tout-petits s’adaptent souvent mieux que les adultes ! Ce qui
            les rassure, c’est votre présence et <strong>votre calme</strong>.
            <br />• Il est normal que le rythme soit un peu chamboulé : restez
            souples et bienveillants.
            <br />
          </p>
        </section>
      </section>
      <h2>🌟 Conclusion : des vacances à votre rythme</h2>
      <p className="cloture">
        Voyager avec un enfant en bas âge, c’est avant tout{" "}
        <strong>changer d’environnement, pas de dynamique familiale</strong>. En
        préparant bien, en acceptant les imprévus, et en respectant ses besoins,
        vous pouvez vivre une expérience de vacances riche, joyeuse et
        ressourçante… pour toute la famille.
      </p>
      <BackButton />
    </section>
  );
}

export default TravelArticle;
