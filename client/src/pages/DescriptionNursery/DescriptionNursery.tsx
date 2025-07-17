import { type ChangeEvent, useState } from "react";
import "./DescriptionNursery.css";
import BackButton from "../../components/BackButton/BackButton";

function DescriptionNursery() {
  const [filePicture, setFilePicture] = useState("Aucun fichier sélectionné");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFilePicture(e.target.files[0].name);
    } else {
      setFilePicture("Aucun fichier sélectionné");
    }
  };

  return (
    <main className="description-nursery-page">
      <section>
        <article className="logo-registration-parents">
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </article>
        <article>
          <h1>Description de votre établissement</h1>
        </article>

        <form className="form-description">
          <article className="reception-nursery-checkbox">
            <label htmlFor="description" hidden>
              Description
            </label>
            <input
              id="description"
              type="text"
              placeholder="Décrivez votre établisessement"
            />
            <label htmlFor="tasks" hidden>
              Missions
            </label>
            <input
              id="tasks"
              type="text"
              placeholder="Présentez la ou les missions de votre établissement"
            />

            <p>Accueil </p>
            <label htmlFor="reception-one">
              <input id="reception-one" type="checkbox" />
              Espace extérieur / jardin
            </label>
            <label htmlFor="reception-two">
              <input id="reception-two" type="checkbox" />
              Sortie extérieures
            </label>

            <p>Activités </p>
            <label htmlFor="activity-one">
              <input id="activity-one" type="checkbox" />
              Promenades
            </label>
            <label htmlFor="activity-two">
              <input id="activity-two" type="checkbox" />
              Activités d"éveil
            </label>
            <label htmlFor="activity-three">
              <input id="activity-three" type="checkbox" />
              Atelier musique
            </label>
            <label htmlFor="activity-four">
              <input id="activity-four" type="checkbox" />
              Activité artistique
            </label>
            <label htmlFor="activity-five">
              <input id="activity-five" type="checkbox" />
              Bibliothèque / Ludothèque
            </label>
          </article>
          <article className="nursery-checkbox-two">
            <p>Les horaires et les jours d'ouverture</p>
            <label htmlFor="day-one">
              <input id="day-one" type="checkbox" />
              Lundi
            </label>
            <label htmlFor="day-two">
              <input id="day-two" type="checkbox" />
              Mardi
            </label>
            <label htmlFor="day-three">
              <input id="day-three" type="checkbox" />
              Mercredi
            </label>
            <label htmlFor="day-four">
              <input id="day-four" type="checkbox" />
              Jeudi
            </label>
            <label htmlFor="day-five">
              <input id="day-five" type="checkbox" />
              Vendredi
            </label>
            <p>Choissisez votre horaire d'ouverture</p>
            <label htmlFor="hour-morning" hidden>
              Choissisez votre horaire d'ouverture
            </label>

            <input
              id="hour-morning"
              type="time"
              name="appt"
              min="07:00"
              max="19:00"
              required
            />
            <p>Choissisez votre horaire de fermeture</p>
            <label htmlFor="hour-morning" hidden>
              Choissisez votre horaire de fermeture
            </label>

            <input
              id="hour-morning"
              type="time"
              name="appt"
              min="07:00"
              max="19:00"
              required
            />

            <label
              htmlFor="description-nursery-file"
              className="custom-file-nursery"
            >
              Mettez une photos de votre établisemment en format PNG/JPEG
            </label>
            <span className="file-picture">{filePicture}</span>
            <input
              id="description-nursery-file"
              type="file"
              name="livretPdf"
              accept="application/pdf"
              onChange={handleFileChange}
              hidden
            />
          </article>

          <button type="submit">Validez</button>
        </form>
        <h5>
          * Les champs non renseignés pourront être remplis ultérieurement.😉
        </h5>
        <BackButton />
      </section>
    </main>
  );
}

export default DescriptionNursery;
