const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const $ = require("jquery");
const port = 3000;

let rating = 0;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/confirmation", (req, res) => {
  console.log(req.params);
  res.redirect("confirmation");
});

app.get("/confirmation", (req, res) => {
  res.render("confirmation", {rating: rating});
});

app.listen(process.env.PORT || port, function() {
  console.log(`Server started on port: ${port}`);
});
