const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/API-4PM")
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => console.log(err));
};


module.exports = dbConnect();