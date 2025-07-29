import "./Card.css";
import { useState } from "react";

function Card({ id, image, name, age, status, onAction }: CardProps) {
  const [selectedAction, setSelectedAction] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAction === "yes" || selectedAction === "no") {
      onAction?.(id, selectedAction as "yes" | "no");
    }
  };

  return (
    <figure className="figure-card">
      <h3>Demande n°{id}</h3>
      <img src={image} alt="child" />
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
