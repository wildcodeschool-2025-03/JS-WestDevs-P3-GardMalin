interface ParentI {
  id: number;
  firstname: string;
}

interface KidI {
  id: number;
  firstname: string;
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

type Kid = {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
};

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
