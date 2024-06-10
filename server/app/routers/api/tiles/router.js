const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/tilesActions");

// const tileExists = require("../../../services/tileExists");

router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
