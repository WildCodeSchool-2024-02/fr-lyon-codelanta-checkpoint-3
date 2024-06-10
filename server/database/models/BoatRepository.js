const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(boat) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    if (boat) {
      const [rows] = await this.database.query(
        `select b.id, name, b.coord_x, b.coord_y, t.id as tile_id, type, has_treasure from ${this.table} b inner join tile t on b.coord_x = t.coord_x and b.coord_y = t.coord_y where b.name = ?`,
        [boat.name]
      );
      return rows;
    }

    const [rows] = await this.database.query(
      `select b.id, name, b.coord_x, b.coord_y, t.id as tile_id, type, has_treasure from ${this.table} b inner join tile t on b.coord_x = t.coord_x and b.coord_y = t.coord_y`
    );
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
