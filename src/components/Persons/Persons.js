import React from 'react';

import Person from './Person/Person'

const persons = (props) =>{
    return(
    props.persons.map((x,index) =>{
        return <Person
        click={()=>props.clicked(index)} 
        name={x.name} 
        age ={x.age}
        key={x.id}
        changed={(event)=>props.changed(event,x.id)}/>
        })
    )}
export default persons;