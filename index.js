const express = require("express");

const cors = require("cors");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello World');
});
app.get('/test', (req, res) => {
  return res.send('Acess granted');
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
  console.log(`Server is running on port ${port}`);
});
