/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
        SELECT 
            boat.id AS id, 
            boat.name, 
            boat.coord_x AS coord_x, 
            boat.coord_y AS coord_y,
            tile.id AS tile_id, 
            tile.type, 
            tile.coord_x AS tile_coord_x, 
            tile.coord_y AS tile_coord_y,
            tile.has_treasure
        FROM 
            boat
        JOIN 
            tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
    `);

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
