'use strict'
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const pg = require('pg-promise')({})

const _db = pg(process.env.PG_LOCAL)

/*
Creating password hash
*/
const createSecure = (password) =>
	new Promise((resolve, reject) =>
		bcrypt.genSalt((err, salt) =>
			bcrypt.hash(password, salt, (err, hash) =>
				err ? reject(err) : resolve(hash)
			)
		)
	)

//START EXPORTING
module.exports = {
	createUser(req, res, next) {
		createSecure(req.body.password)
			.then(hash => {
				_db.one(`
          INSERT INTO users (email, password_hash)
          VALUES ($1, $2)
          returning *;`, [req.body.email, hash])
					.then(newUser => {
						console.log(newUser)
						res.user = newUser;
						next()
					})
					.catch(err => {
						console.log('error signing up', err)
						next()
					})

			});

	}, //END CREATE USER

	loginUser(req, res, next) {
		_db.one(`
      SELECT *
      FROM users
      WHERE email = lower(trim(from $/email/));
      `, req.body)
			.then(user => {
				if (bcrypt.compareSync(req.body.password, user.password_hash)) {
					req.user = user;
				} else {
					res.error = true
				}
				console.log('USER', req.user)
				next()
			})
			/* NOTE: NO USERS or all ERRORS*/
			.catch(error => {
				console.error('Error ', error);
				res.error = error
				next()
			})
	} //END LOGIN

}