const express = require("express");
const router = express.Router();
// This file is responsible for defining the routes for the accounts
const {
  listAccountsController,
  getAccountByIdController,
  createAccountController,
  updateAccountController,
  deleteAccountController,
  getVIPAccountsController,
} = require("./controllers");

// This route is responsible for listing all accounts
router.get("/", listAccountsController);

// This route is responsible for retrieving a single account by username and optional funds query string
router.get("/:accountId", getAccountByIdController);

// This route is responsible for retrieving VIP accounts
router.get("/vip-accounts", getVIPAccountsController);

// This route is responsible for creating a new account
router.post("/", createAccountController);

// This route is responsible for updating an existing account with new data provided in the request body.
router.put("/:accountId", updateAccountController);

// This route is responsible for deleting an existing account by ID
router.delete("/:accountId", deleteAccountController);

module.exports = router;
