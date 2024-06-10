const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(boat) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    if (boat) {
      const [rows] = await this.database.query(
        `select boat.name, boat.id , tile.coord_x , tile.coord_y , tile.has_treasure , tile.type  from ${this.table} INNER JOIN tile ON boat.coord_x = tile.coord_x && boat.coord_y = tile.coord_y WHERE boat.name = ?`,
        [boat.name]
      );

      // Return the array of boats
      return rows;
    } 
    {
      const [rows] = await this.database.query(
        `select boat.name, boat.id , tile.coord_x , tile.coord_y , tile.has_treasure , tile.type  from ${this.table} INNER JOIN tile ON boat.coord_x = tile.coord_x && boat.coord_y = tile.coord_y`
      );
      return rows;
    }
  }

  async update(boat) {
    const [result] = await this.database.query(
      `Update boat set coord_x = ${boat.coord_x}, coord_y=${boat.coord_y} where id=${boat.id}`
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
