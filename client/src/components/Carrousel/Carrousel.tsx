import "./Carrousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";
import { useAuth } from "../../services/AuthContext";
import ChildCard from "./CardsCarrousel";

type CarrouselProps = {
  onKidSelect: (kid: Kid | undefined) => void;
};

function Carrousel({ onKidSelect }: CarrouselProps) {
  const [kids, setKids] = useState<Kid[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3310/api/kids/by-user/${user.id}`)
      .then((res) => res.json())
      .then((data) => setKids(data))
      .catch(console.error);
  }, [user]);

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
