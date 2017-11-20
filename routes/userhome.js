const express = require('express');
const games = require('../models/Game');
const passport = require('passport');
const {ensureLoggedIn, ensureLoggedOut} = require('connect-ensure-login');
const router  = express.Router();

router.get('/games', ensureLoggedIn(), (req, res, next)  => {
  games.find({}, (err, listgames) => {
      if (err) { return next(err); }
    res.render('user/gamelist', {
      listgames: listgames
    });
  });
});

router.get('/newMeeting', ensureLoggedIn(), (req, res, next)  => {
  games.find({}, (err, listgames) => {
      if (err) { return next(err); }
    res.render('user/newMeeting', {
      listgames: listgames
    });
  });
});

router.post('/newMeeting', (req, res, next) => {
  const newEvent = {
    name: req.body.name,
    game : req.body.game,
    host: "??????????????????????",
    city: req.body.city,
    adress : req.body.adress,
    time : req.body.time,
    day : req.body.day,
    expertiseLevel: req.body.expertiseLevel,
    maxPlayers: req.body.maxPlayers,
    minPlayers: req.body.minPlayers,
    status: "??????????????????????",
    approxDuration: req.body.approxDuration,
    description: req.body.description,
    reviews: "??????????????????????",
    dressCode: req.body.dressCode,
  };

  const userEvent = new Event(newEvent);

  userEvent.save((err) => {
    if (err) { return next(err); }

    return res.redirect('/userProfile');
  });
});


module.exports = router;
