var fs = require("fs");

fs.readFile("best_things_ever.txt, "utf8", function(err, data) {
    if(err) return console.error(err);
    console.log(data.split(","))
})

var str = "lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap";
