module.exports = function (app) {
    const controller = require('./../controllers/category');

    app.get('/api/categories', controller.get);
    app.post('/api/categories', controller.add);
    app.get('/api/categories/:slug', controller.getBySlug);
    app.put('/api/categories/:slug', controller.edit);
    app.delete('/api/categories/:slug', controller.delete);
}
