const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const api = require("./routes/api");
require("dotenv").config();
const db = require("./src/database");

// Create a new instance of the express appplication
const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ extended: true }));

// Routes
// A simple route that spits out a message on http://localhost:4000/
app.get("/", (_, res) =>
  res.status(200).json({
    message: "You made it!",
  })
);

// This is where we put our custom routes.
app.use("/api", api);

// Once the DB successfully connects, start the express server!
db.once("open", () =>
  app.listen(process.env.PORT || 4000, () =>
    console.log(`Express connected on port ${process.env.PORT || 4000}`)
  )
);
