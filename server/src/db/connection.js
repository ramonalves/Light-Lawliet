let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/light-lawliet', { useMongoClient: true }, function (err) {
    if (err) {
        console.log('Mongoose error connection => ', err);
    }

    console.log('Mongoose connected');
});

module.exports = mongoose;