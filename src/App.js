import React from 'react';
import Dice from './Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dice face='five' />
      <Dice face='six' />
      <Dice face='three' />
      <Dice face='two' />
    </div>
  );
}

export default App;
