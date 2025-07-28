import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./ChildCard.css";
import { toast } from "react-toastify";

const ChildCard = ({
  id,
  imgSrc,
  firstname,
  lastname,
  age,
  gender,
  handicap,
  allergy,
  walker,
}: ChildCardProps) => {
  const [kid, setKid] = useState<KidI>({
    id,
    firstname,
    lastname,
    age,
    gender,
    handicap,
    allergy,
    walker,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (e.target instanceof HTMLInputElement && type === "checkbox") {
      setKid({ ...kid, [name]: e.target.checked });
    } else {
      setKid({ ...kid, [name]: value });
    }
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!kid) return;
    fetch(`http://localhost:3310/api/kids/${kid.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kid),
    }).then((response) => {
      if (response.ok) {
        toast("Informations modifiées avec succès !");
      } else {
        toast("Erreur lors de la modification");
      }
    });
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Attention cette action est irréversible ! Souhaitez vous vraiment supprimer le profil de cet enfant ? ",
      )
    )
      return;
    if (!kid) return;

    const response = await fetch(`http://localhost:3310/api/kids/${kid.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast.success("Profil de l'enfant supprimé !");
    } else {
      toast.error("Erreur lors de la suppression.");
    }
  };

  if (!kid) <p>Chargement en cours</p>;

  return (
    <section className="child-card-container">
      <img src={imgSrc} alt={`Avatar de ${firstname}`} />
      <form onSubmit={handleUpdate}>
        <label htmlFor="firstname2">Prénom</label>
        <input
          id="firstname2"
          name="firstname"
          value={kid.firstname}
          onChange={handleChange}
          placeholder="Exemple: Jean"
        />

        <label htmlFor="lastname2">Nom</label>
        <input
          id="lastname2"
          name="lastname"
          value={kid.lastname}
          onChange={handleChange}
          placeholder="Exemple: Dupont"
        />

        <label htmlFor="age2">Age (en mois)</label>
        <input
          id="age2"
          name="age"
          value={kid.age}
          onChange={handleChange}
          placeholder="Exemple: 12"
        />

        <label htmlFor="gender2">Genre</label>
        <select
          id="gender2"
          name="gender"
          value={kid.gender}
          onChange={handleChange}
        >
          <option value="">-- Sélectionner --</option>
          <option value="M">Garçon</option>
          <option value="F">Fille</option>
        </select>

        <label htmlFor="handicap2">
          Handicap :
          <input
            type="checkbox"
            id="handicap2"
            name="handicap"
            checked={kid.handicap}
            onChange={handleChange}
          />
          {kid?.handicap ? "Oui" : "Non"}
        </label>

        <label htmlFor="allergy1">Allergie</label>
        <input
          id="allergy1"
          name="allergy"
          value={kid.allergy}
          onChange={handleChange}
          placeholder="Exemple: Arachides"
        />

        <label htmlFor="walker1">
          Marchant :
          <input
            type="checkbox"
            id="walker1"
            name="walker"
            checked={kid.walker}
            onChange={handleChange}
          />
          {kid?.walker ? "Oui" : "Non"}
        </label>

        <div>
          <button type="submit">Enregistrer les modifications</button>
          <button type="button" onClick={handleDelete}>
            Supprimer le profil de l'enfant
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChildCard;
