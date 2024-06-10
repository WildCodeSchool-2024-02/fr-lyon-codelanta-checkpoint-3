const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`   
    SELECT 
    boat.id, 
    boat.name, 
    boat.coord_x, 
    boat.coord_y, 
    tile.id AS tile_id, 
    tile.type, 
    tile.coord_x, 
    tile.coord_y, 
    tile.has_treasure
          FROM boat
          JOIN tile ON boat.coord_x = tile.coord_x
          AND boat.coord_y = tile.coord_y`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
