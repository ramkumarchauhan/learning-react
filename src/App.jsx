import React from 'react';
import './App.css';
import { FunctionalComponent,ClassComponent } from './components/Components';
import {Message, CarList, Details} from './components/Props';
import { Counter, Mycounter, Timer, Todo, ToggleSwitch } from './components/States';
import { TodoApp } from './Project1/Todo';


// ----------Arrow function component---------
const App = () => {
  return (
    <div className="App">
      {/* <div className="App-header">
        <h2>I'm from arrow function component.</h2>
      </div> */}
      {/* <FunctionalComponent/>
      <ClassComponent/> */}
      {/* <Message/> */}
      {/* <CarList/>
      <hr/>
      <Details/> */}
      {/* <Counter/>
      <hr />
      <Mycounter/>
      <hr />
      <ToggleSwitch/>
      <hr />
      <Timer/>
      <hr />
      <Todo/>
      <hr /> */}

      <TodoApp/>

    </div>
  );
};

export default App;
