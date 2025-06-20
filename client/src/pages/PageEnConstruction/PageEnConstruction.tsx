import "./PageEnConstruction.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function PageEnConstruction() {
  const [seconds, setSeconds] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeconds = seconds - 1;
      setSeconds(newSeconds);

      if (newSeconds <= 0) {
        clearInterval(interval);
        navigate(-1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, navigate]);

  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

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
        <p id="chrono-oups">
          Vous allez être rediriger dans {displaySeconds} secondes <br />
          vers la page précédente.
        </p>
      </article>
    </section>
  );
}

export default PageEnConstruction;
