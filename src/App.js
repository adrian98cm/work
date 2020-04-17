import React, { Component, useState } from 'react';

import Person from './Person/Person';
import classes from './App.module.css'

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
    let btnClass = '';


    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>HI, I'M LEARNING</h1>
          <p className={assignedClasses.join(' ')}>This is working!</p>
          <button className={btnClass}  onClick={this.togglePersonsHandler}>
              Switch Name
            </button>
          {persons}
        </div>
    );
  }
}

export default App;