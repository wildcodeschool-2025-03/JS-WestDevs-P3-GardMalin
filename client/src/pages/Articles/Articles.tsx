import { Link } from "react-router";
import "./Articles.css";
import BackButton from "../../components/BackButton/BackButton";

interface ArticleData {
  title: string;
  image: string;
  route: string;
  alt: string;
}

const articles: ArticleData[] = [
  {
    title: "Le développement au fil des âges de votre petit",
    image: "/images/advice1.png",
    route: "/articles/development-ages",
    alt: "Développement enfant",
  },
  {
    title: "Activitées pour les vacances",
    image: "/images/advice2.png",
    route: "/articles/holiday-activities",
    alt: "Activités vacances",
  },
  {
    title: "Voyager avec bébé",
    image: "/images/advice3.png",
    route: "/articles/travel-with-baby",
    alt: "Voyager bébé",
  },
];

function ArticlesPage() {
  return (
    <section className="articles-list">
      <h2>Conseils & Informations</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.route}>
            <Link to={article.route} className="article-card">
              <img src={article.image} alt={article.alt} />
              <p>{article.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <BackButton />
    </section>
  );
}

export default ArticlesPage;
