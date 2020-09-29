import React from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Navigation from './Components/NavigationComponent';

function App() {
  return (
    <div className="App">
      <Navigation logoTitle="Abdul Hanan Asif" />
      <Header title="Portfolio" button="Find out more" />
    </div>
  );
}

export default App;
