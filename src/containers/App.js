import React, { Component, useState } from 'react';

import Person from '../components/Persons/Person/Person';
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Adri', age: 21 },
      { id: 'asdf2', name: 'Dimitri', age: 28 },
      { id: 'asdf3', name: 'Mitroslav', age: 38 },
      { id: 'asdf4', name: 'Adri', age: 21 },
      { id: 'asdf5', name: 'Dimitri', age: 28 },
      { id: 'asdf6', name: 'Mitroslav', age: 38 },
      { id: 'asdf7', name: 'Adri', age: 21 },
      { id: 'asdf8', name: 'Dimitri', age: 28 },
      { id: 'asdf9', name: 'Mitroslav', age: 38 }
      

    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {

      ...this.state.persons[personIndex]
    };


    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;


    if (this.state.showPersons) {
      persons = 
        
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
      ;

    }


    return (
        <div className={classes.App}>
            <Cockpit 
            showPersons={this.state.showPersons}
            persons = {this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
}

export default App;