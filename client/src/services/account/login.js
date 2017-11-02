const Customer = require('./../../models/customer')
const md5 = require('md5')

module.exports = (req, res) => {
	Customer.authenticate()(req.body.email, req.body.password, (error, user, opts) => {
		if (error || user == false) {
			return res.redirect('/account')
		}

		return req.login(user, (error) => {
			if (error) {
				return res.redirect('/account')
			}

			return res.redirect('/')
		})
	})
}