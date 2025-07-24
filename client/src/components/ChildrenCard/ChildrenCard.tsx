import "./ChildrenCard.css";

interface ChildrenCardProps {
  imgSrc: string;
  firstname: string;
}

function ChildrenCard({ imgSrc, firstname }: ChildrenCardProps) {
  return (
    <section className="children-card-container">
      <article className="children-card">
        <img src={imgSrc} alt={`Avatar de ${firstname}`} />
        <ul>
          <li>Prénom : {firstname}</li>
        </ul>
      </article>
    </section>
  );
}

export default ChildrenCard;
