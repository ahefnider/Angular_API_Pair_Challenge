var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = require('../models/pet');

router.get('/', function (req, res) {
  Pet.find({}, function (err, favorites) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(favorites);
  });
});


router.post('/', function (req, res) {
  var pet = new Pet(req.body);

  pet.save(function (err) {
    if (err) {
      res.sendStatus(500);
    }

    res.sendStatus(201);
  });
});


module.exports = router;
