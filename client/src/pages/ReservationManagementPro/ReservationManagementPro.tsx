import { useState, useEffect } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./ReservationManagementPro.css";
import Card from "../../components/Card/Card";

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

        <div className="container-two">
          <strong>Informations planning</strong>
          <section className="information">
            <p>Date : {format(selectedDate, "dd-MM-yyyy")}</p>

            {/* Validées */}
            <article className="bloc-validated">
              <p>Liste des inscriptions validées</p>

              {validatedRequests.map((res) => (
                <Card
                  key={res.id}
                  id={res.id}
                  image="/images/little_girl.png"
                  name={`${res.kid.firstname} ${res.kid.lastname}`}
                  age={res.kid.age}
                  status="pending"
                />
              ))}
            </article>

            <p>Places disponibles: {10 - validatedRequests.length}/10</p>

            {/* En attente */}
            <article className="bloc-reservation">
              <p>Demandes de réservation : {pendingRequests.length}</p>

              {pendingRequests.map((res) => (
                <Card
                  key={res.id}
                  id={res.id}
                  image="/images/little_girl.png"
                  name={`${res.kid.firstname} ${res.kid.lastname}`}
                  age={res.kid.age}
                  status="pending"
                />
              ))}
            </article>

            {/* Refusées */}
            <article className="bloc-refused">
              <p>Demandes refusées : {refusedRequests.length}</p>

              {refusedRequests.map((res) => (
                <Card
                  key={res.id}
                  id={res.id}
                  image="/images/little_girl.png"
                  name={`${res.kid.firstname} ${res.kid.lastname}`}
                  age={res.kid.age}
                  status="refused"
                />
              ))}
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default ReservationManagementPro;
