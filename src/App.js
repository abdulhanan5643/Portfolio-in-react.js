import React from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Navigation from './Components/NavigationComponent';
import Services from './Components/ServicesComponent';

function App() {
  return (
    <div className="App">
      <Navigation logoTitle="Abdul Hanan Asif" />
      <Header title="Portfolio" button="Find out more" />
      <Services />
    </div>
  );
}

export default App;
