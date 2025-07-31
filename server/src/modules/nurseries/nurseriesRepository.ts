import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

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

  async create(body: Nursery) {
    const [nursery] = await databaseClient.query<Result>(
      "INSERT INTO nursery (name, siret, street, postal_code, city, phone_number, description, capacity, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        body.name,
        body.siret,
        body.street,
        body.postal_code,
        body.city,
        body.phone_number,
        body.description,
        body.capacity,
        body.user_id,
      ],
    );
    return nursery.affectedRows;
  }

  async update(body: Nursery, user_id: string) {
    const [rows] = await databaseClient.query<Result>(
      "UPDATE nursery SET name = ?, siret = ?, street = ?, postal_code = ?, city = ?, phone_number = ?, description = ? WHERE user_id = ?",
      [
        body.name,
        body.siret,
        body.street,
        body.postal_code,
        body.city,
        body.phone_number,
        body.description,
        user_id,
      ],
    );

    return rows.affectedRows;
  }

  async delete(id: string) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM nursery WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new nurseriesRepository();
