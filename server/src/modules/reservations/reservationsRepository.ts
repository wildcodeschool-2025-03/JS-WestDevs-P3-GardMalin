import databaseClient, { type Rows } from "../../../database/client";

class reservationsRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM reservation");

    return rows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM reservation WHERE id = ?",
      [id],
    );

    return rows[0];
  }

  async create(reservation: {
    kid_id: number;
    nursery_id: number;
    date: string;
    is_validated: string;
  }) {
    const [result] = await databaseClient.query(
      `INSERT INTO reservation (kid_id, nursery_id, date, is_validated)
     VALUES (?, ?, ?, ?)`,
      [
        reservation.kid_id,
        reservation.nursery_id,
        reservation.date,
        reservation.is_validated,
      ],
    );

    return result;
  }
}

export default new reservationsRepository();
