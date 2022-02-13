import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditUserRecord = ({ userRecord, membershipRecords, updateUserRecord }) => {
    const [formData, setFormData] = React.useState(userRecord);
    const [disableForm, setDisableForm] = React.useState(false);
    const [validationMessage, setWordValidationMessage] = React.useState('');
    
    /**
     * Handles the initial date value, as this can be null
     * If it is null datepicker displays this value as '1970-1-1', passing undefined is a simple workaround
     * until a better solution is found.
     **/
     let initialDateValue;
     if ('dateOfBirth' in userRecord && userRecord.dateOfBirth !== null) {
         initialDateValue = new Date(userRecord.dateOfBirth);
     }
    const [dateOfBirth, setDate] = React.useState(initialDateValue);

    React.useEffect(() => {
        // State changes, check valid data
        switch (true) {
            case (formData === undefined): // Check if value empty                    
                setDisableForm(true);
                break;
          case (formData.firstname.trim().length === 0): // Check if word is atleast 5 chars in length
                setDisableForm(true);
                setWordValidationMessage("Firstname is required");
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

    return (
        <form className='EditForm' autoComplete="off" onSubmit={(e) => updateUserRecord(formData)}>
            <div className="form-container">
                <div className="row">
                    <div>
                        <label htmlFor='firstname'>Firstname*</label>
                    </div>
                    <div>
                        <input onChange={handleForm} type='text' id='firstname' value={formData.firstname} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor='surname'>Surname*</label>
                    </div>
                    <div>
                        <input onChange={handleForm} type='text' id='surname' value={formData.surname} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor='dateOfBirth'>Date of birth*</label>
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
                        <label htmlFor='membership'>membership</label>
                    </div>
                    <div>
                        <input onChange={handleForm} type='text' id='membership' value={formData.membership} />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor='active'>Active</label>
                    </div>
                    <div>
                        <input onChange={handleForm} type='checkbox' id='active' checked={formData.active} />
                    </div>
                </div>
                <button className="UserSubmit" disabled={disableForm} >Update User Record</button>
            </div>
        </form>
    )
}

export default EditUserRecord