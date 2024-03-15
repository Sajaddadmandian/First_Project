const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  // Handle form submission here
  const { username, password } = req.body;
  console.log(`Username: ${username}, Password: ${password}`);
  res.redirect("/");
});

// Start server
app.listen(6500, () => {
  console.log("Server started on port 3000");
});
