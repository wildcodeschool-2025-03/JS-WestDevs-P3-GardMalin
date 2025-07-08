import "./CardsCarrousel.css";

function ChildCard({ gender, name, firstname, age }: Child) {
  const imgGirl = "/images/little-girl2.png";
  const imgBoy = "/images/little-boy2.png";
  const imgElse = "/images/avatar-de-licorne.png";

  return (
    <figure className="card-carrousel">
      <img
        src={gender === "F" ? imgGirl : gender === "M" ? imgBoy : imgElse}
        alt={name}
      />
      <p>
        {firstname} <br /> {name} <br />
        {age} mois
      </p>
    </figure>
  );
}

export default ChildCard;
