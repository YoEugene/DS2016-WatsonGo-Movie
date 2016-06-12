var express = require('express');
var app = express();

var PythonShell = require('python-shell');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

app.get('/movie', function(req, res, next) {
    var moviename = req.query.moviename;
    param = decodeURIComponent(moviename)
    PythonShell.run('test.py', {mode: 'json', args: [JSON.parse(param)]}, function(err, results) {
        if (err) throw err;

        console.log(results[0]);

        res.send(results[0]);
    });
});

// app.get('./css/index.css', function (req, res) {
//   res.sendFile('./css/index.css');
// });

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
