import { React, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Form from './Form';
import EventResults from './EventResults';

import './App.css';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <h1>Pawcker Task</h1>
      <Routes>
        <Route path="/" element={<EventResults results={results}/>} />

        <Route path="/events/new" element={<Form results={results} setResults={setResults}/>} />
          
      
      </Routes>
    </div>
  );
}

export default App;
