import { Link } from "react-router";
import BackButton from "../../components/BackButton/BackButton";
import "./StyleArticles.css";

function DevelopmentArticle() {
  return (
    <section className="article-section">
      <Link to="/articles">Voir tous les articles</Link>
      <h1>Le développement de l'enfant de 0 à 3 ans</h1>
      <section className="section-articles-component">
        <section className="on-the-left">
          <h3>🍼 0 à 6 mois – Découverte du monde</h3>
          <p>
            Dès la naissance, le nourrisson entre dans une phase intense
            d'exploration sensorielle. Il découvre la lumière, les sons, les
            odeurs, et surtout… le contact rassurant de ses parents. Il apprend
            à reconnaître les visages familiers, à tourner la tête vers une voix
            douce, et à suivre un objet du regard. Les pleurs restent son
            principal moyen de communication. <br />
            <h4>Capacités motrices :</h4>• Tient sa tête quelques secondes à 1{" "}
            <br />• Commence à sourire en réponse à 2 <br />• Attrape
            volontairement un objet vers 4 mois.
            <br />• Se retourne sur le dos ou le ventre vers 5-6 mois.
            <br />
            <h4>Conseils :</h4>• Parlez-lui souvent avec douceur. <br />• Variez
            les stimulations visuelles (mobiles, couleurs).
            <br />• Multipliez les temps de peau à peau.
            <br />
          </p>
          <h3>👶 6 à 12 mois – Premiers liens et mouvements</h3>
          <p>
            Cette période marque une véritable explosion des compétences.
            L’enfant commence à mieux contrôler son corps, s’assoit sans aide,
            puis rampe, et parfois même marche à quatre pattes. Il reconnaît son
            prénom, babille avec des sons de plus en plus variés, et commence à
            comprendre de simples consignes comme « non » ou « bravo ». <br />
            <h4>Capacités motrices :</h4>• Se tient assis vers 6-8 mois. <br />•
            Rampe ou marche à quatre pattes vers 9 mois. <br />• Tente de se
            redresser avec appui à 10-11 mois. <br />• Fait quelques pas avec
            aide vers 12 mois. <br />
            <h4>Conseils :</h4>• Laissez-le explorer au sol en sécurité. <br />•
            Jouez à coucou-caché : cela l’aide à comprendre que vous existez
            même hors de sa vue. <br />• Encouragez la répétition : il apprend
            par mimétisme. <br />
          </p>
        </section>
        <section className="on-the-right">
          <h3>🚼 12 à 24 mois – L’autonomie naissante</h3>
          <p>
            Entre 1 et 2 ans, l’enfant passe de la marche à la course, du
            babillage aux premiers mots compréhensibles. Il affirme sa volonté,
            dit « non » souvent, mais aussi « encore », « papa », « maman ». Il
            commence à comprendre le lien de cause à effet, empile des cubes,
            tente d’enfiler ses chaussures et aime imiter les adultes
            (téléphone, cuisine…).
            <h4>Compétences émergentes :</h4>• Marque une préférence pour
            certaines personnes ou objets. <br />• Utilise 10 à 50 mots vers 18
            mois. <br />• Aime les routines rassurantes. <br />
            <h4>Conseils :</h4>• Valorisez ses réussites : il a besoin
            d’encouragement. <br />• Instaurez des rituels du coucher pour
            sécuriser ses journées. <br />• Laissez-le choisir entre deux
            vêtements ou deux jouets pour nourrir son autonomie. <br />
          </p>
          <h3>👧 24 à 36 mois – Explosion du langage et imagination</h3>
          <p>
            Entre 2 et 3 ans, l’enfant développe un vocabulaire plus riche, fait
            des phrases courtes et commence à poser des questions. Il comprend
            mieux les consignes, aime jouer avec d’autres enfants (même si le
            partage reste difficile), et exprime ses émotions plus clairement.
            Il entre aussi dans l’univers du <strong>jeu symbolique</strong> :
            il fait semblant de nourrir une peluche ou de conduire une voiture.
            <h4>Compétences clés :</h4>• Utilise des phrases simples : « moi
            veux ça », « papa parti travail ». <br />• Identifie des parties du
            corps, des couleurs simples. <br />• Commence à dire son âge, son
            prénom. <br />
            <h4>Conseils :</h4>• Lisez-lui des histoires simples chaque jour.{" "}
            <br />• Laissez place au jeu libre (sans écran). <br />• Aidez-le à
            nommer ses émotions : « Tu es fâché car tu ne veux pas ranger ».{" "}
            <br />
          </p>
        </section>
      </section>
      <h2>💡 À retenir</h2>
      <p className="cloture">
        Chaque enfant se développe à son rythme. Ce qui compte avant tout, c’est
        de lui offrir un cadre <strong>sécurisant, stimulant</strong> et{" "}
        <strong>bienveillant</strong>. En cas de doute ou de retard perçu,
        n’hésitez jamais à en parler à votre pédiatre.
      </p>
      <BackButton />
    </section>
  );
}

export default DevelopmentArticle;
