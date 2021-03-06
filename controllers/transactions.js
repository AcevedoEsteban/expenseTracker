/* eslint-disable no-unused-vars */
const Transaction = require("../models/Transaction");

// @desc get all transactions
// @ route GET /api/v1/transaction
// @ acess Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.lengths,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};

// @desc ADD transactions
// @ route POST /api/v1/transaction
// @ acess Public
exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        sucess: false,
        error: messages,
      });
    }

    return res.send(500).json({
      success: false,
      error: "server error",
    });
  }
};
// @desc DELETE transactions
// @ route DELETE /api/v1/transaction:id
// @ acess Public
// eslint-disable-next-line no-undef
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "no transaction fund",
      });
    }
    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: "server error",
    });
  }
};
