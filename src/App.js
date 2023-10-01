import React from 'react';
import './App.css';
import Header from './components/Header'; // Import Header component
import AboutMe from './components/AboutMe'; // Import AboutMe component

function App() {
  return (
    <div className="App">
      <Header /> {/* Include Header component */}
      <AboutMe /> {/* Include AboutMe component */}
      {/* Other components will go here */}
    </div>
  );
}

export default App;
