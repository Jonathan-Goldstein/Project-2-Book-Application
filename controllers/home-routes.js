const router = require('express').Router();

//import models


//load the login page
router.get('/', (req, res) => {

    console.log('route loaded')
    res.render('./layouts/main')
});

//load signup handlebar file


module.exports = router;
