var express = require('express');
var router = express.Router();
var Guest = require('../models/guestModel');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' })
});

router.get('/signin', function(req, res) {
  res.render('signin');
});
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
);

router.get('/loginFailure', function(req, res, next) {
  res.send('Failed to authenticate');
});

router.get('/loginSuccess', function(req, res, next) {
  Guest.find({}, function(err, guests) {
        console.log(guests);
        res.render('admin', {guests: guests});
    });
});


router.post('/newGuest', function(req,res) {

  var newGuest = new Guest({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone:req.body.phone,
    zip: req.body.zip
  });

  newGuest.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');

  });
  res.render('signedup');

});


module.exports = router;
