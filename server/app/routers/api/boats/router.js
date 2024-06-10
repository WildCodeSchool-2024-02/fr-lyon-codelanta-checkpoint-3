const express = require("express");

const router = express.Router();


const { browse, edit } = require("../../../controllers/boatActions");

router.get("/", browse);

router.put("/:id", edit);



module.exports = router;