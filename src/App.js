import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{person: 'Nik Matten', message: "Hello world!"}])

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <AddEntryForm addNewEntry={addNewEntry}/>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
