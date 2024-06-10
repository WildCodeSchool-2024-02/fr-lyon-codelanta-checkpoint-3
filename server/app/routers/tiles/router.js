const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../controllers/tilesActions")

router.get("/", browse);

// const tileExist = require("../../services/tileExists")

router.get("/:id",browse);

/* ************************************************************************* */

module.exports = router;
