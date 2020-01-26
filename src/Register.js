import React from 'react';
import './App.css';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            school: "",
            age: -1
        };
      }
    
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }
    
    handleSchoolChange = e => {
        this.setState({ school: e.target.value });
    }

    handleAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    render() {
        return (
            <div>
            <p>Name:</p>
            <input 
                type="text"
                value={this.state.name} 
                onChange={this.handleNameChange}
            />
            <p>School:</p>
            <input 
                type="text"
                value={this.state.school} 
                onChange={this.handleSchoolChange}
            />
            <Age>Age:</Age>
            <input 
                type="number"
                value={this.state.age} 
                onChange={this.handleAgeChange}
            />
            <button 
            onClick={this.createMessage}
            >
                Send Message
            </button>
            </div>
        );
    }
}

export default Register;