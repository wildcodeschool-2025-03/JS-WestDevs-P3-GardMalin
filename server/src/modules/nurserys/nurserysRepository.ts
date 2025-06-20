import databaseClient from "../../../database/client";

class nurserysRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM nursery");

    return rows;
  }
}

export default new nurserysRepository();
