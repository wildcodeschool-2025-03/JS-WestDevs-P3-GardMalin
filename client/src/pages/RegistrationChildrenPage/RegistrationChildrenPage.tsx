import BackButton from "../../components/BackButton/BackButton";
import "./RegistrationChildrenPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../../services/AuthContext";

function RegistrationChildrenPage() {
  const { user } = useAuth();
  console.log(user);

  const [formData, setFormData] = useState({
    gender: "",
    firstname: "",
    lastname: "",
    age: "",
    walker: false,
    allergies: "",
    handicap: false,
    parent_id: user?.parentId,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, name } = e.target;

    if (type === "radio") {
      if (name === "gender") {
        setFormData({ ...formData, gender: value });
      } else if (name === "handicap") {
        setFormData({ ...formData, handicap: value === "yes" });
      } else if (name === "walk") {
        setFormData({ ...formData, walker: value === "yes2" });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      parent_id: Number(user?.parentId),
    };

    console.log("Payload envoyé :", payload);

    const res = await fetch(
      `http://localhost:3310/api/kids?parent_id=${user?.parentId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (res.ok) {
      toast.success("Enfant inscrit avec succès !");
    } else {
      toast.error("Erreur lors de l'inscription");
    }
  };

  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/childcare-facility");
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
            <label htmlFor="F">Féminin</label>
            <input
              type="radio"
              id="F"
              value="F"
              name="gender"
              onChange={handleChange}
            />
            <label htmlFor="M">Masculin</label>
            <input
              type="radio"
              id="M"
              value="M"
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
            placeholder="Age (mois)"
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
            id="allergy"
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

          <button className="next-button" type="button" onClick={nextPage}>
            Suivant
          </button>
        </section>
      </section>
    </div>
  );
}

export default RegistrationChildrenPage;
