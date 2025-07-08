interface ParentI {
  id: number;
  firstname: string;
}

interface KidI {
  id: number;
  firstname: string;
}

interface CardProps {
  image: string;
  name: string;
  age: number;
  text: string;
}

type Kid = {
  firstname: string;
  lastname: string;
  age: number;
};

type Nursery = {
  name: string;
};

type Reservation = {
  id: number;
  date: string;
  is_validated: boolean;
  is_refused: boolean;
  kid: Kid;
  nursery: Nursery;
};
