// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();
var ip = require("ip");

//app.set("trust proxy", true);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/whoami", function (req, res) {
  // Obtener la dirección IP
  const ipaddress = ip.address();

  // Obtener el idioma preferido
  const language = req.headers["accept-language"];

  // Obtener el agente de usuario
  const userAgent = req.headers["user-agent"];

  // Crear el objeto con los datos
  const clientData = {
    ipaddress: ipaddress,
    language: language,
    software: userAgent,
  };

  res.json(clientData);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
