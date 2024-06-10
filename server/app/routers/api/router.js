const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boatsRouter = require("./boats/router");

router.use("/boats", boatsRouter);

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

// const albumsRouter = require("./albums/router");

// router.use("/albums", albumsRouter);

/* ************************************************************************* */

module.exports = router;
