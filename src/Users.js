import React from 'react';
import firebase from './lib/firebase';
import {useEffect, useState} from 'react';
import Person from './Person';
import Register from './Register';
import App from './App';
<<<<<<< HEAD

function Users() {
=======
function Users() {

>>>>>>> 3010b720932ffb7ac764bcdae8e2746f37a1e4c4
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
        <div>
        {items.map(item => <Person item={item}/>)}
        </div>
        );
      
    }
export default Users;