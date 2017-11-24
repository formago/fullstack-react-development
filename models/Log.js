const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema({
  date: Date,
  action: String,
  email: String,
  profileName : String
});

mongoose.model("logs", logSchema);
