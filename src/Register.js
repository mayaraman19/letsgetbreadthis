import React from 'react';
import './App.css';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';


<<<<<<< HEAD
class Register extends React.Component{
    cconstructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      render() {
        return (
          <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          </form>
        );
      }
}

export default Register;
=======
function Register (){
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
  
  export default Register;
>>>>>>> 866b35b4980ab5359247e0f765ef839585e13ebe
