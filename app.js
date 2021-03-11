var express     = require('express');
var app         = express();
var request     = require('request');
var bodyParser  = require('body-parser');

app.get('/', function(req, res) {
    var url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain';
    req.pipe(request(url)).pipe(res);


});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http:/", port);
});

app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));


