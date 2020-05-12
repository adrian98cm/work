import React, { Component, useState } from 'react';

import Person from '../components/Persons/Person/Person';
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

import withClass from '../hoc/withClass'
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

  }

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');

  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

    this.setState((prevState, props) =>{ 
      return{
        persons: persons, 
      changeCounter: prevState.changeCounter + 1 }
      
    });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  loginHandler = () => {
    this.setState({authenticated : true});
  }

  render() {

    console.log('[App.js] render')

    let persons = null;


    if (this.state.showPersons) {
      persons =

        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated = {this.state.authenticated}
        />
        ;

    }


    return (
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>

<AuthContext.Provider value = {{
  authenticated: this.state.authenticated, 
  login: this.loginHandler
  }} 
  >
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App,classes.App);