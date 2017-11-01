const Product = require('./../../models/product')

module.exports = (req, res) => {
	Product
		.find({
			enable: true
		})
		.then((products) => {

			return res.render('main/index', {
				title: 'Loja Virtual',
				layout: 'layouts/base',
				user: req.user || undefined,
				products
			})
		})
		.catch((error) => {

		})
}