import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';


function App() {

  const [items, setItems] = useState([]);

  //componentDidMount
  useEffect(() => {
    //call these once when app loads from here
    const db = firebase.firestore();
    db.collection("users-test").get().then(items => {
      console.log(items);
      const itemDocs = items.docs;
      // let i;
      // for(i = 0; i < itemDocs.length; i++) {
      //   data[i] = console.log(itemDocs[i].data());
      // }
      const data = itemDocs.map(doc => doc.data());
      setItems(data);
    console.log(data); // array of cities objects
    })
    //until here
  }, [])


  useEffect(() => {
    //this will execue every time the app loads
    // alert("Hello");
    // setTimeout(() => {
    //   setItems([1,2,3]);
    // }, 1000)
  }, []);

  console.log(items);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="button">Sign Up</a>
      </header>
      {items.map(item => <Person item={item} blah="1" food="banana" age={item.age}/>)}
    </div>
  );
}

export default App;
