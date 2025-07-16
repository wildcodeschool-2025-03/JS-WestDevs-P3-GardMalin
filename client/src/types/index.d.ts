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
  id: number;
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
  age: number;
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
  onValidate?: (id: number) => void;
  onRefuse?: (id: number) => void;
}

type Nursery = {
  name: string;
};

type Reservation = {
  id: number;
  kid_id: number;
  nursery_id: number;
  date: string;
  is_validated: boolean;
  is_refused: boolean;
  kid: Kid;
};
