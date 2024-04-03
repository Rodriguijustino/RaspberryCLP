// npm i express
const express = require("express"); //importa a framework
var bodyParser = require("body-parser");
const app = express(); //atribui o nome da framework ao nome app
var jsonParser = bodyParser.json();
// npm i cors
var cors = require("cors");
app.use(cors());

var liga  = 0;
var desliga = 0;
var restart = 0;


//usa o express para monitorar a porta 8080 e capturar os requests feitos pelo POST
app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });

  //armazena o valor recebido pela rede na variável bit
  liga = req.body.liga;
  desliga = req.body.dsliga;
  restart = req.body.restart;
  

  res.end();
});

app.get("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      liga: liga,
      desliga: desliga,
      restart: restart,
    }),
  );
  res.end();
});

app.listen(3000);