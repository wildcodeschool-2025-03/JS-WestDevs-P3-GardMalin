import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./ChildCard.css";
import { toast } from "react-toastify";

const ChildCard = ({
  id,
  firstname,
  lastname,
  age,
  gender,
  handicap,
  allergy,
  walker,
  onUpdate,
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "handicap" || name === "walker") {
      setKid({ ...kid, [name]: value === "true" });
    } else {
      setKid({
        ...kid,
        [name]: value,
      });
    }
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://localhost:3310/api/kids/${kid.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kid),
    }).then((res) => {
      if (res.ok) {
        toast.success("Informations modifiées avec succès !");
        if (onUpdate) onUpdate();
      } else {
        toast.error("Erreur lors de la modification");
      }
    });
  };

  const handleDelete = () => {
    if (
      !window.confirm(
        "Cette action est irréversible. Souhaitez-vous vraiment supprimer ce profil ?",
      )
    )
      return;

    fetch(`http://localhost:3310/api/kids/${kid.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        toast.success("Profil de l'enfant supprimé !");
        if (onUpdate) onUpdate();
      } else {
        toast.error("Erreur lors de la suppression.");
      }
    });
  };

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
          required
        />

        <label htmlFor="lastname2">Nom</label>
        <input
          id="lastname2"
          name="lastname"
          value={kid.lastname}
          onChange={handleChange}
          placeholder="Exemple: Dupont"
          required
        />

        <label htmlFor="age2">Âge (en mois)</label>
        <input
          id="age2"
          name="age"
          value={kid.age}
          onChange={handleChange}
          placeholder="Exemple: 12"
          type="number"
          required
        />

        <label htmlFor="gender2">Genre</label>
        <select
          id="gender2"
          name="gender"
          value={kid.gender}
          onChange={handleChange}
          required
        >
          <option value="">-- Sélectionner --</option>
          <option value="M">Garçon</option>
          <option value="F">Fille</option>
        </select>

        <label htmlFor="handicap1">Handicap</label>
        <select
          id="handicap1"
          name="handicap"
          value={String(kid.handicap)}
          onChange={handleChange}
          required
        >
          <option value="">-- Sélectionner --</option>
          <option value="true">Oui</option>
          <option value="false">non</option>
        </select>

        <label htmlFor="allergy1">Allergie</label>
        <input
          id="allergy1"
          name="allergy"
          value={kid.allergy}
          onChange={handleChange}
          placeholder="Exemple: Arachides"
        />

        <label htmlFor="walker1">Marchant</label>
        <select
          id="walker1"
          name="walker"
          value={String(kid.walker)}
          onChange={handleChange}
          required
        >
          <option value="">-- Sélectionner --</option>
          <option value="true">Oui</option>
          <option value="false">non</option>
        </select>

        <div className="child-card-buttons">
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
