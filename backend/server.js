// Module imports
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// server config
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB config
require("./models/database/connection");
// Schema Imports
const Vignette = require("./models/Vignette");

// Routes
app.get("/", async (req, res) => {
  const allVignettes = await Vignette.find();

  try {
    res.json(allVignettes);
  } catch (err) {
    res.send(err);
  }
});

app.post("/", async (req, res) => {
  // Values from JSON post
  console.log("POST incoming!");
  console.log(req.body);

  const vignette = new Vignette(req.body);

  // Save or throw error
  try {
    console.log("try block!");
    const response = await vignette.save();
    console.log(response);
    res.send(response);
  } catch (error) {
    console.log("catch block!");
    console.log(error);
    res.send(error);
  }
});

// app listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
