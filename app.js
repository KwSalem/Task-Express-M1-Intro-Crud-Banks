const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const accounts = require("./accounts");

app.get("/accounts", (req, res) => {
  res.send(accounts);
});

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

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
