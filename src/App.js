import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [entries, setEntries] = useState([
    {person: 'Nik Matten', message: "Please type your name and message to appear in the social feed!"},
    {person: 'Nik Matten', message: "Welcome to Social Feed, using React!"},
    {person: 'Nik Matten', message: "Hello world!"}
  ])

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar />
      <AddEntryForm addNewEntry={addNewEntry}/>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
