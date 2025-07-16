import { useEffect, useState } from "react";
import "./PresentationEstablishment.css";
import { useParams } from "react-router";
import BackButton from "../../components/BackButton/BackButton";
import ExpandableArticle from "../../components/ExpandableArticle/ExpandableArticle"; // adapte le chemin si besoin

function PresentationEstablishment() {
  const { id } = useParams<{ id: string }>();
  const [nursery, setNursery] = useState<Nursery | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/nurseries/${id}`)
      .then((res) => res.json())
      .then((data) => setNursery(data))
      .catch((err) => console.error("Erreur fetch nursery:", err));
  }, [id]);

  if (!nursery) return <p>Chargement...</p>;

  const image =
    nursery.id === 1
      ? "/images/establishments/les_petits_explorateurs.png"
      : nursery.id === 2
        ? "/images/establishments/les_coccinelles_joyeuses.png"
        : "/images/establishments/puzzle_et_petits_pas.png";

  return (
    <section className="presentation-establishment">
      <h1>{nursery.name}</h1>
      <section className="presentation-establishment-components">
        <article className="first-element-establishment">
          <img src={image} alt={nursery.name} className="image-nursery" />
          <section>
            <h4>Horaires et contacts</h4>
            <p>
              📅 Ouvert du lundi au vendredi <br /> 🕘 De 7h00 à 19h00 <br />📍{" "}
              {nursery.street} {nursery.city} {nursery.postal_code} <br />📞{" "}
              {nursery.phone_number} <br />
              ✉️ {nursery.mail}
            </p>
          </section>
        </article>
        <section className="second-element-establishment">
          <ExpandableArticle title="Présentation générale">
            <h3>Présentation générale</h3>
            <p>
              Bienvenue à "{nursery.name}", une crèche chaleureuse et innovante
              située en plein cœur d'un quartier verdoyant et familial. Notre
              structure accueille les enfants de 3 mois à 3 ans, dans un
              environnement sécurisé, stimulant et bienveillant, propice à
              l'éveil et au développement de chacun.
              <br />À "{nursery.name}", nous croyons en l'importance de
              l'accompagnement individualisé. Notre équipe de professionnels de
              la petite enfance œuvre chaque jour pour offrir un cadre
              rassurant, ludique et éducatif, où chaque enfant peut s'épanouir à
              son rythme.
            </p>
          </ExpandableArticle>
          <ExpandableArticle title="Notre mission">
            <h3>Notre mission</h3>
            <p>
              Notre mission est simple : favoriser l'éveil, l'autonomie et la
              socialisation des tout-petits grâce à un projet pédagogique riche
              et évolutif. Nous mettons un point d'honneur à collaborer avec les
              familles, dans une relation de confiance, de respect et d'écoute.
            </p>
          </ExpandableArticle>
          <ExpandableArticle title="Nos atouts">
            <h3>Nos atouts</h3>
            <p>
              • 🌿 Espaces d'éveil thématiques : coin nature, salle de
              motricité, bibliothèque enfantine, atelier sensoriel… <br /> • 👶
              Accueil personnalisé : adaptation progressive, respect des rythmes
              de chaque enfant. <br /> • 👩‍🏫 Équipe qualifiée et bienveillante
              : éducateurs, auxiliaires de puériculture, psychomotricienne.{" "}
              <br /> • 🥗 Repas bio et équilibrés préparés sur place, en
              respectant les régimes spécifiques. <br />• 🎨 Activités variées :
              ateliers créatifs, musique, jardinage, sorties nature…
            </p>
          </ExpandableArticle>
        </section>
      </section>
      <BackButton />
    </section>
  );
}

export default PresentationEstablishment;
