import React, { Component } from 'react';
import './App.css';
import Page from './components/page/page.js';



class App extends Component {

async fetchAsync () {
  const response = await fetch('https://reqres.in/api/users?page=2');
  return await response.json();
}




  
  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;










