const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll(tables.tile);

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const boats = {
    ...req.body,
    id: req.params.id,
  };

  try {
    await tables.boat.update(boats);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
