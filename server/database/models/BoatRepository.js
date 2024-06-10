/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const { id, coord_x, coord_y } = boat;
    const query = `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`;
    const rows = [coord_x, coord_y, id];
    const [result] = await this.database.query(query, rows);
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
