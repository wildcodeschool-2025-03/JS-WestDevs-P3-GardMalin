import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./StructureAccueil.css";
import { Popover } from "@base-ui-components/react/popover";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton/BackButton";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useAuth } from "../../services/AuthContext";

interface Nursery {
  name: string;
  postal_code: string;
  city: string;
  street: string;
  phone_number: string;
  mail: string;
  id: number;
}

function TicketIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="ticketIconTitle"
      role="img"
      {...props}
    >
      <title id="ticketIconTitle">Ticket icon with dollar symbol</title>
      <rect
        x="0"
        y="0"
        width="180"
        height="100"
        rx="15"
        ry="15"
        fill="#FFF3E0"
        stroke="#FB8C00"
        strokeWidth="4"
      />
      <circle cx="40" cy="50" r="12" fill="#FB8C00" opacity="0.6" />
      <circle cx="140" cy="50" r="12" fill="#FB8C00" opacity="0.6" />
      <text
        x="75"
        y="72"
        fontSize="48"
        fontWeight="bold"
        fill="#FB8C00"
        fontFamily="Arial, sans-serif"
      >
        $
      </text>
    </svg>
  );
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
  const [selectedKid, setSelectedKid] = useState<Kid | null>(null);
  const [reservation, setReservation] = useState<ReservationRecap | null>(null);

  useEffect(() => {
    if (searchEstablishment.length) {
      setSelectedNursery(searchEstablishment[selectedNurseryIndex]);
    } else {
      setSelectedNursery(undefined);
    }
  }, [searchEstablishment, selectedNurseryIndex]);

  const navigate = useNavigate();

  const handleReservationSubmit = async () => {
    if (!selectedNursery) {
      alert("Veuillez sélectionner une crèche.");
      return;
    }

    if (!selectedKid) {
      alert("Veuillez sélectionner un enfant.");
      return;
    }

    if (!user) {
      toast.error("Vous devez être connecté pour faire une réservation");
      return;
    }

    if (reservation && reservation.date === reservationDate) {
      toast.warning("Vous avez déjà une réservation à cette date.");
      return;
    }

    const reservationData = {
      date: reservationDate,
      nursery_id: selectedNursery.id,
      kid_id: selectedKid.id,
      is_validated: false,
    };

    try {
      const response = await fetch(
        "http://localhost:3310/api/reservationstwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la réservation");
      }

      setReservation({
        date: reservationDate,
        nursery: selectedNursery,
        kid: selectedKid,
      });
      toast.success("Réservation confirmée !");
      navigate("/confirmation-demande-reservation");
    } catch (error) {
      alert("Erreur lors de la réservation.");
    }
  };

  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/reservations/by-user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setReservation(data));
  }, [user]);

  return (
    <section className="structure-accueil">
      <h1>Choisissez ici votre structure d'accueil !</h1>
      <section className="section-on-the-top">
        <section className="type-of-reception">
          <h3>Quel type d'accueil souhaitez-vous ?</h3>
          <section className="type-of-reception-choice">
            <input type="radio" id="nursery" name="select" value="nursery" />
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
          <Carrousel onKidSelect={(kid) => setSelectedKid(kid ?? null)} />
        </section>
      </section>
      {selectedNursery && (
        <section className="selected-nursery">
          <h3>Crèche sélectionnée</h3>
          <section className="buttons-section-travel">
            <button
              className="nav-button precedent-button"
              type="button"
              onClick={() => {
                setSelectedNurseryIndex((current) => {
                  const nextIndex = current > 0 ? current - 1 : current;
                  return nextIndex;
                });
              }}
            >
              <img src="/images/fleche-gauche (1).png" alt="precedent-button" />
            </button>
            <button
              className="nav-button next-button"
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
              <img src="/images/fleche-droite.png" alt="next-button" />
            </button>
          </section>
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
          <section className="popup-section">
            <Popover.Root>
              <Popover.Trigger className="styles-iconButton">
                <TicketIcon
                  aria-label="Notifications"
                  className="styles-icon"
                />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Positioner sideOffset={8}>
                  <Popover.Popup className="styles-popup">
                    <Popover.Title className="styles-title">
                      Nos tarifs
                    </Popover.Title>
                    <Popover.Description className="styles-description">
                      <article>
                        <h4>Tranche de revenus mensuels </h4>
                        <p>
                          Moins de 800 € <br />
                          800 € – 1 200 €<br />1 200 € – 1 800 €<br />1 800 € –
                          2 500 €<br />2 500 € – 3 500 €<br />3 500 € – 5 000 €
                          <br />
                          Plus de 5 000 €<br />
                          Forfait occasionnel (1 jour)
                        </p>
                      </article>
                      <article>
                        <h4>Tarif journalier par enfant</h4>
                        <p>
                          3,00 €<br />
                          5,50 €<br />
                          8,00 €<br />
                          11,00 €<br />
                          15,00 €<br />
                          18,00 €<br />
                          22,00 €<br />
                          25,00 €
                        </p>
                      </article>
                      <section>
                        <p>
                          <h5>Note :</h5> Ces tarifs incluent l'accueil, les
                          repas, les soins et les activités d'éveil. Une
                          majoration de 10% peut s'appliquer en cas d'accueil
                          exceptionnel (au-delà des horaires définis). <br />
                          <h5>Note :</h5> Toute facturation sera traité avec
                          l'établissement directement et non par le biais de la
                          plateforme. <br />
                          Merci de votre compréhension.
                        </p>
                      </section>
                    </Popover.Description>
                  </Popover.Popup>
                </Popover.Positioner>
              </Popover.Portal>
            </Popover.Root>
          </section>
          <section className="group-buttons-reservation">
            <Link
              to={`/establishment/${selectedNursery.id}`}
              className="link-to-establishment"
            >
              Voir l'établissement
            </Link>
            <button
              type="submit"
              className="button-reservation"
              onClick={handleReservationSubmit}
            >
              Confirmer ma réservation
            </button>
          </section>
        </section>
      )}
      <BackButton />
    </section>
  );
}

export default StructureAccueil;
