const express = require("express");

const cors = require("cors");

const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

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
