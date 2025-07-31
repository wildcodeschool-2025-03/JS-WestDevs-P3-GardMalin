import { Link } from "react-router";
import "./SpaceParent.css";
import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
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
    fetch(`http://localhost:3310/api/parents/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setParent(data));

    fetch(`http://localhost:3310/api/kids/${user.parentId}`)
      .then((res) => res.json())
      .then((data) => setKid(data));

    fetch(`http://localhost:3310/api/reservations/parent/${user.id}`)
      .then((res) => res.json())
      .then((data) => setReservation(data));
  }, [user]);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const currentMonthReservations = reservation.filter((resa) => {
    const date = new Date(resa.date);
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  const previousMonthReservations = reservation.filter((resa) => {
    const date = new Date(resa.date);
    return (
      date.getMonth() === previousMonth && date.getFullYear() === previousYear
    );
  });

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
        <div className="container-btn">
          <Link to="/parent-information">
            <button className="my-news" type="button">
              Mes informations
            </button>
          </Link>
        </div>
        <section className="space-reservation">
          <h3>Les réservations du mois</h3>
          <div className="scroller">
            {currentMonthReservations.length > 0 ? (
              currentMonthReservations.map((resa) => (
                <ReservationCard
                  key={`${resa.kid_id}-${resa.date}`}
                  kid_firstname={resa.kid_firstname}
                  nursery_name={resa.nursery_name}
                  date={resa.date}
                />
              ))
            ) : (
              <p>Aucune réservation ce mois-ci.</p>
            )}
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
                gender={kid.gender}
                firstname={kid.firstname}
              />
            ))}
          </div>
          <article className="old-reservation">
            <h3>Mes anciennes réservations</h3>
            <div className="box-one">
              {previousMonthReservations.length > 0 ? (
                previousMonthReservations.map((resa) => (
                  <ReservationCard
                    key={`${resa.kid_id}-${resa.date}`}
                    nursery_name={resa.nursery_name}
                    date={resa.date}
                    kid_firstname={resa.kid_firstname}
                  />
                ))
              ) : (
                <p>Aucune réservation le mois dernier.</p>
              )}
            </div>
          </article>
        </section>
      </div>
      <BackButton />
    </div>
  );
}

export default SpaceParent;
