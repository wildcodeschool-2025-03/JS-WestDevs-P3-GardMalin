import { Link, useNavigate } from "react-router";
import "./ParentInformation.css";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ChildCard from "../../components/ChildCard/ChildCard";
import { useAuth } from "../../services/AuthContext";

const ParentInformation = () => {
  const [parent, setParent] = useState<ParentI | null>(null);
  const [kid, setKid] = useState<KidI[]>([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/${user.id}`)
      .then((res) => res.json())
      .then((data) => setParent(data));

    fetch(`http://localhost:3310/api/kids/${user.id}`)
      .then((res) => res.json())
      .then((data) => setKid(data));
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (parent) {
      setParent({ ...parent, [name]: value });
    }
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parent),
    }).then((response) => {
      if (response.ok) {
        toast("Informations modifiées avec succès!");
      } else {
        toast("Erreur lors de la modifications");
      }
    });
  };

  const handleDelete = () => {
    if (
      !window.confirm(
        "Attention cette action est irréversible ! Souhaitez vous vraiment supprimer votre compte ? ",
      )
    )
      return;
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/${user.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        toast("Compte supprimé !");
        navigate("/");
      } else {
        toast("Erreur lors de la suppression.");
      }
    });
  };

  if (!user || !parent || !kid) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div className="parent-info-container">
      <h1>Espace parents informations</h1>
      <section className="parent-info-section">
        <div>
          <img src="/images/family.png" alt="family avatar" />
          <h2>Profil parent</h2>
        </div>
        <form onSubmit={handleUpdate}>
          <label htmlFor="parent.firstname">Prénom</label>
          <input
            id="firstname"
            name="firstname"
            value={parent.firstname}
            onChange={handleChange}
            placeholder="Exemple: Jean"
          />

          <label htmlFor="parent.lastname">Nom</label>
          <input
            id="lastname"
            name="lastname"
            value={parent.lastname}
            onChange={handleChange}
            placeholder="Exemple: Dupont"
          />

          <label htmlFor="parent.street">Rue</label>
          <input
            id="street"
            name="street"
            value={parent.street}
            onChange={handleChange}
            placeholder="Exemple: 16 Rue des acacias"
          />

          <label htmlFor="parent.city">Ville</label>
          <input
            id="city"
            name="city"
            value={parent.city}
            onChange={handleChange}
            placeholder="Exemple: La Rochelle"
          />

          <label htmlFor="parent.postal_code">Code postal</label>
          <input
            id="postal_code"
            name="postal_code"
            value={parent.postal_code}
            onChange={handleChange}
            placeholder="Exemple: 17000"
          />

          <label htmlFor="parent.phone_number">Numéro de téléphone</label>
          <input
            id="phone_number"
            name="phone_number"
            value={parent.phone_number}
            onChange={handleChange}
            placeholder="Exemple: 0836656565"
          />

          <div>
            <button type="submit">Enregistrer vos modifications</button>
            <button type="button" onClick={handleDelete}>
              Supprimer mon compte
            </button>
          </div>
        </form>
      </section>
      <section className="enfant-info-section">
        <h2>Profil(s) enfant(s)</h2>
        <article>
          {kid.map((kid) => (
            <ChildCard
              key={kid.id}
              imgSrc={
                kid.gender === "F"
                  ? "/images/little_girl.png"
                  : "/images/little_boy.png"
              }
              firstname={kid.firstname}
              lastname={kid.lastname}
              age={kid.age}
              handicap={kid.handicap}
              allergy={kid.allergy}
              walker={kid.walker}
            />
          ))}
        </article>

        <h2>Vous voulez inscrire un nouvel enfant ?</h2>
        <Link to="/registration-children">Fichier inscription</Link>
      </section>
    </div>
  );
};

export default ParentInformation;
