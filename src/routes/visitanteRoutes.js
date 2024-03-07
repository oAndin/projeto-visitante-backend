const {
  graficoPorGenero,
  graficoPorCidade,
  create,
  listAll,
} = require("../controllers/visitanteController");

const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await listAll());
});

router.post("/", async (req, res) => {
  res.send(await create(req.body));
});

router.get("/grafico-por-genero", async (req, res) => {
  res.send(await graficoPorGenero());
  // #swagger.tags = ['Visitantes por gênero']
  // #swagger.summary = "Este endpoint devolve um array de objetos contendo o nome do gênero e o total"
});

router.get("/grafico-por-cidade", async (req, res) => {
  res.send(await graficoPorCidade());
});

// router.get("/visitantes", async (req, res) => {
//   return res.send(await controller.listAll());
// });

// router.post("/visitantes", async (req, res) => {
//   return res.send(await controller.create(req.body));
// });

module.exports = router;
