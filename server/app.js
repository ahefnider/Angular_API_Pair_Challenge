var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// module
var pets = require('./routes/pets');

// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express route
app.use('/pet', pets);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})

// mongoose connection
var databaseURI = 'mongodb://localhost:27017/mu';

mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
