import React, { Component } from 'react';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Cockpit from '../cockpit/cockpit'
class App extends Component {
  state= {
    persons:[
      {id:0,name:"Max", age:28},
      {id:1,name:"Manu", age: 29},
      {id:2,name:"Stephanie", age:26}
    ],
    showPersons:true
  }

  switchNames=(newName)=>{
      this.setState({
        persons:[
          {name:"Michael", age: 26},
          {name:newName, age: 29},
          {name:"Stephanie", age:27}
        ]
      })
  }
  nameChanged =(event,id)=>{
    const personindex = this.state.persons.findIndex(p =>{
    
      return p.id === id;
      
    })
    console.log(personindex,"personindex")
    const person = {
      ...this.state.persons[personindex]
    }
    console.log(person, "person")
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personindex] = person;
    console.log(persons)
    this.setState({
      persons:persons
    })
  }

  togglePersons =() =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    })
  }
  deletePerson=(index) =>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons})
  }
  render() {
    let persons = null;
    if(this.state.showPersons){
        persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChanged}/>
        </div>
      )
      console.log(persons,"HI")
    }
    return (
      <div className="App">
      <Cockpit
        toggle={this.togglePersons}
        switch={this.switchNames.bind(this,"mikey")}>
      </Cockpit>
      {persons}
      </div>
    );
  }
}

export default App;
