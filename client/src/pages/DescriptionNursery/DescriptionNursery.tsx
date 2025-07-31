import { useNavigate } from "react-router";
import "./DescriptionNursery.css";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BackButton from "../../components/BackButton/BackButton";
import { useAuth } from "../../services/AuthContext";

const DescriptionNursery = () => {
  const [nursery, setnursery] = useState<Nursery | null>(null);
  const { user, setUser, setIsLogged } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/nurseries/${user.nurserieId}`)
      .then((res) => res.json())
      .then((data) => setnursery(data));
  }, [user]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (nursery) {
      setnursery({ ...nursery, [name]: value });
    }
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    fetch(`http://localhost:3310/api/nurseriesedit/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nursery),
    }).then((response) => {
      console.log(nursery);
      if (response.ok) {
        toast("Informations modifiées avec succès !");
      } else {
        toast("Erreur lors de la modifications");
      }
    });
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Attention cette action est irréversible ! Souhaitez vous vraiment supprimer votre compte ? ",
      )
    )
      return;
    if (!user) return;

    const response = await fetch(`http://localhost:3310/api/user/${user.id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      toast.success("Compte supprimé !");

      await fetch("http://localhost:3310/api/logout", {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
      setIsLogged(false);

      navigate("/");
    } else {
      toast.error("Erreur lors de la suppression.");
    }
  };

  if (!user || !nursery) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div className="nursery-info-container">
      <h1>Espace crèches informations</h1>
      <section className="nursery-info-section">
        <div>
          <img
            src="/images/enfants-dessinant-maison-crayons.png"
            alt="family avatar"
          />
          <h2>Profil crèche</h2>
        </div>
        <form onSubmit={handleUpdate}>
          <label htmlFor="name1">Nom de la crèche</label>
          <input
            id="name1"
            name="name"
            value={nursery.name}
            onChange={handleChange}
            placeholder="Nom de la crèche"
            required
          />

          <label htmlFor="siret">Siret</label>
          <input
            id="siret"
            name="siret"
            value={nursery.siret}
            onChange={handleChange}
            placeholder="Exemple: 12457898653216"
            required
          />

          <label htmlFor="street2">Rue</label>
          <input
            id="street2"
            name="street"
            value={nursery.street}
            onChange={handleChange}
            placeholder="Exemple: 16 Rue des acacias"
            required
          />

          <label htmlFor="city2">Ville</label>
          <input
            id="city2"
            name="city"
            value={nursery.city}
            onChange={handleChange}
            placeholder="Exemple: La Rochelle"
            required
          />

          <label htmlFor="postal_code2">Code postal</label>
          <input
            id="postal_code2"
            name="postal_code"
            value={nursery.postal_code}
            onChange={handleChange}
            placeholder="Exemple: 17000"
            required
          />

          <label htmlFor="phone_number2">Numéro de téléphone</label>
          <input
            id="phone_number2"
            name="phone_number"
            value={nursery.phone_number}
            onChange={handleChange}
            placeholder="Exemple: 0836656565"
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={nursery.description}
            onChange={handleChange}
            placeholder="Décrivez votre crèche"
            required
          />

          <div>
            <button type="submit">Enregistrer vos modifications</button>
            <button type="button" onClick={handleDelete}>
              Supprimer mon compte
            </button>
            <BackButton />
          </div>
        </form>
      </section>
    </div>
  );
};

export default DescriptionNursery;
