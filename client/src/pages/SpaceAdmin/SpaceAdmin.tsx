import { useEffect, useState } from "react";
import "./SpaceAdmin.css";
import { toast } from "react-toastify";

interface Parent {
  id: number;
  firstname: string;
  lastname: string;
  street: string;
  postal_code: string;
  city: string;
  phone_number: string;
}

interface Nursery {
  id: number;
  name: string;
  siret: string;
  street: string;
  postal_code: string;
  city: string;
  phone_number: string;
}

function SpaceAdmin() {
  const [parents, setParents] = useState<Parent[]>([]);
  const [nurseries, setNurseries] = useState<Nursery[]>([]);

  // Récupération des données à l’arrivée sur la page
  useEffect(() => {
    fetch("http://localhost:3310/api/parents")
      .then((res) => res.json())
      .then((data) => setParents(data));

    fetch("http://localhost:3310/api/nurseries")
      .then((res) => res.json())
      .then((data) => setNurseries(data));
  }, []);

  // Supprimer un parent
  const handleDeleteParent = async (userId: number) => {
    try {
      const res = await fetch(`http://localhost:3310/api/parents/${userId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setParents((prev) => prev.filter((p) => p.id !== userId));
      } else {
        toast.error("Erreur lors de la suppression du parent");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };

  // Accepter une crèche
  const handleAcceptNursery = async (nurseryId: number) => {
    try {
      const res = await fetch(
        `http://localhost:3310/api/nurseriesedit/${nurseryId}/accept`,
        {
          method: "PUT",
        },
      );
      if (res) {
        // soit tu refetch, soit tu mets à jour localement
        toast.info("Validation de la crèche");
      } else {
        toast.error("Erreur lors de l'acceptation de la crèche");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };

  // Supprimer une crèche
  const handleDeleteNursery = async (userId: number) => {
    try {
      const res = await fetch(`http://localhost:3310/api/user/${userId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setNurseries((prev) => prev.filter((n) => n.id !== userId));
        toast.info("Suppression de la crèche");
      } else {
        toast.error("Erreur lors de la suppression de la crèche");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };

  return (
    <>
      <header className="header-space-admin">
        <h1>Espace Administrateur</h1>
      </header>

      <div className="body-admin">
        <article className="input-search-admin">
          <input
            className="search-admin-i"
            type="text"
            placeholder="Recherche (parents & crèches)"
            aria-label="Search"
            name="search"
          />
        </article>

        <article className="article-parents">
          <h2>Parents inscrits</h2>
          <table>
            <tr className="tr-parents">
              <th>Prénom</th>
              <th>Nom</th>
              <th>Rue</th>
              <th>Code postal</th>
              <th>Ville</th>
              <th>Téléphone</th>
              <th>Action</th>
            </tr>

            <tbody>
              {parents.map((parent) => (
                <tr key={parent.id}>
                  <td data-label="Prénom">{parent.firstname}</td>
                  <td data-label="Nom">{parent.lastname}</td>
                  <td data-label="Rue">{parent.street}</td>
                  <td data-label="Code postal">{parent.postal_code}</td>
                  <td data-label="Ville">{parent.city}</td>
                  <td data-label="Téléphone">{parent.phone_number}</td>
                  <td>
                    <button
                      className="click-b"
                      onClick={() => handleDeleteParent(parent.id)}
                      type="button"
                      aria-label="delete"
                    >
                      supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="article-pro">
          <h2>Crèches inscrites</h2>
          <table>
            <tr>
              <th>Nom de la crèche</th>
              <th>N° de SIRET</th>
              <th>Rue</th>
              <th>Code postal</th>
              <th>Ville</th>
              <th>Téléphone</th>
              <th>Action</th>
            </tr>

            <tbody>
              {nurseries.map((nursery) => (
                <tr key={nursery.id}>
                  <td data-label="Nom de la crèche">{nursery.name}</td>
                  <td data-label="SIRET">{nursery.siret}</td>
                  <td data-label="Rue">{nursery.street}</td>
                  <td data-label="Code postal">{nursery.postal_code}</td>
                  <td data-label="Ville">{nursery.city}</td>
                  <td data-label="Téléphone">{nursery.phone_number}</td>
                  <td>
                    <button
                      className="click-b"
                      onClick={() => handleAcceptNursery(nursery.id)}
                      type="button"
                      aria-label="accept"
                    >
                      accepter
                    </button>
                    <button
                      className="click-b"
                      onClick={() => handleDeleteNursery(nursery.id)}
                      type="button"
                      aria-label="delete"
                    >
                      supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
}

export default SpaceAdmin;
