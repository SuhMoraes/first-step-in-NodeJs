var http = require("http");

http.createServer(function(require, response){
  response.end("<h1>Bem vindo ao meu site!</h1>")
}).listen(8181);
console.log("Servidou Rodou!");