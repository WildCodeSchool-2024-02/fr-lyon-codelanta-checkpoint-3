const tables = require("../../database/tables");

async function tileExists(req, res, next) {
  try {
    if (
      req.body.coord_x >= 0 &&
      req.body.coord_x <= 11 &&
      req.body.coord_y >= 0 &&
      req.body.coord_y <= 5
    ) {
      await tables.tile.readByCoordinates(req.body.coord_x, req.body.coord_y);
      next();
    } else {
      res.sendStatus(422);
    }
  } catch {
    res.sendStatus(422);
  }
}

module.exports = tileExists;
