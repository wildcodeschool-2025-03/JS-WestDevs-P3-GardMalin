interface ParentI {
  id: number;
  firstname: string;
  lastname: string;
  street: string;
  postal_code: string;
  city: string;
  phone_number: string;
}

interface KidI {
  id?: number;
  gender: string;
  firstname: string;
  lastname: string;
  age: number;
  handicap: boolean;
  allergy: string;
  walker: boolean;
}

interface Kid {
  id?: number;
  firstname: string;
  lastname?: string;
  name?: string;
  gender?: string;
  age?: number;
}

interface kids {
  id?: number;
  firstname?: string;
  lastname?: string;
  name?: string;
  gender?: string;
  age?: string;
}

interface CardProps {
  id: number;
  image: string;
  name: string;
  age: number;
  status: "validées" | "en attente" | "refusées";
  onAction?: (id: number, action: "yes" | "no") => void;
}

type Nursery = {
  mail: string;
  phone_number: string;
  street: string;
  id: number;
  description?: string;
  phone?: string;
  postal_code: string;
  city: string;
  name: string;
};
interface ReservationRecap {
  date: string;
  nursery: Nursery;
  kid: Kid;
}

interface ChildCardProps {
  id?: number;
  imgSrc: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  handicap: boolean;
  allergy: string;
  walker: boolean;
  onUpdate?: () => void;
}
