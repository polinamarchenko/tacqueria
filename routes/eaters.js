var express = require('express');
var router = express.Router();
var db = require('../models');

//when you redirect always to url, when you render always a template

router.get('/', function(req, res, next) {
  db.Eater.find().then(function(eaters) {
    res.render('eaters/index', {eaters});
  }, function(err){
    next(err);
  });
});

router.get('/new', function(req, res, next) {
    res.render('eaters/new');
  });

router.get('/:id', function(req, res, next) {
  db.Eater.findById(req.params.id).then(function(eater) {
    res.render('eaters/show', {eater});
  }, function(err){
    next(err);
  });
})

router.get('/:id/edit', function(req, res, next) {
  db.Eater.findById(req.params.id).then(function(eater) {
    res.render('eaters/edit', {eater});
  }, function(err){
    next(err);
  });
})

router.post('/', function(req, res, next) {
  db.Eater.create(req.body.eater).then(function() {
    res.redirect('/eaters');
  }, function(err){
    next(err);
  });
});

// {new:true} add if you need an immediate version of updated element
router.patch('/:id', function(req, res, next) {
  db.Eater.findByIdandUpdate(req.params.id, req.body.eater, {update:true}).then(function(eater) {
    res.redirect('/eaters');
  }, function(err){
    next(err);
  });
});

router.delete('/:id', function(req, res, next) {
  db.Eater.findByIdandRemove(req.params.id).then(function(eater) {
    res.redirect('/eaters');
  }, function(err){
    next(err);
  });
});

module.exports = router;
