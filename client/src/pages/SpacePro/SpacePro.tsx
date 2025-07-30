import { Link } from "react-router";
import "./SpacePro.css";
import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import { useAuth } from "../../services/AuthContext";

const SpacePro = () => {
  const [nursery, setNursery] = useState<Nursery | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/nurseries/by-user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setNursery(data));
  }, [user]);

  if (!user || !nursery) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div className="space-pro-container">
      <header>
        <h1>Espace pro</h1>
        <h2>{nursery.name}</h2>
      </header>
      <Link to="/reservation-management-pro">Accès au planning</Link>
      <Link to="/description-nursery">Modifier mes renseignements</Link>
      <section>
        <article>
          <h2>Ma présentation</h2>
          <p>{nursery.description}</p>
        </article>
        <h2>Mes coordonnées</h2>
        <article>
          <p>
            📍 {nursery.street}, {nursery.postal_code} {nursery.city} <br />📞{" "}
            {nursery.phone_number} <br />
            ✉️ {user.email}
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>Nos atouts</h2>
          <ul>
            <li>
              🌿 Espaces d’éveil thématiques : coin nature, salle de motricité,
              bibliothèque enfantine, atelier sensoriel…
            </li>
            <li>
              👶 Accueil personnalisé : adaptation progressive, respect des
              rythmes de chaque enfant.
            </li>
          </ul>
        </article>
        <article>
          <h2>Mes horaires</h2>
          <ul>
            <li>Lundi : 7h00 - 19h00</li>
            <li>Mardi : 7h00 - 19h00</li>
            <li>Mercredi : 7h00 - 18h00</li>
            <li>Jeudi : 7h00 - 19h00</li>
            <li>Vendredi : 7h00 - 18h00</li>
          </ul>
        </article>
      </section>
      <BackButton />
    </div>
  );
};

export default SpacePro;
