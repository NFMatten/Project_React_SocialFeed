import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [person, setPerson] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            person: person,
            message: message
        };
        props.addNewEntry(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={person} onChange={(event) => setPerson(event.target.value)}/>
            <label>Message</label>
            <input type='text' value={message} onChange={(event) => setMessage(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default AddEntryForm;