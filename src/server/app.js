const express = require("express");
const app = express();
const PORT = 3001;

const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  res.json("server data");
});
app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});
