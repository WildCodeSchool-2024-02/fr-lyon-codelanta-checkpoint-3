const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`

    SELECT boat.id, boat.name, boat.type, tile.id, tile.coord_x, tile.coord_y
FROM ${this.table}
JOIN tile ON boat.tile_id = tile.id;
    `);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [resu] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return resu.affectedRows;
  }
}

module.exports = BoatRepository;
