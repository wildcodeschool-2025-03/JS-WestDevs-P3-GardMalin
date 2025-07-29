import "./ChildrenCard.css";

function ChildrenCard({ gender, firstname }: Kid) {
  const imgGirl = [
    "/images/little-girl/little-girl2.png",
    "/images/little-girl/little-girl3.png",
    "/images/little-girl/little-girl4.png",
    "/images/little-girl/little-girl5.png",
    "/images/little-girl/little-girl6.png",
    "/images/little-girl/little-girl7.png",
    "/images/little-girl/little-girl8.png",
    "/images/little-girl/little-girl-9.png",
    "/images/little-girl/little-girl10.png",
    "/images/little-girl/little-girl11.png",
    "/images/little-girl/little-girl12.png",
    "/images/little-girl/little-girl13.png",
  ];

  const imgBoy = [
    "/images/little-boy/little-boy2.png",
    "/images/little-boy/little-boy3.png",
    "/images/little-boy/little-boy4.png",
    "/images/little-boy/little-boy5.png",
    "/images/little-boy/little-boy6.png",
    "/images/little-boy/little-boy6.png",
    "/images/little-boy/little-boy7.png",
    "/images/little-boy/little-boy8.png",
    "/images/little-boy/little-boy9.png",
  ];

  const imgElse = "/images/avatar-de-licorne.png";

  const getRandomImage = (images: string[]) =>
    images[Math.floor(Math.random() * images.length)];

  const imgSrc =
    gender === "F"
      ? getRandomImage(imgGirl)
      : gender === "M"
        ? getRandomImage(imgBoy)
        : imgElse;

  return (
    <section className="children-card-container">
      <article className="children-card">
        <img src={imgSrc} alt={`Avatar de ${firstname}`} />
        <p>Prénom : {firstname}</p>
      </article>
    </section>
  );
}

export default ChildrenCard;
