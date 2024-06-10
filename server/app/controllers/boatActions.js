const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const updateBoat = await tables.boat.update(req.body);
    res.status(204).json(updateBoat);

  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
 edit,
};
