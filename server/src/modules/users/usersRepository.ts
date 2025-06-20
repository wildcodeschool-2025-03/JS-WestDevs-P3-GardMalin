import databaseClient from "../../../database/client";

class usersRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM user");

    return rows;
  }
}

export default new usersRepository();
