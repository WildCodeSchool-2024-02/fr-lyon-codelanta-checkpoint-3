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

  async update(boat){
    const [result] = await this.database.query(`Update boat set coord_x = ${boat.coord_x}, coord_y=${boat.coord_y} where id=${boat.id}`)

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
