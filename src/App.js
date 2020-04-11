import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Adri', age: 21 },
      { name: 'Dimitri', age: 28 },
      { name: 'Mitroslav', age: 38 }

    ]
  }

  switchNameHandler = (newName) => {
    console.log('Click!');
    //this.state.persons[0].name = 'Adrian'
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Dimitrislovako', age: 28 },
        { name: 'Mitroslavokildo', age: 38 }

      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Dimitrislovako', age: 28 },
        { name: 'Mitroslavokildo', age: 38 }

      ]
    })
  }

  render() {

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
}

    return (
      <div className="App">
        <h1>HI, I'M ADRIAN MFUCKER</h1>
        <button
        style={style}
        onClick={()=>this.switchNameHandler('Adrijajajaker')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click= {this.switchNameHandler.bind(this, 'Madajajajajaker')}
          />


      </div>
    );
  }
}

export default App;