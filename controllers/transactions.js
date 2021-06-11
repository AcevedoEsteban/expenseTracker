// @desc get all transactions
// @ route GET /api/v1/transaction
// @ acess Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};
