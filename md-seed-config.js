import mongoose from 'mongoose';
import Memberships from './server/seeders/membership.seeder';
import Users from './server/seeders/users.seeder';

const mongoURL = 'mongodb://127.0.0.1:27017/technical-test-flown';

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  Memberships,
  Users
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
