import React, { PureComponent } from 'react';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Cockpit from '../cockpit/cockpit'
import WithClass from '../hoc/WithClass'

class App extends PureComponent {
  state= {
    persons:[
      {id:0,name:"Max", age:28},
      {id:1,name:"Manu", age: 29},
      {id:2,name:"Stephanie", age:26}
    ],
    showPersons:true,
    toggleClickCounter:0

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
    
    const person = {
      ...this.state.persons[personindex]
    }

    const persons = [...this.state.persons];
    persons[personindex] = person;
    this.setState({
      persons:persons
    })
  }

  togglePersons =() =>{
    const doesShow = this.state.showPersons;
    this.setState((prevState,props)=>{
      return({
        showPersons:!doesShow,
        toggleClickCounter:prevState.toggleClickCounter +1
      })
    })
    // this appoach will help the confusion there would be if you were changing one of the states in another component because of async
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
      <WithClass classes="App">
        <button onClick={() =>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          toggle={this.togglePersons}
          switch={this.switchNames.bind(this,"mikey")}>
        </Cockpit>
        {persons}
    <p>Count {this.state.toggleClickCounter}
    </p>
      </WithClass>
    );
  }
}

export default App;
