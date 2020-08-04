// Dependencies and modules
const express = require("express");
const path = require("path");
// Tells node that we are creating an express server
const app = express();
// Calls mongoose an odm for MongoDB
const mongoose = require("mongoose");
// Sets an initial PORT that will listen for requests from the client side
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

// Middleware = function that will be executed in between request and responses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Connect to the Mongo DB and Api routes will go here
app.use(routes);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/coursedb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the the DB!"),
);

// Send every other request to the React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// Starts the server and syncing models

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
