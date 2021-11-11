import { React, useState } from 'react';
import Form from './Form';
import EventResults from './EventResults';

import './App.css';

function App() {
  const [results, setResults] = useState([]);

  


  return (
    <div className="app">
      <h1>Pawcker Task</h1>
      <h2>Placeholder results</h2>
      <EventResults results={results} />

      <div className="app__form">
        <Form results={results} setResults={setResults}/>
      </div>
    </div>
  );
}

export default App;
