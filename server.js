var express = require('express');
var app = express();
var request = require('request');

//============================= OMDB API ===============================================
var request = require('request');
var nodeArgs = process.argv;
var movieName = "";
var apikey="4a0c69bd";

function omdbiRequest() {
    console.log(process.argv.length);
    movieName = process.argv[3];
    console.log(movieName);
    var queryUrl = 'http://www.omdbapi.com/?apikey='+apikey+'&t=' + movieName + '&y=&plot=full&r=json';
    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("\n===========================================" +
                "\nSearch Results:" +
                "\n-------------------------------------------");

            var movieResults = "\nMovie Title: " + JSON.parse(body)["Title"] +
                "\n" +
                "\nYear of release: " + JSON.parse(body)["Year"] +
                "\nRating: " + JSON.parse(body)["imdbRating"] +
                "\nCountry of Production: " + JSON.parse(body)["Country"] +
                "\nLanguage: " + JSON.parse(body)["Language"] + "\n" +
                "\nStory: " + JSON.parse(body)["Plot"] +
                "\n"+
                "\nCasting: " + JSON.parse(body)["Actors"] + "\n" +
                "\n==========================================";
            console.log(movieResults);
        }
    });
}
var CommandInstruction = "node liriapp.js movie-info [specify movie name here]";
var NoMessage = "\n==========================================" +
    "\nYou haven't specify any movie name: " +
    "\nHere is the command: " + CommandInstruction +
    "\n==========================================";



// ========== Main Process =========
if (process.argv[2] == "movie-info") {
    console.log(process.argv[3]);
    if (process.argv[3] == null) {
        console.log(NoMessage);
    } else {
        console.log("omdbiRequest entry");
        omdbiRequest();
    }
}

/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello!');
}).listen(8081);*/

/*const prompt = require('prompt');
const properties = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'password',
        hidden: true
    }
];
prompt.start();
prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
});
function onErr(err) {
    console.log(err);
    return 1;
}*/

app.get('/', function(req, res) {
 res.send('Hello Express');
});

app.listen(3000, function() {
 console.log("Server is running at 3000 port!");
});
