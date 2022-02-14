import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

const testData = {
  userRecord: {
      _id: 1,
      firstname: 'Test',
      surname: 'Tester',
      dateOfBirth: '12/12/1990',
      membership: 1,
      membershipStart: '12/07/2018',
      active: true,
  },
  membershipRecords: [
      {
      _id: 1,
      membershipName: 'No Membership',
      cost: '0',
      active: true
      },
      {
      _id: 2,
      membershipName: 'Priority Membership',
      cost: '250',
      active: true
      },
      {
      _id: 3,
      membershipName: 'VIP Membership',
      cost: '500',
      active: true
      },
      {
      _id: 4,
      membershipName: 'Tier 1 Membership',
      cost: '120',
      active: true
      },
      {
      _id: 5,
      membershipName: 'Basic Membership',
      cost: '50',
      active: true
      }
  ]};

describe("Component shallow snapshot tests (debug)", () => {
  test('Check App component, only', () => {
    const component =  shallow(<App debug/>);
    expect(component).toMatchSnapshot();
  });
});

describe("Component render snapshot test (debug)", () => {
  test('Check render app component', () => {
    const component =  render(<App debug/>);
    expect(component).toMatchSnapshot();
  });
});
