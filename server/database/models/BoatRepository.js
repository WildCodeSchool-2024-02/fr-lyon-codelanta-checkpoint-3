const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
   
    select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure from ${this.table} join tile ON tile.coord_x = ${this.table}.coord_x AND tile.coord_y = ${this.table}.coord_y;
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
