import "./Page404.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Page404() {
  const [seconds, setSeconds] = useState(8);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeconds = seconds - 1;
      setSeconds(newSeconds);

      if (newSeconds <= 0) {
        clearInterval(interval);
        navigate("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, navigate]);

  useEffect(() => {
    setShow(true);
  }, []);

  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <section className="page404">
      <figure>
        <img
          src="/public/images/404.png"
          alt="représentation de la page d'erreur"
          className={show ? "fade-in-once" : ""}
        />
        <figcaption id="sr-only">
          "Représentation de la page d'erreur 404 illustrée par un avatar
          d'enfant surpris."
        </figcaption>
      </figure>
      <article>
        <h1>Erreur 404</h1>
        <p>La page que vous recherchez ne semble pas disponible.</p>
        <p id="chrono">
          Vous allez être rediriger dans {displaySeconds} secondes <br />
          vers la page d'accueil.
        </p>
      </article>
    </section>
  );
}

export default Page404;
