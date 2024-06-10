/* eslint-disable camelcase */
const validateCoord = (req, res, next) => {
  const { coord_x, coord_y } = req.body;

  // si il y a plusieurs truc => const { name, exemple1 } = req.body;

  const errors = [];

  // put your validation rules here
  if (coord_x < 0 && coord_x <= 11 && coord_y > 0 && coord_y <= 5) {
    next();
  } else {
    res.status(422).json({ validationErrors: errors });
  }
};

module.exports = validateCoord;
