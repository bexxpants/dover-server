const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('.../models.signup.js');


// get username to check if username is taken
router.get('/:username', (req,res,next) =>{
  Users.findById(req.params.username, (err,post) =>{
    if (err) return next(err);
    res.json(post);
  });
});

// post new user to mongodb
router.post('/', (req,res,next) =>{
  Users.create(req.body,(err,post) =>{
    if(err) return next(err);
    res.json(post);
  })
})

module.exports = router;
