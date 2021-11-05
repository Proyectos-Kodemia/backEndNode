const express = require("express");
const config = require("./lib/config");
const apiRouter = require("./routes/index.js");
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
const authHandler = require("./middlewares/authHandlers");
const cors = require("cors");
const db = require("./lib/db");
const apiRouter = require("./routes");

const app = express();
const port = config.app.port;

app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

apiRouter(app);

// app.use(logErrors);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
  db.connect()
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.error("Connection refused", err);
    });
});
