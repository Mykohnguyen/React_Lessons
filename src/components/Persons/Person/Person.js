import React, { Component} from 'react';
import './Person.css'
import PropTypes from 'prop-types'
import {AuthContext} from '../../../containers/App'


class Person extends Component{
    // const rnd = Math.random();

    // if(rnd > .7) {
    //     throw new Error ('Something went wrong');
    // }
    constructor (props){
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        console.log("component did mount")
        if(this.props.position == 1){
            this.inputElement.current.focus()
        }
    }
    render(){
        return(
            
        <div className="Person">
        <AuthContext.Consumer>
            {auth =>auth ? <p> I'm authenticated!</p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} </p>
            <p>{this.props.children}</p> 
            <input
            ref={this.inputElement} 
            type="text" 
            onChange={this.props.changed} value={this.props.name}/>
        </div>
        )
    }
}
Person.propTypes={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
}
export default Person;
