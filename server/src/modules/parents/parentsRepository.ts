import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class parentsRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM parent");

    return rows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM parent WHERE id = ?",
      [id],
    );

    return rows[0];
  }

  async create(body: Parent) {
    const [newParentarent] = await databaseClient.query<Result>(
      "INSERT INTO parent ( firstname, lastname, street,  postal_code, city, phone_number, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        body.firstname,
        body.lastname,
        body.street,
        body.postal_code,
        body.city,
        body.phone_number,
        body.user_id,
      ],
    );
    return newParentarent.affectedRows;
  }

  async update(parent: Parent) {
    const { id, firstname, lastname, street, postal_code, city, phone_number } =
      parent;

    const [result] = await databaseClient.query<Result>(
      "UPDATE parent SET firstname = ?, lastname = ?, street = ?, postal_code = ?, city = ?, phone_number= ? WHERE id = ?",
      [firstname, lastname, street, postal_code, city, phone_number, id],
    );
    return result.affectedRows;
  }

  async delete(id: string) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM parent WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new parentsRepository();
