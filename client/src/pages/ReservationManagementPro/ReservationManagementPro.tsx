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
    <section className="reservation-pro-management">
      <h1>Gestion des réservations</h1>
      <div className="reservation-container">
        <p>
          <strong>Date sélectionnée :</strong>{" "}
          {format(selectedDate, "dd-MM-yyyy")}
        </p>

        <Calendar
          date={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale={fr}
        />
      </div>

      <div className="availability-container">
        <p>
          <strong>Date sélectionnée :</strong>{" "}
          {format(selectedDate, "dd-MM-yyyy")}
        </p>

        <Calendar
          date={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          locale={fr}
        />
      </div>
    </section>
  );
};

export default ReservationManagementPro;
