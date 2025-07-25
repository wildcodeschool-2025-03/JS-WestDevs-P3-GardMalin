import databaseClient, {
  type Result,
  type Rows,
} from "../../../database/client";

class kidsRepository {
  async readAll() {
    const [rows] = await databaseClient.query("SELECT * FROM kid");

    return rows;
  }

  async create(body: Kid) {
    const [kid] = await databaseClient.query<Result>(
      "INSERT INTO kid (gender, firstname, lastname, age, walker, allergy, handicap, parent_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ",
      [
        body.gender,
        body.firstname,
        body.lastname,
        body.age,
        body.walker,
        body.allergy,
        body.handicap,
        body.parent_id,
      ],
    );
    return kid.affectedRows;
  }

  async readById(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM kid WHERE parent_id = ?",
      [id],
    );
    return rows;
  }
  async readByUserId(userId: number) {
    const [rows] = await databaseClient.query(
      `SELECT kid.* FROM kid
     JOIN parent ON kid.parent_id = parent.id
     JOIN user ON parent.user_id = user.id
     WHERE user.id = ?`,
      [userId],
    );
    return rows;
  }

  async update(kid: Kid) {
    const { id, gender, firstname, lastname, age, walker, allergy, handicap } =
      kid;

    const [result] = await databaseClient.query<Result>(
      "UPDATE kid SET gender = ?, firstname = ?, lastname = ?, age = ?, walker = ?, allergy = ?, handicap = ? WHERE id = ?",
      [gender, firstname, lastname, age, walker, allergy, handicap, id],
    );
    return result.affectedRows;
  }
}

export default new kidsRepository();
