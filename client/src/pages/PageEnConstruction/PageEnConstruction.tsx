import "./PageEnConstruction.css";
import { useNavigate } from "react-router";

function PageEnConstruction() {
  const navigate = useNavigate();
  const pagePrecedente = () => {
    navigate(-1);
  };

  return (
    <section className="page-en-construction">
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
        <button type="button" onClick={pagePrecedente}>
          Page précédente
        </button>
      </article>
    </section>
  );
}

export default PageEnConstruction;
