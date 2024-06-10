const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  const tiles = await tables.tile.readByCoordinates(
    req.params.coord_x,
    req.params.coord_y
  );

  if (tiles.length > 0) {
    next();
  } else {
    res.status(422);
  }
};

module.exports = tileExists;
