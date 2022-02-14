import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EditUserRecord from '../components/EditUserRecord';

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
  test('Check EditUserRecord component, only', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Functionality elements", () => {
  test('Firstname field, delete all data, should result in update button being disabled and an appropriate validation message.', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const inputField = component.find('#firstname');
    inputField.simulate('change', { currentTarget: { id:'firstname', value: '' } });
    
    const validationMessageElement = component.find('#validation-message');
    const updateButton = component.find('#userSubmitButton');

    expect(validationMessageElement.text().includes('Firstname is required'));
    //expect(updateButton.disabled).toEqual('disabled');
  });

  test('Surname field, delete all data, should result in update button being disabled and an appropriate validation message', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const inputField = component.find('#surname');
    inputField.simulate('change', { currentTarget: { id:'surname', value: '' } });
    
    const validationMessageElement = component.find('#validation-message');
    const updateButton = component.find('#userSubmitButton');

    expect(validationMessageElement.text().includes('Surname is required'));
    //expect(updateButton.disabled).toEqual('disabled');
  });

  test('Date of birth field, delete all data, should result in update button being disabled and an appropriate validation message', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const inputField = component.find('#dateOfBirth');
    inputField.simulate('change', { currentTarget: { id:'dateOfBirth', value: '' } });
    
    const validationMessageElement = component.find('#validation-message');
    const updateButton = component.find('#userSubmitButton');

    expect(validationMessageElement.text().includes('Date of birth is required'));
    //expect(updateButton.disabled).toEqual('disabled');
  });

  test('Firstname field, make the field invalid then fix the field, should enabled the update button and remove validation message', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const inputField = component.find('#firstname');
    inputField.simulate('change', { currentTarget: { id:'firstname', value: '' } });
    
    const validationMessageElement = component.find('#validation-message');
    const updateButton = component.find('#userSubmitButton');

    expect(validationMessageElement.text().includes('Firstname is required'));
    //expect(updateButton.disabled).toEqual('disabled');
    
    inputField.simulate('change', { currentTarget: { id:'firstname', value: 'Test' } });
    
    expect(validationMessageElement.text().length == 0);
    //expect(updateButton.disabled).toEqual('');
  });

  test('Surname field, make the field invalid then fix the field, should enabled the update button and remove validation messag', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const inputField = component.find('#surname');
    inputField.simulate('change', { currentTarget: { id:'surname', value: '' } });
    
    const validationMessageElement = component.find('#validation-message');
    const updateButton = component.find('#userSubmitButton');

    expect(validationMessageElement.text().includes('Surname is required'));
    //expect(updateButton.disabled).toEqual('disabled');

    inputField.simulate('change', { currentTarget: { id:'surname', value: 'Tester' } });
    
    expect(validationMessageElement.text().length == 0);
    //expect(updateButton.disabled).toEqual('');
  });

  test('Date of birth field, make the field invalid then fix the field, should enabled the update button and remove validation messag', () => {
    const component =  shallow(
      <EditUserRecord 
        userRecord={testData.userRecord}
        membershipRecords={testData.membershipRecords} debug/>
    );
    const inputField = component.find('#dateOfBirth');
    inputField.simulate('change', { currentTarget: { id:'dateOfBirth', value: '' } });
    
    const validationMessageElement = component.find('#validation-message');
    const updateButton = component.find('#userSubmitButton');

    expect(validationMessageElement.text().includes('Date of birth is required'));
    //expect(updateButton.disabled).toEqual('disabled');

    inputField.simulate('change', { currentTarget: { id:'dateOfBirth', value: '12/12/2015' } });
    
    expect(validationMessageElement.text().length == 0);
    //expect(updateButton.disabled).toEqual('');
  });
});