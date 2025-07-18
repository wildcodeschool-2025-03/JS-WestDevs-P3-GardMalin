import { useEffect, useState } from "react";
import "./ConfirmationReservation.css";
import { Link } from "react-router";

const ConfirmationReservation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <section className="confirmation-reservation">
      <article className="section-on-the-right">
        <img
          src={"/images/congratulation.png"}
          alt="Avatar de félicitation pour la demande de réservation"
          className={show ? "fade-in-once" : ""}
        />
        <Link to="/space-parent">Espace parent</Link>
      </article>
      <article className="section-on-the-left">
        <h2>Félicitations !</h2>
        <p>
          Nous avons bien pris en compte tous les éléments pour votre demande de
          réservation.
          <br />
          Votre demande sera vérifié par nos équipes dans un délai de 48h.
        </p>
      </article>
    </section>
  );
};

export default ConfirmationReservation;
