import "./SpaceParent.css";

function SpaceParent() {
  return (
    <>
      <header className="header-page-parent">
        <h1>
          Espace
          <br />
          parents
        </h1>
      </header>

      <main className="page-parent">
        <button className="my-news" type="button">
          Mes informations
        </button>
        <section className="space-reservation">
          <h3>Mes réservations</h3>
          <article className="bloc-one">
            <p>bloc 1</p>
          </article>
          <article className="bloc-two">
            <p>bloc 2</p>
          </article>
          <button type="button" className="new-reservation">
            Nouvelle réservation
          </button>
        </section>

        <section className="space-children">
          <h3>Espace enfant</h3>
          <article className="bloc-three">
            <img src="/images/little_girl.png" alt="little girl" />
            <p>Prénom</p>
          </article>
          <article className="bloc-four">
            <img src="/images/little_boy.png" alt="little boy" />
            <p>Prénom</p>
          </article>

          <h3>
            Mes anciennes
            <br /> réservations
          </h3>
          <article className="old-reservation">
            <ul className="old-block">
              <li className="box-one">
                <p>
                  Etablissement
                  <br />
                  d'acceuil 1
                </p>
              </li>
              <li className="box-two">
                <p>
                  Etablisement
                  <br />
                  d'acceuil 2
                </p>
              </li>
              <li className="box-three">
                <p>
                  Etablisement
                  <br />
                  d'acceuil 3
                </p>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}

export default SpaceParent;
