// const AbstractRepository = require("./AbstractRepository");

// class AlbumRepository extends AbstractRepository {
//   constructor() {
//     super({ table: "album" });
//   }

//   async readAll() {
//     // Execute the SQL SELECT query to retrieve all boats from the "boat" table
//     const [rows] = await this.database.query(`select * from ${this.table}`);

//     // Return the array of boats
//     return rows;
//   }
// }

// module.exports = AlbumRepository;
