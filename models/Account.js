const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      null: false,
    },
    funds: {
      type: Number,
      default: 0,
    },
    // // Add other fields as needed, for example:
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields
  }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
