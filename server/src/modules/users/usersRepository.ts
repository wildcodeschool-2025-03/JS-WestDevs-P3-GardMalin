// import databaseClient from "../../../database/client";
import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class usersRepository {
  async create(body: User) {
    const [user] = await databaseClient.query<Result>(
      "INSERT INTO user (email, password) VALUE (?, ?)",
      [body.email, body.password],
    );

    return user.affectedRows;
  }

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
