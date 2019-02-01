import React from 'react'
import Aux from '../hoc/Aux'

const cockpit = (props) =>{

    return (
        <Aux>
            <button onClick={props.toggle}>Hide People!</button>
            <button onClick={props.switch}>Switch Name </button>
        </Aux>
    )
}

export default cockpit