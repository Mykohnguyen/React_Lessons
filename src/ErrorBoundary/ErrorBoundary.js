import React, {Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        message: ""
    }

    componentDidCatch = (error,info) =>{
        this.setState({
            hasError: true, 
            message : error})
    }

    render() {
        if(this.state.hasError == true){
            return <h1>{this.state.message}</h1>
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;