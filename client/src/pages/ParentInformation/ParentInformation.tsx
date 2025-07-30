import { Link, useNavigate } from "react-router";
import "./ParentInformation.css";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton/BackButton";
import ChildCard from "../../components/ChildCard/ChildCard";
import { useAuth } from "../../services/AuthContext";

const ParentInformation = () => {
  const [parent, setParent] = useState<ParentI | null>(null);
  const [kid, setKid] = useState<KidI[]>([]);
  const { user, setUser, setIsLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setParent(data));

    fetchKids();
  }, [user]);

  const fetchKids = () => {
    if (!user) return;
    fetch(`http://localhost:3310/api/kids/${user.parentId}`)
      .then((res) => res.json())
      .then((data) => setKid(data));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (parent) {
      setParent({ ...parent, [name]: value });
    }
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/${user.parentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parent),
    }).then((response) => {
      if (response.ok) {
        toast("Informations modifiées avec succès !");
      } else {
        toast("Erreur lors de la modifications");
      }
    });
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Attention cette action est irréversible ! Souhaitez vous vraiment supprimer votre compte ? ",
      )
    )
      return;
    if (!user) return;

    const response = await fetch(`http://localhost:3310/api/user/${user.id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      toast.success("Compte supprimé !");

      await fetch("http://localhost:3310/api/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
      setIsLogged(false);

      navigate("/");
    } else {
      toast.error("Erreur lors de la suppression.");
    }
  };

  if (!user || !parent || !kid) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div className="parent-info-container">
      <h1>Espace parents informations</h1>
      <section className="parent-info-section">
        <div>
          <img src="/images/family-2.png" alt="family avatar" />
          <h2>Profil parent</h2>
        </div>
        <form onSubmit={handleUpdate}>
          <label htmlFor="firstname1">Prénom</label>
          <input
            id="firstname1"
            name="firstname"
            value={parent.firstname}
            onChange={handleChange}
            placeholder="Exemple: Jean"
            required
          />

          <label htmlFor="lastname1">Nom</label>
          <input
            id="lastname1"
            name="lastname"
            value={parent.lastname}
            onChange={handleChange}
            placeholder="Exemple: Dupont"
            required
          />

          <label htmlFor="street1">Rue</label>
          <input
            id="street1"
            name="street"
            value={parent.street}
            onChange={handleChange}
            placeholder="Exemple: 16 Rue des acacias"
            required
          />

          <label htmlFor="city1">Ville</label>
          <input
            id="city1"
            name="city"
            value={parent.city}
            onChange={handleChange}
            placeholder="Exemple: La Rochelle"
            required
          />

          <label htmlFor="postal_code1">Code postal</label>
          <input
            id="postal_code1"
            name="postal_code"
            value={parent.postal_code}
            onChange={handleChange}
            placeholder="Exemple: 17000"
            required
          />

          <label htmlFor="phone_number1">Numéro de téléphone</label>
          <input
            id="phone_number1"
            name="phone_number"
            value={parent.phone_number}
            onChange={handleChange}
            placeholder="Exemple: 0836656565"
            required
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
              imgSrc={kid.gender}
              id={kid.id}
              firstname={kid.firstname}
              lastname={kid.lastname}
              age={kid.age}
              gender={kid.gender}
              handicap={kid.handicap}
              allergy={kid.allergy}
              walker={kid.walker}
              onUpdate={fetchKids}
            />
          ))}
        </article>

        <h2>Vous voulez inscrire un nouvel enfant ?</h2>
        <Link to="/registration-children">Fichier inscription</Link>
        <BackButton />
      </section>
    </div>
  );
};

export default ParentInformation;
