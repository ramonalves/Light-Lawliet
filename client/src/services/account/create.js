const Customer = require('./../../models/customer')
const slugfy = require('./../../helpers/slugfy')

module.exports = (req, res) => {
	let slug = slugfy(req.body.name)

	let data = {
		name: req.body.name,
		email: req.body.email,
		slug: slug,
		cpf: req.body.cpf,
		celphone: req.body.celphone,
		address: {
			cep: req.body.cep,
			street: req.body.street,
			number: req.body.number_delivery,
			city: req.body.city,
			neightborhood: req.body.neightborhood
		}
	}

	Customer.register(data, req.body.password, (error, account) => {
		if (error) {
			return res.redirect('/')
		}

		return res.redirect('/account')
	})
}