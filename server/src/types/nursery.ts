interface Nursery {
  name: string;
  siret: string;
  street: string;
  postal_code: string;
  city: string;
  phone_number: string;
  description: string;
  capacity: number;
  user_id: number;
}

type ReservationWithKidAndNursery = {
  id: number;
  kid_id: number;
  nursery_id: number;
  date: string;
  is_validated: boolean;
  kid_firstname: string;
  kid_lastname: string;
  kid_age: number;
  nursery_name: string;
  nursery_capacity: number;
};
