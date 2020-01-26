import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';


// props = {item, blah}
function Person(props) {
  return (
    <div className="Person">
      <h1>{props.item.name}</h1>
      <h2>{props.item.school}</h2>
      <h3>{props.blah}</h3>
      <h3>{props.food}</h3>
      <h3>{props.item.age}</h3>
    </div>
  );
}

export default Person;
