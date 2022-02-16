import React from 'react';
import { format } from 'date-fns';
import EditUserRecord from './EditUserRecord';
import Modal from "react-modal";

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement("#root");
}

const UserRecord = ({ userRecord, membershipRecords, updateUserRecord }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const betterDateOfBirthFormat = format(new Date(userRecord.dateOfBirth), 'dd/MM/yyyy');
    const betterMembershipStartFormat = format(new Date(userRecord.membershipStart), 'dd/MM/yyyy');

    /* Simple function to help with the Edit To Do modal */
    function toggleModal() {
        console.log('Edit user modal triggered')
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
                <button className='editUserButton' onClick={toggleModal}>Edit User</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="editContent"
                >
                    <div className='editModalContent'>
                        <EditUserRecord
                            userRecord={userRecord}
                            membershipRecords={membershipRecords}
                            updateUserRecord={updateUserRecord}
                        />
                        <button className="closeEditModal" onClick={toggleModal}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default UserRecord