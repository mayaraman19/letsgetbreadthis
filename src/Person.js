import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';


// props = {item, blah}
function Person(props) {
  return (
    <div className="Person">
      <h1>{props.item.name}</h1>
      <h2>{props.item.age}</h2>
      <h2>{props.item.school}</h2>
      <h2>{props.item.year}</h2>
      <h2>{props.item.pronouns}</h2>
      <h2>{props.item.interests}</h2>
    </div>
  );
}

export default Person;
