import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./StructureAccueil.css";
import { Link } from "react-router";

interface Nursery {
  name: string;
  postal_code: string;
  city: string;
  street: string;
  phone_number: string;
  mail: string;
  id: number;
}

function StructureAccueil() {
  const [searchEstablishment, setSearchEstablishment] = useState([]);
  const [selectedNurseryIndex] = useState(0);
  const [selectedNursery, setSelectedNursery] = useState<Nursery | undefined>(
    undefined,
  );

  useEffect(() => {
    if (searchEstablishment.length) {
      setSelectedNursery(searchEstablishment[selectedNurseryIndex]);
    }
  }, [searchEstablishment, selectedNurseryIndex]);

  // useEffect(() => {
  //   fetch("http://localhost:3310/api/reservation")
  //     .then((res) => res.json())
  //     .then((responseData) => {
  //       setSelectedNurseryIndex(responseData);
  //     });
  // }, []);

  return (
    <main className="structure-accueil">
      <h1>Choisissez ici votre structure d'accueil !</h1>
      <section className="type-of-reception">
        <h3>Quel type d'accueil souhaitez-vous ?</h3>
        <section className="type-of-reception-choice">
          <input type="checkbox" id="nursery" name="select" value="nursery" />
          <label htmlFor="nursery">Crèche</label>

          <input
            type="checkbox"
            id="childminder"
            name="select"
            value="childminder"
          />
          <label htmlFor="childminder">Assistante maternelle</label>
        </section>

        <section className="period-reservation">
          <label>
            Date de votre réservation souhaitée : <input type="date" />
          </label>
        </section>
        <SearchBar
          setSearchEstablishment={setSearchEstablishment}
          searchEstablishment={searchEstablishment}
        />
      </section>
      {selectedNursery && (
        <section className="selected-nursery">
          <button type="button">Voir établissement suivant</button>
          <h3>Crèche sélectionnée</h3>
          <section className="coordinate">
            <h4>Horaires et contacts</h4>
            <p>
              📅 Ouvert du lundi au vendredi <br /> 🕘 De 7h00 à 19h00 <br />📍{" "}
              {selectedNursery.street} {selectedNursery.city}{" "}
              {selectedNursery.postal_code} <br />📞{" "}
              {selectedNursery.phone_number} <br />
              ✉️ {selectedNursery.mail}
            </p>
          </section>
          <section className="presentation-of-the-establishment">
            <h4>Présentation de l'établissement</h4>
            <p>
              Bienvenue dans notre établissement {selectedNursery.name}, une
              crèche chaleureuse et innovante située en plein cœur d'un quartier
              verdoyant et familial. Notre structure accueille les enfants de 3
              mois à 3 ans, dans un environnement sécurisé, stimulant et
              bienveillant, propice à l'éveil et au développement de chacun.
            </p>
          </section>
        </section>
      )}

      <section className="button-section">
        <button type="button">Tarifs</button>
        <Link to="/establishment-presentation">Voir l'établissement</Link>
        <Link to="/reservation">Faire ma réservation</Link>
      </section>
    </main>
  );
}

export default StructureAccueil;
