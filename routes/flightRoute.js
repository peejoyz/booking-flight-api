const express = require("express");
const router = express.Router();
const controller = require("../controller/flightController");

router
.get("/", controller.getAllFlight)
.get("/:id", controller.getSingleFlight)
.post("/", controller.bookFlight)
.put("/:id", controller.updateFlight)
.delete("/:id", controller.deleteFlight);

module.exports = router;
