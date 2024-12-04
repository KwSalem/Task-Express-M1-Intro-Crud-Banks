const accounts = require("../../accounts");

exports.listAccountsController = (req, res) => {
  const username = req.query.username;
  const funds = req.query.funds;

  let result = accounts;
  if (username) {
    result = result.filter((account) => account.username.includes(username));
  }
  if (funds) {
    result = result.filter((account) => account.funds == funds);
  }
  res.json(result);
};

exports.getAccountByIdController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    res.status(200).json(account);
  } else {
    res.status(404).json({ error: "Account not found" });
  }
};
const createNewAccount = (newAccountData) => {
  console.log("Creating new Account", newAccountData);
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, newAccountData);
  console.log("My new account is: ", newAccount);
  return newAccount;
};
exports.createAccountController = (req, res) => {
  const newAccount = createNewAccount(req.body);
  res.status(201).json(newAccount);
};

exports.updateAccountController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const UpdatedAccount = updateAccount(account, req.body);
    res.status(200).json(UpdatedAccount);
  } else {
    res.status(404).json({ error: "Account not found" });
  }
};
const deleteAccount = (accountIdToBeDeleted) => {
  const newAccount = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
  console.log("My new books are: ", newAccount);
};

exports.deleteAccountController = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Account not found" });
  }
};
