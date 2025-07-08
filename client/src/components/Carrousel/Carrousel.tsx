import "./Carrousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
// import { useEffect, useState } from "react";
import ChildCard from "./CardsCarrousel";
// import { useParams } from "react-router";

const arrayKids = [
  {
    id: 1,
    gender: "F",
    firstname: "Fiora",
    name: "Wick",
    age: "8",
  },
  {
    id: 2,
    gender: "M",
    firstname: "Florian",
    name: "Wick",
    age: "6",
  },
  {
    id: 3,
    gender: "U",
    firstname: "Fia",
    name: "Wick",
    age: "7",
  },
];

function Carrousel() {
  // const [kids, setKids] = useState<Child[]>([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:3310/api/kids/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setKids(data))
  // }, [id]);

  return (
    <section>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {arrayKids.map((kid) => {
          return (
            <SwiperSlide key={kid.id}>
              <ChildCard
                gender={kid.gender}
                name={kid.name}
                firstname={kid.firstname}
                age={kid.age}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Carrousel;
