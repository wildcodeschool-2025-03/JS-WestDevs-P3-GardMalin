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
  {
    id: 4,
    gender: "F",
    firstname: "Lana",
    name: "Wu",
    age: "8",
  },
  {
    id: 5,
    gender: "M",
    firstname: "Pierre",
    name: "Rocher",
    age: "6",
  },
  {
    id: 6,
    gender: "U",
    firstname: "Paul",
    name: "Pain",
    age: "7",
  },
  {
    id: 7,
    gender: "F",
    firstname: "Fanny",
    name: "Durand",
    age: "8",
  },
  {
    id: 8,
    gender: "M",
    firstname: "Kylian",
    name: "Gadjo",
    age: "6",
  },
  {
    id: 9,
    gender: "U",
    firstname: "Lou",
    name: "Anne",
    age: "7",
  },
  {
    id: 10,
    gender: "F",
    firstname: "Laura",
    name: "Wick",
    age: "8",
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
    <section className="structure-accueil-carrousel">
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
