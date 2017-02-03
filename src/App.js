import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Float Cash Flow Quiz</h1>
        <p>API_KEY: {process.env.API_KEY}</p>
      </div>
    )
  }
}

export default App;
