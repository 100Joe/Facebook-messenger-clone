import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = Variable in React that can be changed without refreshing. 
  // useEffect = run code on a condition in React. This is a listener. 

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      });
  }, [])

  useEffect(() => {
    // Run code here
    // const username = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'));
  }, []) //Condition  if it is blank inside [], this code runs Once when the app component loads. If there is a variable it will run every time the variable changes.

  const sendMessage = (event) => {
    // Messaging Logic
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, { username: username, message: input }]);
    setInput('');

  }

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      {/* Input field */}
      <form>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

          {/* Button */}
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {/* Display Messages */}
      <FlipMove>
        {
          messages.map(message => (
            <Message username={username} message={message} /> //passing props to the messages
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
