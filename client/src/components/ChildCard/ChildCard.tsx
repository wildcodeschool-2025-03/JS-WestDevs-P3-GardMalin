import "./ChildCard.css";

interface ChildCardProps {
  imgSrc: string;
  firstname: string;
  lastname: string;
  age: number;
  handicap: boolean;
  allergy: string;
  walker: boolean;
}

const ChildCard = ({
  imgSrc,
  firstname,
  lastname,
  age,
  handicap,
  allergy,
  walker,
}: ChildCardProps) => {
  return (
    <section className="child-card-container">
      <img src={imgSrc} alt={`Avatar de ${firstname}`} />
      <ul>
        <li>Prénom : {firstname}</li>
        <li>Nom : {lastname}</li>
        <li>Age : {age}</li>
        <li>Handicap : {handicap ? "Oui" : "Non"}</li>
        <li>Allergie : {allergy}</li>
        <li>Marchant : {walker ? "Oui" : "Non"}</li>
      </ul>
    </section>
  );
};

export default ChildCard;
