import React from 'react';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';
import Register from './Register';
import App from './App';
function Home() {

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
        <div class="background-image"></div>
        <he class="rainbow-text">[L]et's [G]et [B]read [T]his</he>
        <br />
        <br />
        <br />
        <a href="/register">Register Today!</a>
       </header>
        </div>
        {/* <button onClick={() => }"./src/Register.js">Register today!</button> */}
        </header>
        {items.map(item => <Person item={item}/>)}
      </div>
    );
  }
  
  export default Home;
  
  
