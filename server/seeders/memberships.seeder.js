const { Seeder } = require('mongoose-data-seed');
const { Membership } = require('../models/membership');

const data = [
  {
    membershipName: 'Priority Membership',
    cost: '250',
    active: true
  },
  {
    membershipName: 'VIP Membership',
    cost: '500',
    active: true
  },
  {
    membershipName: 'Tier 1 Membership',
    cost: '120',
    active: true
  },
  {
    membershipName: 'Basic Membership',
    cost: '50',
    active: true
  }
];

class MembershipsSeeder extends Seeder {

  async shouldRun() {
    return Membership.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Membership.create(data);
  }
}

module.exports = MembershipsSeeder;
