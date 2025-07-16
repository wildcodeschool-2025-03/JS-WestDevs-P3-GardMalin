interface ParentI {
  id: number;
  firstname: string;
}

interface KidI {
  id: number;
  firstname: string;
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
  mail: ReactNode;
  phone_number: ReactNode;
  street: ReactNode;
  id: number;
  phone: ReactNode;
  postal_code: ReactNode;
  city: ReactNode;
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
