const express = require("express");

const router = express.Router();

const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactions");

router.route("/").get(getTransactions).post(addTransactions);

router.route("/:id").delete(deleteTransactions);
// eslint-disable-next-line no-undef
module.exports = router;
