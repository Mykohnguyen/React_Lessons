import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    persons:[
      {name:"Max", age:28},
      {name:"Manu", age: 29},
      {name:"Stephanie", age:26}
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
  nameChanged =(event)=>{
    this.setState({
      persons:[
        {name:"Michael", age: 26},
        {name:event.target.value, age: 29},
        {name:"Stephanie", age:27}
      ]
    })
  }

  togglePersons =() =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    })
  }
  render() {
    let persons = null;
    if( this.state.showPersons){
        persons = (
        <div>
            <Person
            name= {this.state.persons[0].name}
            age = {this.state.persons[0].age}
            click = {this.switchNames}/>
            <Person
            name= {this.state.persons[1].name}
            age = {this.state.persons[1].age}
            changed ={this.nameChanged}> My Hobbies: Racing
            </Person>
            <Person
            name= {this.state.persons[2].name}
            age = {this.state.persons[2].age}/>
          </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersons}>Hide People!</button>
        <button onClick={this.switchNames.bind(this,"Mikey")}>Switch Name </button>
    
      </div>
    );
  }
}

export default App;
