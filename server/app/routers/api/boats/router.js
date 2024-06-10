const express = require("express");

const router = express.Router();

const tileExist = require("../../../services/tileExists")
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");

router.get("/", browse);

router.put("/:id" ,tileExist, edit);

/* ************************************************************************* */

module.exports = router;
