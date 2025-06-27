import databaseClient, { type Rows } from "../../../database/client";

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
}

export default new parentsRepository();
