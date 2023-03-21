let express = require("express");
let app = express();
let ejs = require("ejs");
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.render("index");
});

app.listen(port);
