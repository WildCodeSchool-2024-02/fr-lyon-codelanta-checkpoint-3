const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read, edit, add } = require("../../../controllers/boatActions");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", edit);

router.post("/", add);

/* ************************************************************************* */

module.exports = router;
