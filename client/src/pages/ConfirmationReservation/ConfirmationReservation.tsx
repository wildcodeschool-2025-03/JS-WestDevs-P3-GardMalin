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
        <p>coucou</p>
      </article>
    </section>
  );
};

export default ConfirmationReservation;
