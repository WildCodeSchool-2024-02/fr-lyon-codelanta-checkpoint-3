const readByCoordinates = (req, res, next) => {
  const errors = [];

  // Validation des coordonnées

  if (req.body.coord_x === 0 || req.body.coord_y === 0) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = readByCoordinates;
