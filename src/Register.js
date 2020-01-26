import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './App.css';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';
import {Redirect} from 'react-router-dom'


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: "",
            school: "",
            year: "",
            pronouns: "",
            interests: "",
            toContact: false
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
      console.log(e);
        this.setState({ year: e.value});
    }

    handlePronounsChange = e => {
        this.setState({ pronouns: e.target.value});
    }

    handleInterestsChange = e => {
        this.setState({ interests: e.target.value});
    }
  submitForm = () => {
    let db = firebase.firestore();
    console.log(this.state);
    db.collection("users-test").add(this.state)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
      this.setState({toContact: true});

    }
    render() {
      const options = [
        'Freshman', 'Sophomore', 'Junior', 'Senior', 'Other'
      ];
      const defaultOption = options[0];
      if (this.state.toContact=== true) {
        return <Redirect to='/users' />
      }
        return (
            <div>
            <h3>Name:</h3>
            <input 
                type="text"
                value={this.state.name} 
                onChange={this.handleNameChange}
            />
            <h3>Age:</h3>
            <input 
                type="number"
                value={this.state.age} 
                onChange={this.handleAgeChange}
            />
            <h3>School:</h3>
            <input 
                type="text"
                value={this.state.school} 
                onChange={this.handleSchoolChange}
            />
            <h3>Year:</h3>
            <Dropdown options={options} onChange={this.handleYearChange} value={this.state.year} placeholder="Select a year" />
            <h3>Pronouns</h3>
            <input
              type="text"
              value={this.state.pronouns}
              onChange={this.handlePronounsChange}
            />
            <h3>Interests (3 at most please!)</h3>
            <input
              type="text"
              value={this.state.interests}
              onChange={this.handleInterestsChange}
            />
            <br></br>
            <br></br>
            <button 
            onClick={this.submitForm}
            >
                Submit
            </button>
            </div>
        );
    }
}

export default Register;