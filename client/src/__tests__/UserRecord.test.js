import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserRecord from '../components/UserRecord';

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
  test('Check UserRecord component, only', () => {
    const component =  shallow(
      <UserRecord 
        key={testData.userRecord._id}
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Functionality elements", () => {
  test('Selecting edit button triggers the modal containing edit user component', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const component =  shallow(
      <UserRecord 
        key={testData.userRecord._id}
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const button = component.find('.editUserButton');
    button.simulate('click');
    expect(consoleLogSpy).toHaveBeenCalledWith('Edit user modal triggered');
  });
});

describe("Functionality elements alongside EditUserRecordModal", () => { 
   test('Selecting the close modal button should trigger the modal', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const component =  shallow(
      <UserRecord 
        key={testData.userRecord._id}
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const button = component.find('.editUserButton');
    button.simulate('click');
    expect(consoleLogSpy).toHaveBeenCalledWith('Edit user modal triggered');
   });

  //  test('Edit a user record via the modal, then close the modal. No changes should be saved', () => {
        // Select the edit user button

        // Edit input fields

        // Select the close modal button

        // Check that data hasn't changed
  //  });

  //  test('Edit a user record via the modal, then save, This will close the modal and update the user record', () => {
        // Select the edit user button

        // Edit input fields

        // Select the update button

        // Check that data has changed (Including membership start data if membership changed)
  //  });
});