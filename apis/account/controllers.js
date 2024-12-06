// const accounts = require("../../accounts");
const Account = require("../../models/Account");

// This function is responsible for listing all accounts
exports.listAccountsController = async (req, res) => {
  try {
    const accounts = await Account.find().select("-createdAt -updatedAt");
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// This function is responsible for retrieving a single account
exports.getAccountByIdController = async (req, res) => {
  const { accountId } = req.params;
  const account = await Account.findById(accountId);
  if (account) {
    res.status(200).json(account);
  } else {
    res.status(404).json({ error: "Account not found" });
  }
};

// This function is responsible for creating a new account
exports.createAccountController = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// This function is responsible for retrieving VIP accounts
// It takes a minBalance query parameter
// Returns a list of accounts with funds greater than the specified minBalance
exports.getVIPAccountsController = async (req, res) => {
  try {
    const minBalance = parseInt(req.query.minBalance);

    if (isNaN(minBalance)) {
      return res.status(400).json({
        error: "Invalid minBalance query parameter. Must be an integer.",
      });
    }
    const vipAccounts = await Account.find({
      funds: { $gt: minBalance },
    }).select("-createdAt -updatedAt");
    res.json(vipAccounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// This function is responsible for updating an existing account
exports.updateAccountController = async (req, res) => {
  console.log(req.body);
  try {
    const accountId = req.params.accountId;
    const foundAccount = await Account.findById(accountId);

    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ error: "This account doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// This function is responsible for deleting an existing account
exports.deleteAccountController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const foundAccount = await Account.findById(accountId);

    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "This account doesn't exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
