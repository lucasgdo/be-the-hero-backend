const knex = require('knex');
const configuration = require('../../knexfile');
const env = process.env.NODE_ENV || 'development';

const connection = knexfile[env];

module.exports = connection;
