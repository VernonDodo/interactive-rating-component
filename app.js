const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const $ = require("jquery");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let rating = 0;

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/confirmation", (req, resp) => {
  console.log(req);
  res.redirect("confirmation", {rating: rating});
});

app.get("/confirmation", (req, res) => {
  res.render("confirmation", {rating: rating});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
