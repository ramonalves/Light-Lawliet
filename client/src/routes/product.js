const express = require('express')
const router = express.Router()

router.get('/:slug', require('./../services/product/show'))
router.get('/category/:id', require('./../services/product/showByCategory'))

module.exports = router