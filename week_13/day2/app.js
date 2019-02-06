// var http = require("http");

// var PORTONE = 3000;
// var PORTTWO = 8080;
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function requestHandlerOne (request, response) {
//     response.end("Nice job the server says hello: you requested " + request.url)
// }

// function requestHandlerTwo (request, response) {
//     response.end("Buen trabajo, el server dice hola: tu pediste " + request.url)
// }
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var serverOne = http.createServer(requestHandlerOne);
// var serverTwo = http.createServer(requestHandlerTwo);

// serverOne.listen(PORT1, function() {
//     console.log("Server is now running on localhost:" + PORT1);
// })

// server.listen(PORT1, function) {

// console.log("Server 2 is now running on localhost:" + PORT2);
// })

// server.listen(PORT, function) {

// })




var http = require("http");

var PORT_ONE = 7000;
var PORT_TWO = 7500;

function requestHandlerOne(request, response) {
    response.end("You are good at javascript");
}
function requestHandlerTwo(request, response) {
    response.end("You suck at css");
}


var serverOne = http.createServer(requestHandlerOne);
var serverTwo = http.createServer(requestHandlerTwo);

serverOne.listen(PORT_ONE, function() {
    console.log("Server is now running on localhost:" + PORT_ONE);
})
serverTwo.listen(PORT_TWO, function() {
    console.log("Server is now running on localhost:" + PORT_TWO);
})