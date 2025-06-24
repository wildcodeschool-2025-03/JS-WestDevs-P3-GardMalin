import { Link } from "react-router";
import "./ParentInformation.css";
import { useEffect, useState } from "react";

interface ParentProps {
  id: number;
  firstname: string;
}

interface KidsProps {
  id: number;
  firstname: string;
}

const ParentInformation = () => {
  const [parents, setParents] = useState<ParentProps[]>([]);
  const [kids, setKids] = useState<KidsProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/parents")
      .then((res) => res.json())
      .then((data) => setParents(data));
    console.warn(parents);

    fetch("http://localhost:3310/api/kids")
      .then((res) => res.json())
      .then((data) => setKids(data));
  }, []);

  return (
    <main className="parent-info-container">
      <h1>Espace parents informations</h1>
      <section className="parent-info-section-1">
        <img src="/images/family.png" alt="family avatar" />
        <h2>Profil parent</h2>
        <ul>
          {parents.map((parent) => (
            <li key={parent.id}>{parent.firstname}</li>
          ))}
        </ul>
      </section>
      <section className="parent-info-section-2">
        <h2>Profil(s) enfant(s)</h2>
        <article>
          <img src="/images/little_girl.png" alt="avatar of a girl" />
          <ul>
            {kids.map((kid) => (
              <li key={kid.id}>{kid.firstname}</li>
            ))}
          </ul>
        </article>
        <article>
          <img src="/images/little_boy.png" alt="avatar of a boy" />
        </article>
      </section>
      <h2>Vous voulez inscrire un nouvel enfant ?</h2>
      <Link to="/">Fichier inscription</Link>
    </main>
  );
};

export default ParentInformation;
