import React from 'react';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
        <nav>
          <div className="nav-wrapper center-align">
            <a href="/" className="brand-logo">Contacts</a>

          </div>
        </nav>
        <div className="row">
          <Contact/>
        </div>
    </div>
  );
}

export default App;
