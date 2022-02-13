const { Seeder } = require('mongoose-data-seed');
const { User } = require('../models/user');
const { Membership } = require('../models/membership');

class UsersSeeder extends Seeder {
  async beforeRun() {
    this.memberships = await Membership.find({}).exec();
    this.membershipsCount = await Membership.count().exec();
    this.userData = this._generateUsers();
  }

  async shouldRun() {
    return Membership.countDocuments().exec().then(count => count === 0) && User.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return User.create(this.userData);
  }

  _generateUsers() {
    // Get random memberships
    var random = Math.floor(Math.random() * this.membershipsCount)
    const randomMembership1 = this.memberships[random]._id;
    random = Math.floor(Math.random() * this.membershipsCount)
    const randomMembership2 = this.memberships[random]._id;
    random = Math.floor(Math.random() * this.membershipsCount)
    const randomMembership3 = this.memberships[random]._id;
    random = Math.floor(Math.random() * this.membershipsCount)
    const randomMembership4 = this.memberships[random]._id;


    return [
      {
        firstname: 'Barry',
        surname: 'Bolonga',
        dateOfBirth: '12/12/1990',
        membership: randomMembership1,
        membershipStart: '12/07/2018',
        active: true,
      },
      {
        firstname: 'Tim',
        surname: 'Poly',
        dateOfBirth: '10/12/1984',
        membership: randomMembership2,
        membershipStart: '02/01/2021',
        active: true,
      },
      {
        firstname: 'Agnes',
        surname: 'Dalton',
        dateOfBirth: '05/06/1996',
        membership: randomMembership3,
        membershipStart: '09/22/2021',
        active: true,
      },
      {
        firstname: 'Velma',
        surname: 'Early',
        dateOfBirth: '01/03/1978',
        membership: randomMembership4,
        membershipStart: '03/09/2015',
        active: true,
      }
    ];
  }
}

module.exports = UsersSeeder;
