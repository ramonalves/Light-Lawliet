const validator = require('./../helpers/data-validator')
const slugfy = require('./../helpers/slugfy')
const Product = require('./../db/product/crud')
// const azure = require('azure-storage')
// const guid = require('guid')
// var config = require('../config')

exports.get = async(req, res, next) => {
    try {
        var data = await Product.get()
        res.status(200).json({
            status: true,
            data
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}

exports.getBySlug = async(req, res, next) => {
    try {
        var data = await Product.getBySlug(req.params.slug)
        res.status(200).json({ 
            status: true,
            data
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await Product.getById(req.params.id)
        res.status(200).json({
            status: true,
            data
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}

exports.getByCategory = async(req, res, next) => {
    try {
        var data = await Product.getByCategory(req.params.id)
        res.status(200).json({
            status: true,
            data
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}

exports.add = async(req, res, next) => {
    let contract = new validator()
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.description, 3, 'O nome deve conter pelo menos 3 caracteres')
    contract.hasPositive(req.body.price, 0, 'O preço deve ser maior que zero')

    // invalid data
    if (!contract.isValid()) {
        res.status(400).json(contract.errors()).end()
        return
    }

    try {
        // Cria o Blob Service
        // const blobSvc = azure.createBlobService(config.containerConnectionString)

        // let filename = guid.raw().toString() + '.jpg'
        // let rawdata = req.body.image
        // let matches = rawdata.match(/^data:([A-Za-z-+\/]+)base64,(.+)$/)
        // let type = matches[1]
        // let buffer = new Buffer(matches[2], 'base64')

        // // Salva a imagem
        // await blobSvc.createBlockBlobFromText('product-images', filename, buffer, {
        //     contentType: type
        // }, function (error, result, response) {
        //     if (error) {
        //         filename = 'default-product.png'
        //     }
        // })

        filename = 'default-product.png'
        let slug = slugfy(req.body.name)        

        let data = await Product.create({
            name: req.body.name,
            slug: slug,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            image: 'https://nodestr.blob.core.windows.net/product-images/' + filename,
            category: req.body.category
        })
        res.status(201).json({
            status: true,
            data
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}

exports.edit = async(req, res, next) => {
    try {
        let data = await Product.update(req.params.id, req.body)
        res.status(200).json({
            status: true,
            data
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}

exports.delete = async(req, res, next) => {
    try {
        await Product.delete(req.body.id)
        res.status(204).json({
            status: true
        })
    } catch (e) {
        res.status(500).json({
            status: false,
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.',
            error: e
        })
    }
}