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
    <div className="page-reservation-pro-management">
      <section>
        <h1>Votre plannig de réservations</h1>
        <article>
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

      <section>
        <h1>Informations planning</h1>
        <article>
          <p>Date : 03-07-2025</p>
          <div>
            <p>Liste des inscriptions validées</p>
          </div>
          <p>Places disponibles: ../10</p>
          <div>
            <p>Demandes de réservation : 4</p>
          </div>
        </article>
        <button className="valid-reservation" type="submit">
          Confirmation
        </button>
      </section>
    </div>
  );
};

export default ReservationManagementPro;
