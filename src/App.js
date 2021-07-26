import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = Variable in React that can be changed without refreshing. 
  // useEffect = run code on a condition in React

  useEffect(() => {
    // Run code here
    // const username = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'));
  }, []) //Condition  if it is blank inside [], this code runs Once when the app component loads. If there is a variable it will run every time the variable changes.

  const sendMessage = (event) => {
    // Messaging Logic
    event.preventDefault();
    setMessages([...messages, input]);
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
      {
        messages.map(message => (
          <Message text={message} />
        ))
      }
    </div>
  );
}

export default App;
