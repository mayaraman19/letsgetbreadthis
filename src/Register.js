import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
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
            interests: ""
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

    }
    render() {
      const options = [
        'Freshman', 'Sophomore', 'Junior', 'Senior', 'Other'
      ];
      const defaultOption = options[0];
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
            <Dropdown options={options} onChange={this.handleYearChange} value={this.state.year} placeholder="Select a year" />
            <p>Pronouns</p>
            <input
              type="text"
              value={this.state.pronouns}
              onChange={this.handlePronounsChange}
            />
            <p>Interests (3 at most please!)</p>
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