import React, { useState } from 'react';
import "./AddEntryForm.css"

const AddEntryForm = (props) => {

    const [person, setPerson] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            person: person,
            post: post,
            status: 'none'
        };
        props.addNewEntry(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit} id="form">
                <div className='row spacing'>
                    <div className='col-sm-2'><label className='col-sm-2 col-form-label label-styling'>Name</label></div>
                    <div className='col-sm-8'><input className='form-control' type='text' placeholder="Enter Name" value={person} onChange={(event) => setPerson(event.target.value)}/></div>
                </div>
            
                
                    <div className='row'>
                        <div className='col-sm-2'><label className='col-sm-2 col-form-label label-styling'>Post</label></div>
                        <div className='col-sm-8'><textarea className='form-control' rows="3" placeholder="Enter Message" value={post} onChange={(event) => setPost(event.target.value)}/></div>
                        <div className='col-sm-2 d-flex align-items-end'><button className='btn btn-primary' type='submit'>Create</button></div>
                    </div>
                
                    
        </form>
     );
}
 
export default AddEntryForm;