const express = require("express");
const app = express();
var port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(port);
