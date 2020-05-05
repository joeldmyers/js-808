const express = require("express");
const port = process.env.PORT || 8080;
const path = require("path");
const app = express();

// app.use("/", express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(port);
