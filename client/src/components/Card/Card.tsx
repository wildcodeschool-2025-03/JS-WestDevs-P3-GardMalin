import "./Card.css";

function Card({ id, image, name, age, status }: CardProps) {
  return (
    <figure className="figure-card">
      <h3>Demande n°{id}</h3>
      <img src={image} alt="child" />
      <strong>{name}</strong>
      <p>Âge : {age}</p>
      <p>Status : {status}</p>
    </figure>
  );
}

export default Card;
