import React from "react";
import logo from './logo.svg';
import UserRecord from './components/UserRecord'
import './App.css';
import { getUserRecords, getMembershipRecords, updateUserRecord } from './API'

const App = () => {
  const [userRecords, setUserRecords] = React.useState([]);
  const [membershipRecords, setMembershipRecords] = React.useState([]);

   React.useEffect(() => {
    fetchUserRecords();
    fetchMembershipRecords();
   }, [])

    /* Definitions of calls that use the API */
    const fetchUserRecords = () => {
        getUserRecords()
            .then(({ data: { userRecords } }) => setUserRecords(userRecords))
            .catch((err) => console.log(err))
    }

    const fetchMembershipRecords = () => {
        getMembershipRecords()
            .then(({ data: { membershipRecords } }) => setMembershipRecords(membershipRecords))
            .catch((err) => console.log(err))
    }

    const handleUpdateUserRecord = (userRecord) => {
        updateUserRecord(userRecord)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Error! User not updated');
                }
                setUserRecords(data.userRecords);
            })
            .catch((err) => console.log(err));
    }

  return (
      <main className='App'>
        <div className='Card-Header'>
            <h1>Technical test - William Icke</h1>
            <h2>User management system</h2>
        </div>
        <div className='Card-Body userRecordListContainer'>
            {userRecords.map((userRecord) => (
                <UserRecord
                    key={userRecord._id}
                    userRecord={userRecord}
                    membershipRecords={membershipRecords}
                    updateUserRecord={handleUpdateUserRecord}
                />
            ))}
        </div>
      </main>
  )
}

export default App;
