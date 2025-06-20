import databaseClient from "../../../database/client";

class parentsRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM parent");

    return rows;
  }
}

export default new parentsRepository();
