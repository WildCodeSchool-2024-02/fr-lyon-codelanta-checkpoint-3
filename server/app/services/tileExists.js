const tables = require("../../database/tables");


const tileExist = async (req , res , next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  const tilesExist = await tables.tile.readByCoordinates(coordX, coordY);
  const errors = [];
  if (tilesExist.length === 0 ){
    errors.push("Tile doesn't exist");
    res.sendStatus(422)
  }
  else {
    next()
  }

}


module.exports = tileExist;
