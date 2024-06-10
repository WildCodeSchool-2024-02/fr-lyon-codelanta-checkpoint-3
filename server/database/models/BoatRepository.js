const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
    SELECT
    b.id,
    b.name,
    b.coord_x,
    b.coord_y,
    t.id AS tile_id,
    t.type,
    t.has_treasure,
    t.coord_x,
    t.coord_y
    FROM 
    boat AS b 
    JOIN 
    tile AS t ON t.coord_x=b.coord_x
    AND t.coord_y=b.coord_y`);

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
