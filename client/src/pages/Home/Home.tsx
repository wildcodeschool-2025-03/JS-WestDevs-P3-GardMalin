import { Link } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <section className="home-page">
      <img src="/images/gardmalin-logo.png" alt="logo-GardMalin" />
      <section className="home-page-presentation">
        <article>
          <section>
            <Link to="/loginparent"> Je cherche une garde d'enfant </Link>
            <Link to="/loginpro"> Je veux garder des enfants </Link>
            <Link to="/about"> Nouc contacter </Link>
          </section>
          <section>
            <p>
              Trouver les meilleurs garde d'enfants <br />
              près de chez vous !
            </p>
            <SearchBar />
          </section>
        </article>
        <article>
          <p>
            <h2>
              Bienvenue chez “Gard Malin”, <br />
            </h2>
            <h3>
              La garde d'enfants sur mesure, pensée pour les familles et les
              pros.
            </h3>
            Parce que chaque famille mérite une garde d'enfants de confiance,
            bienveillante et flexible, nous accompagnons parents et
            professionnels au quotidien. Pour les parents : des gardes d'enfants
            attentionnées, choisies avec soin.Pour les pros : un cadre humain,
            du respect et des missions enrichissantes. Ici, tout est pensé pour
            le bien-être des enfant et la sérénité des grands !
          </p>
        </article>
      </section>
      <article>
        <h3>Conseils et information</h3>
        <img
          src="/images/advice1.png"
          alt="illustration de l'article : Le développement au fil des âges de votre petit"
        />
        <img
          src="/images/advice2.png"
          alt="illustration de l'article : Activitées pour les vacances"
        />
        <img
          src="/images/advice3.png"
          alt="illustration de l'article : Voyager avec bébé"
        />
        <ul>
          <li>
            <Link to="/maintenance">
              Le développement au fil des âges de votre petit
            </Link>
          </li>
          <li>
            <Link to="/maintenance">Activitées pour les vacances</Link>
          </li>
          <li>
            <Link to="/maintenance">Voyager avec bébé</Link>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Home;
