const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hit the root API route!");
  res.status(200).json({ message: "You made it!" });
});

router.get("/test/:id", (req, res) => {
  res.status(200).json({ message: `Id entered: ${req.params.id}` });
});

module.exports = router;
