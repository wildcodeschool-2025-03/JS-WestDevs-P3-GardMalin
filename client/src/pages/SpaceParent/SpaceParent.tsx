import { Link } from "react-router";
import "./SpaceParent.css";
import { useEffect, useState } from "react";
import ChildrenCard from "../../components/ChildrenCard/ChildrenCard";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
import { useAuth } from "../../services/AuthContext";
import type { Reservation } from "../../types/reservation";

function SpaceParent() {
  const [parent, setParent] = useState<ParentI | null>(null);
  const [kid, setKid] = useState<KidI[]>([]);
  const [reservation, setReservation] = useState<Reservation[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3310/api/parents/${user.id}`)
      .then((res) => res.json())
      .then((data) => setParent(data));

    fetch(`http://localhost:3310/api/kids/${user.id}`)
      .then((res) => res.json())
      .then((data) => setKid(data));

    fetch(`http://localhost:3310/api/reservations/parent/${user.id}`)
      .then((res) => res.json())
      .then((data) => setReservation(data));
  }, [user]);
  if (!user || !parent || !kid) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div className="body-parents">
      <header className="header-page-parent">
        <h1>Espace parents</h1>
        <h2>Famille {parent.lastname}</h2>
      </header>

      <div className="page-parent">
        <Link to="/parent-information">
          <button className="my-news" type="button">
            Mes informations
          </button>
        </Link>
        <section className="space-reservation">
          <h3>Mes réservations</h3>
          <div className="scroller">
            {reservation?.map((res) => (
              <ReservationCard
                key={`${res.kid_id}-${res.date}`}
                kid_firstname={res.kid_firstname}
                nursery_name={res.nursery_name}
                date={res.date}
              />
            ))}
          </div>
          <Link to="/childcare-facility">
            <button type="button" className="new-reservation">
              Nouvelle réservation
            </button>
          </Link>
        </section>

        <section className="space-children">
          <h3>Espace enfant(s)</h3>
          <div className="scroller-children">
            {kid.map((kid) => (
              <ChildrenCard
                key={kid.id}
                imgSrc={
                  kid.gender === "F"
                    ? "/images/little_girl.png"
                    : "/images/little_boy.png"
                }
                firstname={kid.firstname}
              />
            ))}
          </div>
          <h3>Mes anciennes réservations</h3>
          <article className="old-reservation">
            <ul className="old-block">
              <li className="box-one">
                <p>Établissement d'accueil 1</p>
              </li>
              <li className="box-two">
                <p>Établissement d'accueil 2</p>
              </li>
              <li className="box-three">
                <p>Établissement d'accueil 3</p>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}

export default SpaceParent;
