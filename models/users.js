const mongoose = require("mongoose");

// This is where we define whatever fields we want in our datababase objects.
// https://mongoosejs.com/docs/schematypes.html
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

// Export the schema to be used in other places!
const User = mongoose.model("User", userSchema);
module.exports = User;
