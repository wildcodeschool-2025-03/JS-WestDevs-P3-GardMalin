import "./CardsCarrousel.css";

function ChildCard({ gender, name, firstname, age }: Child) {
  const imgGirl = "/images/little_girl.png";
  const imgBoy = "/images/little_boy.png";
  const imgElse =
    "/images/avatar-de-licorne-mythique-3d-avec-des-yeux-de-dessin-anime-removebg-preview.png";

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
