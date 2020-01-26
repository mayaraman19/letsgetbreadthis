import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';


addUser = e => {
  e.preventDefault();
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection("users-test").add({
    name: this.state.name,
    school: this.state.school,
    age: this.state.age
  });  
  this.setState({
    name: "",
    school: "",
    age: "",
  });
};