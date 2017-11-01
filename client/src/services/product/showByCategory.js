const Product = require('./../../models/product')
const mongoose = require('mongoose')

module.exports = (req, res) => {
	Product
		.find({
			category: mongoose.Types.ObjectId(req.params.id),
		})
		.populate('category', 'name')
		.then((products) => {
			return res.render('product/show-by-category', {
				title: 'Produtos',
				layout: 'layouts/main',
				user: req.user || undefined,
				products
			})
		})
		.catch((error) => {
			
		})
} 