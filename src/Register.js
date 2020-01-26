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
            age: "",
            school: "",
            year: "",
            pronouns: "",
            Interests: ""
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

    handleYearChange = e => {
        this.setState({ age: e.target.value});
    }

    heandlePronounsChange = e => {
        this.setState({ age: e.target.value});
    }

    handleInterestsChange = e => {
        this.setState({ age: e.target.value});
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
            <p>Age:</p>
            <input 
                type="number"
                value={this.state.age} 
                onChange={this.handleAgeChange}
            />
            <p>School:</p>
            <input 
                type="text"
                value={this.state.school} 
                onChange={this.handleSchoolChange}
            />
            <p>Year:</p>
            <input
              type="number"
              value={this.state.year}
              onChange={this.handleSchoolChange}
            />
            <p>Pronouns</p>
            <input
              type="text"
              value={this.state.pronouns}
              onChange={this.handlePronounsChange}
            />
            <p>Interests</p>
            <input
              type="text"
              value={this.state.interests}
              onChange={this.handlePronounsChange}
            />
            <br></br>
            <br></br>
            <button 
            onClick={this.createMessage}
            >
                Submit
            </button>
            </div>
        );
    }
}

export default Register;