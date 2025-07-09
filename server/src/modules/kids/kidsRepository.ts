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
}

export default new kidsRepository();
