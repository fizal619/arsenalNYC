'use strict'
//require express router
const router = require('express').Router();


// / route
router.get('/', function(req,res){
  res.send('route /api/users');
}) //end /


//export it
module.exports = router;
