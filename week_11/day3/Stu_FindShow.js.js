var axios = require("axios");
var fs = require("fs");

var TV = function() {
    var divider = "\n----------------------\n";
    this.findShow = function(show) {
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        axios.get(URL)
        .then(function(resp) {
            var showRespData = resp.data;
            var showData = [
                "Show: " + showRespData.name,
                "Genre(s): " + showRespData.genres.join(),
                "Rating: " + showRespData.rating.average,
                "Network: " + showRespData.network.name,
                "Summary: " + showRespData.summary
            ].join("\n");
            fs.appendFile("log.txt", showData + divider, function(err) {
                if(err) throw err;
                console.log(showData);
            })
        })
        .catch(function(err) {
            console.log(err);
        })
    } 
}

module.exports = TV;