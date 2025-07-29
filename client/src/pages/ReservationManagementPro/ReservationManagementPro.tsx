import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Card from "../../components/Card/Card";
import "./ReservationManagementPro.css";
import BackButton from "../../components/BackButton/BackButton";
import { useAuth } from "../../services/AuthContext";
import type { Reservation } from "../../types/reservation";

const formatDate = (date: string) => format(new Date(date), "yyyy-MM-dd");

function ReservationManagementPro() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [_, setReservations] = useState<Reservation[]>([]);

  const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");

  const [pending, setPending] = useState<Reservation[]>([]);
  const [validated, setValidated] = useState<Reservation[]>([]);
  const [refused, setRefused] = useState<Reservation[]>([]);

  const [nurseryCapacity, setNurseryCapacity] = useState<number>();

  const { user } = useAuth();

  // Appel à l’API
  useEffect(() => {
    fetch(
      `http://localhost:3310/api/reservations?date=${formattedSelectedDate}&user_id=${user?.id}&nurserie_id=${user?.nurserieId}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setNurseryCapacity(data[0]?.nursery_capacity);
        setReservations(data);
        const pendingRequests = data.filter(
          (r: Reservation) =>
            formatDate(r.date) === formattedSelectedDate &&
            r.is_validated === 0,
        );
        setPending(pendingRequests);
        const validatedRequests = data.filter(
          (r: Reservation) =>
            r.date === formattedSelectedDate && r.is_validated === 1,
        );
        setValidated(validatedRequests);
        const refusedRequests = data.filter(
          (r: Reservation) =>
            r.date === formattedSelectedDate && r.is_validated === 0,
        );
        setRefused(refusedRequests);
      });
  }, [formattedSelectedDate, user?.id, user?.nurserieId]);
  return (
    <>
      <div className="page-reservation-pro-management">
        <h1 className="title-page">Votre planning de réservations</h1>
        {/* {console.info(reservations)} */}
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
            <h4 className="pending-c">
              Demande de réservation : {pending.length}
            </h4>

            {pending.map((res) => (
              <Card
                key={res.kid_id}
                id={res.kid_id}
                image="/images/little_girl.png"
                name={`${res.kid_firstname} ${res.kid_lastname}`}
                age={res.kid_age}
                status="en attente"
              />
            ))}
          </article>

          {/* Validées */}
          <article className="bloc-validated">
            <p>
              Places disponibles: {validated.length}/{nurseryCapacity}
            </p>
            <h4 className="validated-c">validées : {validated.length}</h4>
            {validated.map((res) => (
              <Card
                key={res.kid_id}
                id={res.kid_id}
                image="/images/little_girl.png"
                name={`${res.kid_firstname} ${res.kid_lastname}`}
                age={res.kid_age}
                status="validées"
              />
            ))}
          </article>

          {/* Refusées */}
          <article className="bloc-refused">
            <p>Refus: {refused.length}</p>
            <h4 className="refused-c">refusées : {refused.length}</h4>
            {refused.map((res) => (
              <Card
                key={res.kid_id}
                id={res.kid_id}
                image="/images/little_girl.png"
                name={`${res.kid_firstname} ${res.kid_lastname}`}
                age={res.kid_age}
                status="refusées"
              />
            ))}
          </article>
        </section>
      </div>
      <BackButton />
    </>
  );
}

export default ReservationManagementPro;
