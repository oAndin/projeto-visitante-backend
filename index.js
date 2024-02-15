const express = require("express");

const cors = require("cors");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

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

app.all("*", (req, res) => {
  return res.send(
    JSON.stringify({
      type: error,
      message: "This endpoint does not exist",
    })
  );
});

app.listen(port, () => {
  console.log();
  console.log(`Server is running on port ${port}`);
});
