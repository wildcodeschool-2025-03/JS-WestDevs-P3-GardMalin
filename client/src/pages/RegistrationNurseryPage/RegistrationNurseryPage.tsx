import { Link, useNavigate } from "react-router";
import "./RegistrationNurseryPage.css";
import { useState } from "react";
import { toast } from "react-toastify";

function RegistrationNurseryPage() {
  const navigate = useNavigate();

  type FormDataKeys =
    | "name"
    | "siret"
    | "street"
    | "postal_code"
    | "city"
    | "phone_number"
    | "email"
    | "description"
    | "capacity"
    | "password"
    | "confirmPassword"
    | "role";

  const [formData, setFormData] = useState({
    role: "professional",
    name: "",
    siret: "",
    street: "",
    postal_code: "",
    city: "",
    phone_number: "",
    email: "",
    description: "",
    capacity: "",
    password: "",
    confirmPassword: "",
  });

  type formData = {
    [key in FormDataKeys]: string;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    if (id in formData) {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const userResponse = await fetch("http://localhost:3310/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
        credentials: "include",
      });

      if (!userResponse.ok) {
        toast.error("Erreur lors de la création du compte utilisateur");
        return;
      }
      const newUser = await userResponse.json();
      const userId = newUser.id;

      const nurseryPayload = {
        name: formData.name,
        siret: formData.siret,
        street: formData.street,
        postal_code: formData.postal_code,
        city: formData.city,
        phone_number: formData.phone_number,
        email: formData.email,
        description: formData.description,
        capacity: Number(formData.capacity),
        user_id: userId,
      };

      const nurseryRes = await fetch("http://localhost:3310/api/nurserie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nurseryPayload),
        credentials: "include",
      });

      if (nurseryRes.ok) {
        toast.success("Établissement inscrit avec succès !");
        navigate("/login-pro");
      } else {
        toast.error("Erreur lors de l'enregistrement de l'établissement");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };

  return (
    <div className="registration-professional-page">
      <section>
        <article>
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </article>

        <article>
          <h1>Création de votre espace professionnel</h1>
        </article>

        <section>
          <form className="registration-professional" onSubmit={handleSubmit}>
            <article className="grid-box1">
              <label htmlFor="company" hidden>
                Nom de votre établissement
              </label>
              <input
                id="name"
                type="text"
                placeholder=" Nom de votre établissement"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="siret" hidden>
                Numéro de SIRET
              </label>
              <input
                id="siret"
                type="text"
                placeholder="Numéro de SIRET"
                value={formData.siret}
                onChange={handleChange}
              />

              <label htmlFor="email" hidden>
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                placeholder=" Adresse email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="adress" hidden>
                Adresse
              </label>
              <input
                id="street"
                type="text"
                placeholder="Adresse"
                value={formData.street}
                onChange={handleChange}
              />

              <label htmlFor="city" hidden>
                Ville
              </label>
              <input
                id="city"
                type="text"
                placeholder="Ville"
                value={formData.city}
                onChange={handleChange}
              />
            </article>
            <article className="grid-box2">
              <label htmlFor="postal" hidden>
                Code postale
              </label>
              <input
                id="postal_code"
                type="text"
                placeholder="Code postale"
                value={formData.postal_code}
                onChange={handleChange}
              />

              <label htmlFor="phone" hidden>
                Numéro de téléphone
              </label>
              <input
                id="phone_number"
                type="tel"
                placeholder=" Numéro de téléphone"
                value={formData.phone_number}
                onChange={handleChange}
              />

              <label htmlFor="reception-capacity" hidden>
                Capacité d'accueil
              </label>
              <input
                id="capacity"
                type="number"
                placeholder="Capacité d'accueil"
                value={formData.capacity}
                onChange={handleChange}
              />
              <label className="details-establishment">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  cols={33}
                  maxLength={500}
                  wrap="soft"
                  placeholder="Décrivez votre établissement ici..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password" hidden>
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder=" Mot de passe"
                value={formData.password}
                onChange={handleChange}
              />

              <label htmlFor="confirm-password" hidden>
                Confirmer votre mot de passe
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder=" Confirmer votre mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </article>
            <button type="submit">Valider vos informations</button>
          </form>

          <Link to="/login-pro">
            <button className="pro-button" type="button">
              Connectez-vous
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default RegistrationNurseryPage;
