const controller = require("../controllers/visitanteController");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await controller.listAll());
});

module.exports = router;
