import { Seeder } from 'mongoose-data-seed';
import { User } from '../models/user';

const data = [{

}];

class UsersSeeder extends Seeder {

  async shouldRun() {
    return User.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return User.create(data);
  }
}

export default UsersSeeder;
