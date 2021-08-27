require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/ConnectDB");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  return res.json({ msg: "Api running..." });
});

app.use("/api/products", require("./routers/RouterProducts"));
app.use("/api/orders", require("./routers/RouterOrders"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
