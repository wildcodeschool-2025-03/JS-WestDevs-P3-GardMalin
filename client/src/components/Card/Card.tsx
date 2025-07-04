import "./Card.css";

function Card({ image, name, age }: CardProps) {
  return (
    <figure className="figure-card">
      <h3>Demande n°{"??"}</h3>
      <img src={image} alt="child" />
      <strong>{name}</strong>
      <p>{age}</p>
      <p>Status de la demande</p>

      <article className="status">
        <div>
          <label htmlFor="text">
            <h3>Status de la demande</h3>
          </label>
        </div>
        <input type="radio" id="yes" value="yes" name="done" />
        <label htmlFor="yes">Oui</label>
        <input type="radio" id="no" value="no" name="done" />
        <label htmlFor="no">Non</label>
      </article>
    </figure>
  );
}

export default Card;
