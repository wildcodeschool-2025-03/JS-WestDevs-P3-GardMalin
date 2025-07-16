import { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import "./RegistrationChildrenPage.css";

function RegistrationChildrenPage() {
  const [formData, setFormData] = useState({
    gender: "",
    firstname: "",
    lastname: "",
    age: "",
    walker: false,
    allergies: "",
    handicap: false,
    parent_id: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target;

    if (type === "radio") {
      if (id === "girl" || id === "man") {
        setFormData({ ...formData, gender: id });
      } else if (id === "yes") {
        setFormData({ ...formData, handicap: true });
      } else if (id === "no") {
        setFormData({ ...formData, handicap: false });
      } else if (id === "yes2") {
        setFormData({ ...formData, walker: true });
      } else if (id === "no2") {
        setFormData({ ...formData, walker: false });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3310/api/kids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Enfant inscrit avec succès !");
    } else {
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="page-registration-children">
      <section className="header-registration-children">
        <h1>Inscription de l'enfant</h1>
      </section>

      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <article className="gender">
            <div>
              <label htmlFor="text">Sexe de l'enfant</label>
            </div>
            <label htmlFor="girl">Féminin</label>
            <input
              type="radio"
              id="girl"
              value="girl"
              name="gender"
              onChange={handleChange}
            />
            <label htmlFor="man">Masculin</label>
            <input
              type="radio"
              id="man"
              value="man"
              name="gender"
              onChange={handleChange}
            />
          </article>

          <label htmlFor="lastname" hidden>
            Nom
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Nom"
            required
            onChange={handleChange}
          />

          <label htmlFor="firstname" hidden>
            Prénom
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Prénom"
            required
            onChange={handleChange}
          />

          <label htmlFor="age" hidden>
            Age
          </label>
          <input
            type="text"
            id="age"
            placeholder="Age"
            required
            onChange={handleChange}
          />

          <article className="handicap">
            <div>
              <label htmlFor="text">Handicap ou spécificités</label>
            </div>
            <input
              type="radio"
              id="yes"
              value="yes"
              name="handicap"
              onChange={handleChange}
            />
            <label htmlFor="yes">Oui*</label>
            <input
              type="radio"
              id="no"
              value="no"
              name="handicap"
              onChange={handleChange}
            />
            <label htmlFor="no">Non</label>
          </article>
          <p className="details">
            *Si oui, merci de vous rapprocher de l'établissement choisi afin
            d'en discuter plus en détails.
          </p>
          <label htmlFor="text" hidden>
            Allergies
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Allergies"
            onChange={handleChange}
          />

          <article className="walk">
            <div>
              <label htmlFor="text">Est-ce que votre enfant marche ?</label>
            </div>
            <input
              type="radio"
              id="yes2"
              value="yes2"
              name="walk"
              onChange={handleChange}
            />
            <label htmlFor="yes2">Oui</label>
            <input
              type="radio"
              id="no2"
              value="no2"
              name="walk"
              onChange={handleChange}
            />
            <label htmlFor="no2">Non</label>
          </article>

          <div className="block-validated">
            <button className="validated" type="submit">
              Valider
            </button>
          </div>
        </form>

        <section className="footer-registration-children">
          <BackButton />

          <button className="next-button" type="button">
            Suivant
          </button>
        </section>
      </section>
    </div>
  );
}

export default RegistrationChildrenPage;
