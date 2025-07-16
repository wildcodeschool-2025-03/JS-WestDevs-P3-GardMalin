import "./Carrousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { EffectCards } from "swiper/modules";
import ChildCard from "./CardsCarrousel";

type CarrouselProps = {
  onKidSelect: (kid: Kid | undefined) => void;
};

function Carrousel({ onKidSelect }: CarrouselProps) {
  const [kids, setKids] = useState<Kid[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/kids/${id}`)
      .then((res) => res.json())
      .then((data) => setKids(data));
  }, [id]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    onKidSelect(kids[selectedIndex]);
  }, [selectedIndex, kids, onKidSelect]);

  if (kids.length === 0) {
    return <p>Chargement des enfants...</p>;
  }

  return (
    <section className="structure-accueil-carrousel">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setSelectedIndex(swiper.activeIndex);
        }}
      >
        {kids.map((kid) => {
          return (
            <SwiperSlide key={kid.id}>
              <ChildCard
                gender={kid.gender}
                name={kid.name}
                firstname={kid.firstname}
                age={kid.age}
                id={0}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Carrousel;
