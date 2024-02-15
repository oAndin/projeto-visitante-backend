const express = require("express");

const controller = require("../controllers/userController");

const router = express.Router();

router.get("/visitantes", async (req, res) => {
  return res.send(await controller.listAll());
});

router.post("/visitantes", async (req, res) => {
  return res.send(await controller.create(req.body));
});

router.get("/", async (req,res) => {
  return res.send(await controller.listAll());
})

router.post("/", async (req, res) => {
  return res.send(await controller.login(req.body));
});

module.exports = router;
