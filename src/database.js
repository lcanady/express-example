const mongoose = require("mongoose");

// Start the Database
mongoose.connect(process.env.HOST, { useNewUrlParser: true });
const db = mongoose.connection;

// Listen for db connection errors.
db.on("error", (err) => {
  console.errpr(err);
  process.exit(1);
});

// Export the instance of db to be used in other areas of our program.
module.exports = db;
