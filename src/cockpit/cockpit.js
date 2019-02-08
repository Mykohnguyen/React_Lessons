import React , {useEffect} from 'react'
import Aux from '../hoc/Aux'

const cockpit = (props) =>{
    useEffect(()=>{
        console.log("hi this is use effect")
        // this will run whenever reload or  the empty [] says this will only run when first loaded
    })
    return (
        <Aux>
            <button onClick={props.toggle}>Hide People!</button>
            <button onClick={props.switch}>Switch Name </button>
            <button onClick={props.login}> Log in</button>
        </Aux>
    )
}

export default cockpit