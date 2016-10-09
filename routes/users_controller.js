'use strict'
//require express router
const router = require('express').Router();
const {createUser, loginUser} = require('../models/user')

// / route /api/users
router.get('/', (req, res)=>{
		res.send('route /api/user');
	}) //end /api/users


//SIGNUP

router.post('/signup', createUser, (req, res)=>{
	res.json(res.user)
})

//LOGIN

router.post('/login',loginUser, (req,res)=>{
	res.json(req.user)
})


//export it
module.exports = router;