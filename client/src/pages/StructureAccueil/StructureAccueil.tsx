import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./StructureAccueil.css";
import { Link } from "react-router";
import Carrousel from "../../components/Carrousel/Carrousel";

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
  const [selectedNurseryIndex, setSelectedNurseryIndex] = useState(0);
  const [selectedNursery, setSelectedNursery] = useState<Nursery | undefined>(
    undefined,
  );
  const [reservationDate, setReservationDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );

  useEffect(() => {
    if (searchEstablishment.length) {
      setSelectedNursery(searchEstablishment[selectedNurseryIndex]);
    } else {
      setSelectedNursery(undefined);
    }
  }, [searchEstablishment, selectedNurseryIndex]);

  return (
    <main className="structure-accueil">
      <h1>Choisissez ici votre structure d'accueil !</h1>
      <section className="type-of-reception">
        <h3>Quel type d'accueil souhaitez-vous ?</h3>
        <section className="type-of-reception-choice">
          <input type="radio" id="nusery" name="select" value="nursery" />
          <label htmlFor="nursery">Crèche</label>

          <input
            type="radio"
            id="childminder"
            name="select"
            value="childminder"
          />
          <label htmlFor="childminder">Assistante maternelle</label>
        </section>

        <section className="period-reservation">
          <label>
            Date de votre réservation souhaitée :
            <input
              type="date"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.currentTarget.value)}
            />
          </label>
        </section>
        <SearchBar
          setSearchEstablishment={setSearchEstablishment}
          searchEstablishment={searchEstablishment}
          reservationDate={reservationDate}
        />
      </section>
      <section className="child-selected">
        <h3>Sélectionner l'enfant concerné par cette réservation : </h3>
        <Carrousel />
      </section>
      {selectedNursery && (
        <section className="selected-nursery">
          <button
            type="button"
            onClick={() => {
              setSelectedNurseryIndex((current) => {
                const nextIndex = current > 0 ? current - 1 : current;
                return nextIndex;
              });
            }}
          >
            Voir établissement précédent
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedNurseryIndex((current) => {
                const nextIndex =
                  current < searchEstablishment.length - 1
                    ? current + 1
                    : current;
                return nextIndex;
              });
            }}
          >
            Voir établissement suivant
          </button>
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
        <button type="submit">Confirmer ma réservation</button>
      </section>
    </main>
  );
}

export default StructureAccueil;
