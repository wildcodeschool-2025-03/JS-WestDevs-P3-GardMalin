import databaseClient, { type Rows } from "../../../database/client";

class reservationsRepository {
  async readAll() {
    const [rows] = await databaseClient.query(`SELECT 
      reservation.kid_id,
      reservation.nursery_id,
      reservation.date,
      reservation.is_validated,
      kid.firstname AS kid_firstname,
      kid.lastname AS kid_lastname,
      kid.age AS kid_age,
      nursery.name AS nursery_name
      
    FROM reservation
    INNER JOIN kid ON reservation.kid_id = kid.id
    INNER JOIN nursery ON reservation.nursery_id = nursery.id`);

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

  async readByParentUserId(userId: string) {
    const [rows] = await databaseClient.query(
      `
      SELECT 
        reservation.kid_id,
        reservation.nursery_id,
        reservation.date,
        reservation.is_validated,
        kid.firstname AS kid_firstname,
        kid.lastname AS kid_lastname,
        kid.age AS kid_age,
        nursery.name AS nursery_name
      FROM reservation
      INNER JOIN kid ON reservation.kid_id = kid.id
      INNER JOIN parent ON kid.parent_id = parent.id
      INNER JOIN user ON parent.user_id = user.id
      INNER JOIN nursery ON reservation.nursery_id = nursery.id
      WHERE user.id = ? AND reservation.is_validated = TRUE
      ORDER BY reservation.date ASC
    `,
      [userId],
    );

    return rows;
  }
}

export default new reservationsRepository();
