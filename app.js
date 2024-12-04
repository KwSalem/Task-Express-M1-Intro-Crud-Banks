const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const accounts = require("./accounts");

// app.get("/accounts", (req, res) => {
//   res.send(accounts);
// });

const createNewAccount = (newAccountData) => {
  console.log("Creating new Account", newAccountData);
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, newAccountData);
  console.log("My new account is: ", newAccount);
  return newAccount;
};

app.post("/accounts", (req, res) => {
  const newAccount = createNewAccount(req.body);
  res.status(201).json(newAccount);
});

const deleteAccount = (accountIdToBeDeleted) => {
  const newAccount = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
  console.log("My new books are: ", newAccount);
};

app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    deleteAccount(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
});

const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};

app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const UpdatedAccount = updateAccount(account, req.body);
    res.status(200).json(UpdatedAccount);
  } else {
    res.status(404).json();
  }
});

app.get("/accounts", (req, res) => {
  // Accessing query parameters
  const username = req.query.username;
  const funds = req.query.funds;

  console.log(`Username: ${username}, Funds: ${funds}`);
  let result = accounts;
  if (username) {
    result = result.filter((account) => account.username.includes(username));
  }
  if (funds) {
    result = result.filter((account) => account.funds == funds);
  }
  res.json(result);
});

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
