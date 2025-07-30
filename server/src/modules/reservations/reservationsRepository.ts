import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class reservationsRepository {
  async readAll(date: string, nurseryId: number) {
    const [rows] = await databaseClient.query(
      `SELECT 
      reservation.kid_id,
      reservation.nursery_id,
      reservation.date,
      reservation.is_validated,
      kid.firstname AS kid_firstname,
      kid.lastname AS kid_lastname,
      kid.gender AS kid_gender,
      kid.age AS kid_age,
      nursery.name AS nursery_name,
      nursery.capacity AS nursery_capacity
    FROM reservation
    INNER JOIN kid ON reservation.kid_id = kid.id
    INNER JOIN nursery ON reservation.nursery_id = nursery.id
    WHERE reservation.nursery_id = ?
    AND reservation.date = ? `,
      [nurseryId, date],
    );
    return rows;
  }

  async getNurseryId(professionalId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT u.*, nursery.id as nursery_id FROM `user` as u JOIN nursery ON u.id = nursery.user_id WHERE u.id = ?",
      [professionalId],
    );
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
    is_validated: boolean;
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

  async readByUserId(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT r.*, k.firstname AS kid_firstname, k.lastname AS kid_lastname, n.name AS nursery_name
     FROM reservation r
     JOIN kid k ON r.kid_id = k.id
     JOIN nursery n ON r.nursery_id = n.id
     WHERE k.parent_id = ?`,
      [userId],
    );
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

  async updateValidation(
    kidId: number,
    date: string,
    nurseryId: number,
    is_validated: number,
  ) {
    const [result] = await databaseClient.query<Result>(
      `UPDATE reservation
       SET is_validated = ?
       WHERE kid_id = ? AND date = ? AND nursery_id = ?`,
      [is_validated, kidId, date, nurseryId],
    );

    return result.affectedRows;
  }
}

export default new reservationsRepository();
