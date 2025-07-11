import databaseClient from "../../../database/client";

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
}

export default new nurseriesRepository();
