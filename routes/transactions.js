const express = require("express");

const router = express.Router();

const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactions");

router.route("/:id").delete(deleteTransactions);

router.route("/").get(getTransactions).post(addTransactions);
module.exports = router;
