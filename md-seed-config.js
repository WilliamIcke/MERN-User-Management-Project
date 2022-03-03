const mongoose = require('mongoose');
const Memberships = require('./server/seeders/memberships.seeder');
const Users = require('./server/seeders/users.seeder');

const mongoURL = 'mongodb://127.0.0.1:27017/MERN-User-Management-Project';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
  Memberships,
  Users
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = {seedersList, connect, dropdb};