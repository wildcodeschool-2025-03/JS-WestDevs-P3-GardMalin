import { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./ReservationManagementPro.css";

const ReservationManagementPro: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
            <div>
              <p>Liste des inscriptions validées</p>
            </div>
            <p>Places disponibles: ../10</p>
            <div>
              <p>Demandes de réservation : 4</p>
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
