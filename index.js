const express = require("express");

const cors = require("cors");

const app = express();

const port = 8080;

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(cors());
app.use(express.json());

const visitanteRoutes = require("./src/routes/visitanteRoutes");
const userRoutes = require("./src/routes/userRoutes");

// const server = http.createServer((req, res) => {
//   console.log(`Server is running at port ${port} and ${url}`);
//   const pathName = req.url;
// });

app.get("/", (req, res) => {
  return res.send(
    JSON.stringify({
      type: "success",
      message: "Server is running",
    })
  );
});

app.get('/', (req, res) => {
  return res.send('Hello World');
});
// Query params' -> Params that are sent in the URL
app.get('/test', (req, res) => {
  const name = req.query.name;
  if (name) {
    return res.json(`Requisition ${name} received`);
  }
  return res.send('Acess not granted');
});

// Route params -> Params that are sent in the route
app.get('/test/:name', (req, res) => {
  const name = req.params.name;
  return res.json(`Requisition ${name} received`);
});
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/users', userRoutes);
app.use('/visitante', visitanteRoutes);

app.all("*", (req, res) => {
  return res.send(
    JSON.stringify({
      type: "error",
      message: "This endpoint does not exist",
    })
  );
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
