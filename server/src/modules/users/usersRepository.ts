// import databaseClient from "../../../database/client";
import databaseClient, { type Rows } from "../../../database/client";

class usersRepository {
  async readByEmail(email: string) {
    const [user] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    return user[0];
  }

  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM user");

    return rows;
  }
}

export default new usersRepository();
