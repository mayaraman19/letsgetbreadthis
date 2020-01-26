import React from 'react';
import './App.css';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';


class Register extends React.Component{
    render = () => {
    return ( 
        <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
        </form>
    );
    }
}

export default Register;