var http = require("http");

var PORT = 3000;

function requestHandler (request, response) {
    response.end("Nice job the server says hello: you requested " + request.url)

}

var server = http.createServer(requestHandler);

server.listen(PORT, function()) {

    console.log("Server is now running on localhost:" + PORT);
}