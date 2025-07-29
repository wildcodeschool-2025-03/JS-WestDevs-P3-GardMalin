import "./ReservationCard.css";

interface ReservationProps {
  date: string;
  kid_firstname?: string;
  nursery_name: string;
}

function ReservationCard({
  kid_firstname,
  nursery_name,
  date,
}: ReservationProps) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR");
  return (
    <section className="child-reservation-card-container">
      <article className="reservation-bloc">
        <p>
          <strong>{kid_firstname}</strong>
        </p>
        <p>{nursery_name}</p>
        <p>{formattedDate}</p>
      </article>
    </section>
  );
}

export default ReservationCard;
