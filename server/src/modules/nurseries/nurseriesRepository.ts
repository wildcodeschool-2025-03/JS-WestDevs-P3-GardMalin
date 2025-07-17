import databaseClient, { type Rows } from "../../../database/client";

class nurseriesRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM nursery");

    return rows;
  }

  async readByDate(date: string) {
    const [rows] = await databaseClient.query(
      "SELECT nursery.*, COUNT(CASE WHEN reservation.is_validated = TRUE THEN 1 END) AS validated_count FROM nursery LEFT JOIN reservation ON nursery.id=reservation.nursery_id AND reservation.date= ? GROUP BY nursery.id HAVING nursery.capacity > validated_count;",
      [date],
    );

    return rows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM nursery WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async readByUserId(user_id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM nursery WHERE user_id = ?",
      [user_id],
    );
    return rows[0];
  }
}

export default new nurseriesRepository();
