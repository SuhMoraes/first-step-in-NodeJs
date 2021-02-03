
var http = require('http');

servidor = http.createServer(function (req,res){
  res.end("<html><body><h1> Conseguiiiiiiii!!! </h1> </body></html>");
}).listen(3000);
console.log("Estamos no ar!");