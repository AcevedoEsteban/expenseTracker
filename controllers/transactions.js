// @desc get all transactions
// @ route GET /api/v1/transaction
// @ acess Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

// @desc ADD transactions
// @ route POST /api/v1/transaction
// @ acess Public
exports.addTransactions = (req, res, next) => {
  res.send('Post transaction ');
};

// @desc DELETE transactions
// @ route DELETE /api/v1/transaction:id
// @ acess Public
exports.deleteTransactions = (req, res, next) => {
  res.send('DELETE transaction');
};
