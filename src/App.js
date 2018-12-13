import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Numbers} from './components/Numbers'
import {Operators} from './components/Operators'
import { ResultScreen } from './components/ResultScreen';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input1 : 0,
      input2 : 0,
      operator : null
    }
  }
  render() {
    return (
      <div className="App">
        <ResultScreen input1={this.state.input1} input2={this.state.input2} operator={this.state.operator}/>
        <Numbers callbackFromNumbers={this.callbackForNumbers}/>
        <Operators callbackFromOperators={this.callbackForOperator}/>
        <button onClick={this.print}>print</button>

      </div>
    );
  }
  print = ()=>{
    console.log(this.state);
  }
  callbackForNumbers = (i1, i2) =>{
    this.setState({
      input1 : i1,
      input2 : i2
    });
  }
  callbackForOperator = (op) => {
    this.setState({
      operator : op
    });
  }
}

export default App;
