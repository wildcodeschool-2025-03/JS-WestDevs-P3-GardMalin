import databaseClient from "../../../database/client";

class kidsRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM kid");

    return rows;
  }
}

export default new kidsRepository();
