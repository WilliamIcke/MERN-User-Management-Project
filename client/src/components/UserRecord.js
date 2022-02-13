import React from 'react';
import { format } from 'date-fns';
import EditUserRecord from './EditUserRecord';
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserRecord = ({ userRecord, membershipRecords, updateUserRecordItem, deleteUserRecord }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    /* If a date is set, convert it to a nice format */
    let betterDateOfBirthFormat = "NA";
    if ('dateOfBirth' in userRecord && userRecord.dateOfBirth !== null) {
        betterDateOfBirthFormat = new Date(userRecord.dateOfBirth);
        betterDateOfBirthFormat = format(betterDateOfBirthFormat, 'dd/MM/yyyy');
    }

    let betterMembershipStartFormat = "NA";
    if ('membershipStart' in userRecord && userRecord.membershipStart !== null) {
        betterMembershipStartFormat = new Date(userRecord.membershipStart);
        betterMembershipStartFormat = format(betterMembershipStartFormat, 'dd/MM/yyyy');
    }

    /* Simple function to help with the Edit To Do modal */
    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="userRecordCard">
            <dl>
                <dt>Firstname</dt>
                <dd>{userRecord.firstname}</dd>
                <dt>Surname</dt>
                <dd>{userRecord.surname}</dd>
                <dt>Date of birth</dt>
                <dd>{betterDateOfBirthFormat}</dd>
                <dt>Membership</dt>
                <dd>{userRecord.membership.membershipName}</dd>
                <dt>Membership start date</dt>
                <dd>{betterMembershipStartFormat}</dd>
            </dl>
            <div className='Card-Actions'>
                <button onClick={toggleModal}>Edit User</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="editContent"
                >
                    <div className='editModalContent'>
                        <EditUserRecord userRecord={userRecord} membershipRecords={membershipRecords} updateUserRecordItem={updateUserRecordItem}/>
                        <button className="closeEditModal" onClick={toggleModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default UserRecord