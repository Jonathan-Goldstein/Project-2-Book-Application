const router = require('express').Router();
const { Comment, Post, User} = require('../models');

//import models


//load the login page
router.get('/', (req, res) => {

    console.log('route loaded')
    res.render('./layouts/main')
});

//load signup handlebar file
router.get('/signup/:id', (req, res) => {

    console.log('route loaded');
    res.render('./signup.handlebars')
})

module.exports = router;
