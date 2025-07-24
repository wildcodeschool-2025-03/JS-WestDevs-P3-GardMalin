interface ReservationProps {
  date: string;
  kid_firstname: string;
  nursery_name: string;
}

function ReservationCard({
  kid_firstname,
  nursery_name,
  date,
}: ReservationProps) {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR");
  return (
    <section className="child-card-container">
      <article className="reservation-bloc">
        <p>{kid_firstname}</p>
        <p>{nursery_name}</p>
        <p>{formattedDate}</p>
      </article>
    </section>
  );
}

export default ReservationCard;
