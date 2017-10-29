const Product = require('./../../models/product')
const mongoose = require('mongoose')

exports.get = async() => {
    const res = await Product
        .find({}, 'id name description price slug image quantity enable')
        .populate('category', 'name')
    return res
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug
        }, 'id name description price slug image quantity enable')
        .populate('category', 'name')
    return res
}

exports.getById = async(id) => {
    const res = await Product
        .findOne({
            _id: id
        }, 'id name description price slug image quantity enable')
        .populate('category', 'name')
    return res
}

exports.getByCategory = async(category) => {
    const res = await Product
        .find({
            category: mongoose.Types.ObjectId(category),
        }, 'id name description price slug image quantity enable')
        .populate('category', 'name')
    return res
}


exports.create = async(data) => {
    var product = new Product(data)
    const res = await product.save()
    return res
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                description: data.description,
                price: data.price,
                slug: data.slug,
                category: data.category
            }
        })
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id)
}