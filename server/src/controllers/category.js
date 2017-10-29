const DataValidator = require('./../helpers/data-validator')
const Category = require('./../db/category/crud')
const slugfy = require('./../helpers/slugfy')
// const azure = require('azure-storage')
// const guid = require('guid')
// var config = require('../config')

exports.get = async(req, res, next) => {
    try {
        var data = await Category.get()
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.'
        })
    }
}

exports.getBySlug = async(req, res, next) => {
    try {
        var data = await Category.getBySlug(req.params.slug)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.'
        })
    }
}

exports.add = async(req, res, next) => {
    let contract = new DataValidator()
    contract.hasMinLen(req.body.name, 3, 'O título deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.description, 3, 'O título deve conter pelo menos 3 caracteres')

    // invalid date
    if (!contract.isValid()) {
        res.status(400).json(contract.errors()).end()
        return
    }

    try {
        let slug = slugfy(req.body.name)    

        let data = await Category.create({
            name: req.body.name,
            slug: slug,
            description: req.body.description
        })
        res.status(201).json({
            message: 'Categoria cadastrada com sucesso!',
            data
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.'
        })
    }
}

exports.edit = async(req, res, next) => {
    try {
        await Category.update(req.params.id, req.body)
        res.status(200).json({
            message: 'Produto atualizado com sucesso!'
        })
    } catch (e) {
        res.status(500).json({
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.'
        })
    }
}

exports.delete = async(req, res, next) => {
    try {
        await Category.delete(req.body.id)
        res.status(204).json({
            message: 'Produto removido com sucesso!'
        })
    } catch (e) {
        res.status(500).json({
            message: 'Ocorreu um erro interno e não foi possível completar a requisição.'
        })
    }
}