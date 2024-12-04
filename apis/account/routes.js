const express = require("express");
const router = express.Router();

const {
  listAccountsController,
  getAccountByIdController,
  createAccountController,
  updateAccountController,
  deleteAccountController,
} = require("./controllers");

router.get("/", listAccountsController);
router.get("/:accountId", getAccountByIdController);

router.post("/", createAccountController);
router.put("/:accountId", updateAccountController);

router.delete("/:accountId", deleteAccountController);

module.exports = router;
