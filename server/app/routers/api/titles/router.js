const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// const { add } = require("../../../controllers/tileActions");

// router.post("/", add);

const { browse } = require("../../../controllers/tileActions");

router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
