import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe("Main page tests", () => {
  beforeEach(() => {
    render(
        <App />
    );
    //Insert test data?
  });

  test('Check Main page renders correctly', () => {
    /**
     * Elements to check:
     * - Header: 
     *    - h1 "Technical test - William Icke"
     * - Body:
     *    - Users:
     */

    // let checkElement = screen.getByText("Technical test - William Icke");
    // expect(checkElement).toBeInTheDocument();

    // checkElement = screen.getByText("User management system");
    // expect(checkElement).toBeInTheDocument();
  });

//   test('Check Main page, check correct users and their information appears', () => {
  
//   });

//   test('Check Main page, selecting edit button opens modal for the edit user component', () => {

//   });

//   test('Edit user record modal, check information appears correctly and update is initially disabled', () => {

//   });

//   test('Edit user record modal, can close modal using close button', () => {

//   });

//   test('Edit user record modal, can interact with the form and can close modal using close button, none of the changes saved', () => {

//   });

//   test('Edit user record modal, can make valid edit to the firstname, update and see changes saved', () => {

//   });

//   test('Edit user record modal, can make valid edit to the surname, update and see changes saved', () => {

//   });

//   test('Edit user record modal, can make valid edit to the date of birth, update and see changes saved', () => {

//   });

//   test('Edit user record modal, can make valid edit to the membership, update and see changes saved, start date also updated', () => {

//   });

//   test('Edit user record modal, can make invalid edit to the firstname, update button should be disabled and validation message visible', () => {

//   });

//   test('Edit user record modal, can make valid edit to the surname, update button should be disabled and validation message visible', () => {

//   });

//   test('Edit user record modal, can make valid edit to the date of birth, update button should be disabled and validation message visible', () => {

//   });
});