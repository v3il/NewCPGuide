const config = require("./../config");

const Promise = require('bluebird');
const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.Promise = Promise;

    mongoose.connect(config.db_url, (error) => {
        if (error) {
            console.error(error);
            process.exit(1);
        }
    });
};
