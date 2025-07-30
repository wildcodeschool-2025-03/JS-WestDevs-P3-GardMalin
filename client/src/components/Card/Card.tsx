import "./Card.css";
import { useState } from "react";

function Card({ id, name, age, status, onAction, gender }: CardProps) {
  const [selectedAction, setSelectedAction] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAction === "yes" || selectedAction === "no") {
      onAction?.(id, selectedAction as "yes" | "no");
    }
  };

  const imgGirl = [
    "/images/little-girl/little-girl2.png",
    "/images/little-girl/little-girl3.png",
    "/images/little-girl/little-girl4.png",
    "/images/little-girl/little-girl5.png",
    "/images/little-girl/little-girl6.png",
    "/images/little-girl/little-girl7.png",
    "/images/little-girl/little-girl8.png",
    "/images/little-girl/little-girl-9.png",
    "/images/little-girl/little-girl10.png",
    "/images/little-girl/little-girl11.png",
    "/images/little-girl/little-girl12.png",
    "/images/little-girl/little-girl13.png",
  ];

  const imgBoy = [
    "/images/little-boy/little-boy2.png",
    "/images/little-boy/little-boy3.png",
    "/images/little-boy/little-boy4.png",
    "/images/little-boy/little-boy5.png",
    "/images/little-boy/little-boy6.png",
    "/images/little-boy/little-boy6.png",
    "/images/little-boy/little-boy7.png",
    "/images/little-boy/little-boy8.png",
    "/images/little-boy/little-boy9.png",
  ];

  const imgElse = "/images/avatar-de-licorne.png";

  const getRandomImage = (images: string[]) =>
    images[Math.floor(Math.random() * images.length)];

  const imgSrc =
    gender === "F"
      ? getRandomImage(imgGirl)
      : gender === "M"
        ? getRandomImage(imgBoy)
        : imgElse;

  return (
    <figure className="figure-card">
      <h3>Demande n°{id}</h3>
      <img src={imgSrc} alt="child" />
      <strong>{name}</strong>
      <p>Âge : {age}</p>
      <p>Status : {status}</p>

      {status === "en attente" && (
        <form className="card-actions" onSubmit={handleSubmit}>
          <label>
            <input
              type="radio"
              name={`validation-${id}`}
              value="yes"
              checked={selectedAction === "yes"}
              onChange={() => setSelectedAction("yes")}
            />
            Oui
          </label>

          <label>
            <input
              type="radio"
              name={`validation-${id}`}
              value="no"
              checked={selectedAction === "no"}
              onChange={() => setSelectedAction("no")}
            />
            Non
          </label>

          <button
            type="submit"
            className="btn-submit"
            disabled={!selectedAction}
          >
            {selectedAction === "yes"
              ? "Valider"
              : selectedAction === "no"
                ? "Refuser"
                : "OK"}
          </button>
        </form>
      )}
    </figure>
  );
}

export default Card;
