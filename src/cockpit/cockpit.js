import React from 'react'

const cockpit = (props) =>{
    return (
        <div>
            <button onClick={props.toggle}>Hide People!</button>
            <button onClick={props.switch}>Switch Name </button>
        </div>
    )
}

export default cockpit