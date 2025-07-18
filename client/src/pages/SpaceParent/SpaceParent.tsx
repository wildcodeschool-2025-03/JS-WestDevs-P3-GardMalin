import { Link } from "react-router";
import "./SpaceParent.css";
import BackButton from "../../components/BackButton/BackButton";

function SpaceParent() {
  return (
    <main className="body-parents">
      <header className="header-page-parent">
        <h1>Espace parents</h1>
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
            <article className="bloc-one">
              <p>Enfant 1</p>
              <p>Établissement d'acceuil</p>
              <p>Du 00/00/0000</p>
              <p>au 00/00/0000</p>
            </article>
            <article className="bloc-two">
              <p>Enfant 2</p>
              <p>Établissement d'acceuil</p>
              <p>Du 00/00/0000</p>
              <p>au 00/00/0000</p>
            </article>
          </div>
          <Link to="/childcare-facility">
            <button type="button" className="new-reservation">
              Nouvelle réservation
            </button>
          </Link>
        </section>

        <section className="space-children">
          <h3>Espace enfant(s)</h3>
          <div className="cards-children">
            <article className="bloc-three">
              <img src="/images/little_girl.png" alt="little girl" />
              <p>Prénom</p>
            </article>
            <article className="bloc-four">
              <img src="/images/little_boy.png" alt="little boy" />
              <p>Prénom</p>
            </article>
          </div>
          <h3>Mes anciennes réservations</h3>
          <article className="old-reservation">
            <ul className="old-block">
              <li className="box-one">
                <p>Établissement d'acceuil 1</p>
              </li>
              <li className="box-two">
                <p>Établissement d'acceuil 2</p>
              </li>
              <li className="box-three">
                <p>Établissement d'acceuil 3</p>
              </li>
            </ul>
          </article>
        </section>
      </div>
      <BackButton />
    </main>
  );
}

export default SpaceParent;
