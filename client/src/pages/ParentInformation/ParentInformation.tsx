import { Link } from "react-router";
import "./ParentInformation.css";
import { useEffect, useState } from "react";
import ChildCard from "../../components/ChildCard/ChildCard";
import { useAuth } from "../../services/AuthContext";

const ParentInformation = () => {
  const [parent, setParent] = useState<ParentI | null>(null);
  const [kid, setKid] = useState<KidI[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/${user.id}`)
      .then((res) => res.json())
      .then((data) => setParent(data));

    fetch(`http://localhost:3310/api/kids/${user.id}`)
      .then((res) => res.json())
      .then((data) => setKid(data));
  }, [user]);

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
        <ul>
          <li>Prénom : {parent.firstname}</li>
          <li>Nom : {parent.lastname}</li>
          <li>Adresse : {parent.street}</li>
          <li>Ville : {parent.city}</li>
          <li>Téléphone : {parent.phone_number}</li>
        </ul>
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
