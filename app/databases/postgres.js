/* eslint-disable no-console */
require('dotenv').config();
const { Sequelize } = require('sequelize');
const { SEQUELIZE: config } = require('../constants');
const { log: { info, success, error } } = require('../utils');

// Production or Development configuration
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const uri =
  env === 'production'
    ? process.env.DATABASE_URL
    : process.env.DATABASE_URL_DEV;

try {
  const sequelize = new Sequelize(uri, config[env]);

  if (process.env.NO_LOGGING !== 'true') {
    info(`Environment: ${env}`);
    success(`Connected to PostgresQL`);
    info(`Database name: ${uri.split('/')[uri.split('/').length - 1]}`);
  }

  module.exports = sequelize;
} catch (err) {
  console.error(err);
  error('Sequelize Connection Error', error);
}
