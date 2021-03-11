import * as React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Airbnb logo" />
        <p>This is a project on setting up airbnb style guide.</p>
        <a
          className="App-link"
          href="https://github.com/Stephany-Doris/airbnb-style-guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code
        </a>
      </header>
    </div>
  );
}

export default App;
