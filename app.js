const express = require("express");
const app = express();
const port = 8000;
const accountRouter = require("./apis/account/routes");
const connectDb = require("./database");

app.use(express.json());

app.use("/api/accounts", accountRouter);

connectDb().catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
