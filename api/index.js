var express = require("express");

var cors = require("cors");
const { request } = require("express");
var app = express();
var expressWs = require("express-ws")(app);
var aWss = expressWs.getWss("/");

app.use(cors());
app.use(express.json());
const ISSUES = [];
let id = 0;

app.ws("/subscribe", function (ws, req) {
  ws.on("message", function (msg) {});
});

app.get("/getlist/", function (req, res, next) {
  res.json({
    list: ISSUES,
  });
});

app.post("/save/", function (req, res, next) {
  let data = req.body;
  if (data) {
    data["id"] = id;
    id++;
    data["createdDate"] = new Date()
      .toISOString()
      .replace("T", " ")
      .substr(0, 19);
    ISSUES.push(data);
    aWss.clients.forEach((client) => {
      client.send(JSON.stringify(data));
    });
  } else return res.status(400).json({ reason: "Not a valid data!" });
  res.status(201).json({
    success: true,
  });
});

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 8080");
});
