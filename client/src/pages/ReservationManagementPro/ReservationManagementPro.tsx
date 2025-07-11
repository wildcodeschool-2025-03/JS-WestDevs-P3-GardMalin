import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Card from "../../components/Card/Card";
import "./ReservationManagementPro.css";

function ReservationManagementPro() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: 1,
      kid_id: 1,
      nursery_id: 1,
      date: "2025-07-08",
      is_validated: true,
      is_refused: false,
      kid: {
        firstname: "Flora",
        lastname: "Wick",
        age: 8,
        gender: "F",
      },
    },
    {
      id: 2,
      kid_id: 2,
      nursery_id: 1,
      date: "2025-07-08",
      is_validated: false,
      is_refused: false,
      kid: {
        firstname: "Louis",
        lastname: "Okalm",
        age: 5,
        gender: "M",
      },
    },
    {
      id: 3,
      kid_id: 3,
      nursery_id: 1,
      date: "2025-07-08",
      is_validated: false,
      is_refused: true,
      kid: {
        firstname: "Shana",
        lastname: "Williams",
        age: 1,
        gender: "F",
      },
    },
  ]);

  const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");

  // const [isFormOpen, setIsFormOpen] = useState(true);

  // Appel à l’API
  useEffect(() => {
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((err) => console.error("Erreur API:", err));
  }, []);

  // Filtre réservation
  const pendingRequests = reservations.filter(
    (r) =>
      r.date === formattedSelectedDate &&
      r.is_validated === false &&
      r.is_refused === false,
  );

  // Filtre validation
  const validatedRequests = reservations.filter(
    (r) =>
      r.date === formattedSelectedDate &&
      r.is_validated === true &&
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
      <div className="page-reservation-pro-management">
        <h1 className="title-page">Votre planning de réservations</h1>

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

        <div className="info-p">Informations planning</div>
        <section className="information">
          {/* En attente */}
          <article className="bloc-reservation">
            <p className="date">Date : {format(selectedDate, "dd-MM-yyyy")}</p>
            <h4 className="pending-c">réservées : {pendingRequests.length}</h4>

            {pendingRequests.map((res) => (
              <Card
                key={res.id}
                id={res.id}
                image="/images/little_girl.png"
                name={`${res.kid.firstname} ${res.kid.lastname}`}
                age={res.kid.age}
                status="en attente"
              />
            ))}
          </article>

          {/* Validées */}
          <article className="bloc-validated">
            <p>Places disponibles: {10 - validatedRequests.length}/10</p>
            <h4 className="validated-c">
              validées : {validatedRequests.length}
            </h4>
            {validatedRequests.map((res) => (
              <Card
                key={res.id}
                id={res.id}
                image="/images/little_girl.png"
                name={`${res.kid.firstname} ${res.kid.lastname}`}
                age={res.kid.age}
                status="validées"
              />
            ))}
          </article>

          {/* Refusées */}
          <article className="bloc-refused">
            <p>Refus: {10 - refusedRequests.length}/10</p>
            <h4 className="refused-c">refusées : {refusedRequests.length}</h4>
            {refusedRequests.map((res) => (
              <Card
                key={res.id}
                id={res.id}
                image="/images/little_girl.png"
                name={`${res.kid.firstname} ${res.kid.lastname}`}
                age={res.kid.age}
                status="refusées"
              />
            ))}
          </article>
        </section>
      </div>
    </>
  );
}

export default ReservationManagementPro;
