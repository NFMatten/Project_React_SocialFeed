import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [person, setPerson] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            person: person,
            post: post
        };
        props.addNewEntry(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='mb-3 row'>
                <label className='col-sm-2 col-form-label label-styling'>Name</label>
                <input className='form-control' type='text' placeholder="Enter Name" value={person} onChange={(event) => setPerson(event.target.value)}/>
            </div>
            <div className='mb-3 row'>
                <label className='col-sm-2 col-form-label label-styling'>Post</label>
                <input className='form-control' type='text' placeholder="Enter Message" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>

            <button className='textbox-styling' type='submit'>Create</button>
        </form>
     );
}
 
export default AddEntryForm;