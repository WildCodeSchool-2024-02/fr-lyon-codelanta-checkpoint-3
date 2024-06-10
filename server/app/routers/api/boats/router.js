const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");

router.put("/:id", edit);

router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
