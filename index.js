const express = require("express");
const apiRouter = require("./routes");
const config = require("./lib/config");
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
const authHandler = require("./middlewares/authHandlers");
const cors = require("cors");
const db = require("./lib/db");

const app = express();
const port = config.app.port;

app.use(cors());

app.use(express.json());

// app.get("/", (request, response) => {
//   response.send("Hello World!");
// });

apiRouter(app);
console.log("iniciando")
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
