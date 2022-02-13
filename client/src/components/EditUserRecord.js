import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditUserRecord = ({ userRecord, membershipRecords, updateUserRecord }) => {
    const [formData, setFormData] = React.useState(userRecord);
    const [disableForm, setDisableForm] = React.useState(false);
    const [validationMessage, setWordValidationMessage] = React.useState('');
    const [dateOfBirth, setDate] = React.useState(new Date(userRecord.dateOfBirth));

    React.useEffect(() => {
        // State changes, check valid data
        switch (true) {
            case (formData === undefined): // Check if value empty                    
                setDisableForm(true);
                break;
          case (formData.firstname.trim().length === 0): // Check if firstname is empty
                setDisableForm(true);
                setWordValidationMessage("Firstname is required");
                break;
          case (formData.surname.trim().length === 0): // Check if surname is empty
                  setDisableForm(true);
                  setWordValidationMessage("Surname is required");
                  break;
          case (formData.dateOfBirth === undefined || formData.dateOfBirth === null): // Check if DOB is set
                  setDisableForm(true);
                  setWordValidationMessage("Date of birth is required");
                break;
          default:
              setWordValidationMessage('');
              setDisableForm(false);
        }
    }, [formData, disableForm, dateOfBirth]);

    /* Updates form data with any input changes */
    const handleForm = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.currentTarget.id]: e.currentTarget.value }));
    };

    /* Updates form data and datepicker field with date changes */
    const handleDateChange = (dateChange) => {
        setFormData(Object.assign(Object.assign({}, formData), { dateOfBirth: dateChange }));
        setDate(dateChange);
    };

    /* Updates membership changes */
    const handleMembershipChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.currentTarget.id]: e.currentTarget.value }, { 'membershipStart': new Date() }));
    };

    return (
        <form className='EditForm' autoComplete="off" onSubmit={(e) => updateUserRecord(formData)}>
            <div className="form-container">
                <div className="row">
                    <div>
                        <label htmlFor='firstname'>Firstname</label>
                    </div>
                    <div>
                        <input onChange={handleForm} type='text' id='firstname' value={formData.firstname} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor='surname'>Surname</label>
                    </div>
                    <div>
                        <input onChange={handleForm} type='text' id='surname' value={formData.surname} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor='dateOfBirth'>Date of birth</label>
                    </div>
                    <div>
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={handleDateChange}
                            id='dateOfBirth'
                            dateFormat='dd-MM-yyyy'
                            popperPlacement="bottom"
                        />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor='membership'>Membership plan</label>
                    </div>
                    <div>
                        <select onChange={handleMembershipChange} id='membership' value={formData.membership._id}>
                            {membershipRecords.map((membershipRecord) => (
                                <option key={membershipRecord._id} value={membershipRecord._id}>
                                    {membershipRecord.membershipName}: £{membershipRecord.cost}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <p className="validationMessage"  data-testid="validation-message">{validationMessage}</p>
                <button className="userSubmit" disabled={disableForm} >Update User Record</button>
            </div>
        </form>
    )
}

export default EditUserRecord