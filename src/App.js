import React from 'react';
import './App.css';
import CounterGroup from './component/CounterGroup';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup store = {props.store}/>
      </header>
    </div>
  );
}
export default App;



