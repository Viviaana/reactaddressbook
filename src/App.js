import React, {Component} from 'react';
import './App.css';


class App extends Component {
  state = {
    names: [],
    numbers : [],
    currentNames: "",
    currentNumbers: "",
    }

  recordName = (event) => {
      this.setState({
        currentNames: event.target.value
    })
  }

  addName = () =>{
    this.setState({
      names: [...this.state.names, this.state.currentNames],
      currentNames: "",
    })
  }

  recordNumber = (event) => {
      this.setState({
        currentNumbers: event.target.value
    })
  }

  addNumber = () =>{
    this.setState({
      numbers: [...this.state.numbers, this.state.currentNumbers],
      currentNumbers: "",
    })
  }

keyPressed = (event) => {
  if (event.key === "Enter"){
  this.addName();
  this.addNumber();
}
}

  render(){
    let eachNumber = this.state.numbers.map((number, index) => {
    return <li key = {index}>{number}</li>
    })
    let eachName = this.state.names.map((name, index) => {
      return <li key = {index}>{name}</li>
      })

      return (
        <div className="App">
          <h1>Address Book</h1>

            <input type = "text" onChange={this.recordName} value = {this.state.currentNames} placeholder = "Name"/>
            <input type = "number" onChange={this.recordNumber} onKeyPress = {this.keyPressed} value = {this.state.currentNumbers} placeholder = "Number"/>

            <div class = "list">
            <ul>
            {eachName}
            </ul>
            <ul>
            {eachNumber}
            </ul>
            </div>
        </div>
      );
    }
  }
  export default App;