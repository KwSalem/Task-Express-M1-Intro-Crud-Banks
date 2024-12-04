const express = require("express");
const app = express();
const port = 8000;
const accountRouter = require("./apis/account/routes");

app.use(express.json());

app.use("/api/accounts", accountRouter);

app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});
