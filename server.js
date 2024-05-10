require("./config/db");

const app = require("express")();
const port = process.env.PORT || 5000;

const UserRouter = require("./api/User");

const bodyParser = require("express").json;
app.use(bodyParser());

app.use("/user", UserRouter);
// cors accesss to enable application on different hosts to send request
const cors = require("cors");
app.use(cors());
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
