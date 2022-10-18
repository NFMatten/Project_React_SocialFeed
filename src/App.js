import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [entries, setEntries] = useState([
    {person: 'Nik Matten', post: "Please type your name and message to appear in the social feed!"},
    {person: 'Nik Matten', post: "Welcome to Social Feed, using React!"},
    {person: 'Nik Matten', post: "Hello world!"}
  ])

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar />
      <div className='container-fluid d-flex justify-content-center'>
        <div className='col-md-4'>
          <div className='border-box'>
            <AddEntryForm addNewEntry={addNewEntry}/>
          </div>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
