const {graficoPorGenero, create, listAll} = require("../controllers/visitanteController");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await controller.listAll());
});

router.post("/", async (req,res) => {
  res.send(await controller.create(req.body));
})

router.get("/grafico-por-genero", async (req, res) => {
  res.send(await graficoPorGenero());
});

// router.get("/visitantes", async (req, res) => {
//   return res.send(await controller.listAll());
// });

// router.post("/visitantes", async (req, res) => {
//   return res.send(await controller.create(req.body));
// });

module.exports = router;
