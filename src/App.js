import React, { Component } from 'react';
import './App.css';
import {ControlPanel,Header} from "./components";
import Editor from './components/editor';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlPanel/>
        <Editor/>
      </div>
    );
  }
}

export default App;
