var fs = require ("fs");

fs.writeFile("movies.txt", "die, hard", function(err) {
    if(err) return console.error(err);
    console.log("success");
});