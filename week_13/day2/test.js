var http = require("http");

var PORT = 3000;
function displayPortfolio(req, res) {
    var html = `
        <html>
            <body> 
                <h1>Portfolio</h1>
                <a href = "/">Home</a>
            </body>
        </html>
    `;
    res.writeHead(200, { "Content-Type": "text/html" });    
    res.end(html);
}
function displayHome(req, res) {
    var html = `
        <html>
            <body> 
                <h1> HOME PAGE </h1>
                <a href = "/portfolio">portfolio</a>
            </body>
        </html>
    `;
    res.writeHead(200, { "Content-Type": "text/html" });    
    res.end(html);
}
function display404(req, res) {
    var html = `
        <html>
            <body> 
                <h1> 404 page not found </h1>
                <a href = "/">go home</a>
            </body>
        </html>
    `;
    res.writeHead(404, { "Content-Type": "text/html" });    
    res.end(html);
}
function requestHandler(req, res) {
    var path = req.url;
    if(path === '/') {
        displayHome(req, res);
    }
    else if(path === "/portfolio") {
        displayPortfolio(req, res);
    }
    else {
        // not found case
        display404(req, res);
    }
}

var server = http.createServer(requestHandler);

server.listen(PORT, function() {
    console.log("Server is now running on localhost:" + PORT);
});