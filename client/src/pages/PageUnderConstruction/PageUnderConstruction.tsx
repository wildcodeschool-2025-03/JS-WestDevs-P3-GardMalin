import BackButton from "../../components/BackButton/BackButton";
import "./PageUnderConstruction.css";

function PageUnderConstruction() {
  return (
    <section className="page-under-construction">
      <figure>
        <img
          src="./images/oops.png"
          alt="représentation de la page en cours de maintenance"
        />
        <figcaption id="sr-only">
          "Représentation de la page d'erreur liée au statut de page en cours de
          maintenance illustrée par un avatar d'enfant souriant."
        </figcaption>
      </figure>
      <article>
        <h1>Oups !</h1>
        <p>
          Cette page est en cours de maintenance, merci de votre compréhension !
        </p>
        <BackButton />
      </article>
    </section>
  );
}

export default PageUnderConstruction;
