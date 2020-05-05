const express = require("express");
const port = process.env.PORT || 8080;
const path = require("path");
const app = express();

app.use("/", express.static("public"));
app.use("/dist", express.static("dist"));

app.listen(port);
