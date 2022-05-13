const express = require("express");
var bodyParser = require("body-parser");

const defaultFunction = require("./users");

const server = express();
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/users", getUsers);

server.post("/users", createUsers);

server.listen("7890", () => {
  console.log("app started on port 7890");
});
