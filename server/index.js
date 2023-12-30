const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.enable("trust proxy");
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes);

app.listen(3001, () => {
  console.log("Server listening on port 3000");
});
