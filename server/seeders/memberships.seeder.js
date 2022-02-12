import { Seeder } from 'mongoose-data-seed';
import { Membership } from '../models/membership';

const data = [{

}];

class MembershipsSeeder extends Seeder {

  async shouldRun() {
    return Membership.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Membership.create(data);
  }
}

export default MembershipsSeeder;
