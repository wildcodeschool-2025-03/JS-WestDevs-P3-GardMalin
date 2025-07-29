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
            formatDate(r.date) === formattedSelectedDate &&
            r.is_validated === -1,
        );
        setRefused(refusedRequests);
      });
  }, [formattedSelectedDate, user?.id, user?.nurserieId]);

  const handleAction = (kidId: number, action: "yes" | "no") => {
    if (kidId === undefined || kidId === null) {
      console.error("handleAction appelé avec un kidId invalide :", kidId);
      return;
    }

    const reservation = pending.find((r) => r.kid_id === kidId);
    if (!reservation) return;

    setPending((prev) => prev.filter((r) => r.kid_id !== kidId));

    if (action === "yes") {
      setValidated((prev) => [...prev, { ...reservation, is_validated: 1 }]);
    } else {
      setRefused((prev) => [...prev, { ...reservation, is_validated: -1 }]);
    }

    fetch(`http://localhost:3310/api/reservations/${kidId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        is_validated: action === "yes" ? 1 : -1,
        date: formattedSelectedDate,
        nursery_id: user?.nurserieId,
      }),
    }).catch((err) => console.error("Erreur lors de la mise à jour :", err));
  };

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

            {pending.map((pending) => (
              <Card
                key={pending.kid_id}
                id={pending.kid_id}
                image="/images/little_girl.png"
                name={`${pending.kid_firstname} ${pending.kid_lastname}`}
                age={pending.kid_age}
                status="en attente"
                onAction={handleAction}
              />
            ))}
          </article>

          {/* Validées */}
          <article className="bloc-validated">
            <p>
              Places disponibles: {validated.length}/{nurseryCapacity}
            </p>
            <h4 className="validated-c">validées : {validated.length}</h4>
            {validated.map((validated) => (
              <Card
                key={validated.kid_id}
                id={validated.kid_id}
                image="/images/little_girl.png"
                name={`${validated.kid_firstname} ${validated.kid_lastname}`}
                age={validated.kid_age}
                status="validées"
              />
            ))}
          </article>

          {/* Refusées */}
          <article className="bloc-refused">
            <p>Refus: {refused.length}</p>
            <h4 className="refused-c">refusées : {refused.length}</h4>
            {refused.map((refused) => (
              <Card
                key={refused.kid_id}
                id={refused.kid_id}
                image="/images/little_girl.png"
                name={`${refused.kid_firstname} ${refused.kid_lastname}`}
                age={refused.kid_age}
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
