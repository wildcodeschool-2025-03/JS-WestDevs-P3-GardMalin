import { Link } from "react-router";
import "./RegistrationParentsPage.css";
import { useState } from "react";
import { toast } from "react-toastify";

function RegistrationParentsPage() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    role: "parent",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    street: "",
    postal_code: "",
    city: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const userRes = await fetch("http://localhost:3310/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      if (!userRes.ok) toast.error("Adress mail inccorect");

      const user = await userRes.json();

      const detailsRes = await fetch("http://localhost:3310/api/parent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          firstname: formData.firstname,
          lastname: formData.lastname,
          street: formData.street,
          postal_code: formData.postal_code,
          city: formData.city,
          phone_number: formData.phone_number,
        }),
      });

      if (!detailsRes.ok) throw new Error("Erreur infos parent");

      toast.success("Compte parent créé avec succès !");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registration-parents-page">
      <section>
        <article>
          <img src="/images/gardmalin-logo.png" alt="logo Gardmalin" />
        </article>

        <article>
          <h1>Création de votre espace parents</h1>
        </article>

        <section>
          <form className="registration-parents" onSubmit={handleSubmit}>
            <article className="grid-box-parents1">
              <label htmlFor="lastnames" hidden>
                Nom
              </label>
              <input
                id="lastnames"
                name="lastname"
                type="text"
                placeholder="Nom"
                onChange={handleChange}
                required
              />

              <label htmlFor="firstnames" hidden>
                Prénom
              </label>
              <input
                id="firstnames"
                name="firstname"
                type="text"
                placeholder="Prénom"
                onChange={handleChange}
                required
              />

              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Adresse email"
                onChange={handleChange}
                required
              />

              <label htmlFor="street" hidden>
                Adresse
              </label>
              <input
                id="street"
                name="street"
                type="text"
                placeholder="Adresse"
                onChange={handleChange}
                required
              />
            </article>

            <article className="grid-box-parents2">
              <label htmlFor="city" hidden>
                Ville
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Ville"
                onChange={handleChange}
                required
              />

              <label htmlFor="postal" hidden>
                Code postale
              </label>
              <input
                id="postal"
                name="postal_code"
                type="number"
                placeholder="Code postale"
                onChange={handleChange}
                required
              />

              <label htmlFor="phone" hidden>
                Téléphone
              </label>
              <input
                id="phone"
                name="phone_number"
                type="tel"
                placeholder="Numéro de téléphone"
                onChange={handleChange}
                required
              />

              <label htmlFor="password" hidden>
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={handleChange}
                required
              />

              <label htmlFor="confirm-password" hidden>
                Confirmer
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirmer votre mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </article>

            <button className="submit-parents" type="submit">
              Confirmer votre inscription
            </button>
          </form>

          <Link to="/login-parent">
            <button className="parents-button" type="button">
              Connectez-vous
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default RegistrationParentsPage;
