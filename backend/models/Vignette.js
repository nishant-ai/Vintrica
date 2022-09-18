const mongoose = require("mongoose");

const vignetteSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  vehicleCategory: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  countryOfRegistration: {
    type: String,
    required: true,
  },
  validityPeriod: {
    type: String,
    required: true,
  },
});

const Vignette = mongoose.model("Vignette", vignetteSchema);
module.exports = Vignette;
