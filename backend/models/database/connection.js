const mongoose = require("mongoose");

const DB =
  "mongodb+srv://vintricaAdmin:<password>@cluster0.mtp9uk3.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection succesful`);
  })
  .catch((err) => {
    console.log(`this is err ${err}`);
  });
