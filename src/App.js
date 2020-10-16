import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Routes from "./Tugas-15/Routes"

function App() {
  return (
    <div>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
