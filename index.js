const express = require("express");
const cors = require("cors");
const SalesManRoute = require("./routes/SalesmanRoutes");
const globalResponseHandler = require("./middleware/globalResponseHandler");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const { Salesman } = require("./models/SalesmanSchema");

require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(globalResponseHandler);

Salesman.sync()
  .then(() => {
    console.log("Client model synced");
  })
  .catch((error) => {
    console.error("Error syncing Client model:", error);
  });
app.get("/", (req, res) => {
  console.log("ERP Backend");
});
app.use("/api", SalesManRoute);
// app.use("/api", userSchemaRoute);
// app.use("/api", utilsRoute);

app.all('*', (req, res, next) => {
  const error = new Error(`Cannot find ${req.originalUrl} on this server!`);
  error.statusCode = 404;
  next(error);
});


app.use(globalErrorHandler);


app.listen(port, () => {
  console.log("server is live on 5000");
});
