import databaseClient from "../../../database/client";

class nurseriesRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM nursery");

    return rows;
  }
}

export default new nurseriesRepository();
