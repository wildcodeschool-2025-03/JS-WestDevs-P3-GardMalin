import { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./ReservationManagementPro.css";
import Card from "../../components/Card/Card";

const ReservationManagementPro: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [reservations, setReservations] = useState<Reservation[]>([]);

  const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");

  // Appel à l’API
  useEffect(() => {
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((err) => console.error("Erreur API:", err));
  }, []);

  // Filtre validation
  const validatedRequests = reservations.filter(
    (r) =>
      r.date === formattedSelectedDate &&
      r.is_validated === true &&
      r.is_refused === false,
  );

  // Filtre réservation
  const pendingRequests = reservations.filter(
    (r) =>
      r.date === formattedSelectedDate &&
      r.is_validated === false &&
      r.is_refused === false,
  );

  // Filtre refusées
  const refusedRequests = reservations.filter(
    (r) =>
      r.date === formattedSelectedDate &&
      r.is_validated === false &&
      r.is_refused === true,
  );

  return (
    <>
      <h1 className="title-page">Votre plannig de réservations</h1>
      <div className="page-reservation-pro-management">
        <section className="container-one">
          <article className="reservation">
            <p>
              <strong>Date sélectionnée :</strong>{" "}
              {format(selectedDate, "dd-MM-yyyy")}
            </p>

            <Calendar
              date={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              locale={fr}
            />
          </article>
        </section>

        <section className="container-two">
          <strong>Informations planning</strong>
          <article className="information">
            <p>Date : {format(selectedDate, "dd-MM-yyyy")}</p>

            {/* Validées */}
            <div className="bloc-validated">
              <button type="button">
                <p>Liste des inscriptions validées</p>
              </button>
              {validatedRequests.map((res) => (
                <Card
                  key={res.id}
                  image="/images/little_boy.png"
                  text={`${res.kid.firstname} ${res.kid.lastname}`}
                  name={res.kid.firstname}
                  age={res.kid.age}
                />
              ))}
            </div>

            <p>Places disponibles: {10 - validatedRequests.length}/10</p>

            {/* En attente */}
            <div className="bloc-reservation">
              <button type="button">
                <p>Demandes de réservation : {pendingRequests.length}</p>
              </button>
              {pendingRequests.map((res) => (
                <Card
                  key={res.id}
                  image="/images/little_girl.png"
                  text={`${res.kid.firstname} ${res.kid.lastname}`}
                  name={res.kid.firstname}
                  age={res.kid.age}
                />
              ))}
            </div>

            {/* Refusées */}
            <div className="bloc-refused">
              <button type="button">
                <p>Demandes refusées : {refusedRequests.length}</p>
              </button>
              {refusedRequests.map((res) => (
                <Card
                  key={res.id}
                  image="/images/little_girl.png"
                  text={`${res.kid.firstname} ${res.kid.lastname}`}
                  name={res.kid.firstname}
                  age={res.kid.age}
                />
              ))}
            </div>

            <button className="valid-reservation" type="submit">
              Confirmation
            </button>
          </article>
        </section>
      </div>
    </>
  );
};

export default ReservationManagementPro;
