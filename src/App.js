import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Float Cash Flow Quiz</h1>
        <p>Running in {process.env.NODE_ENV}</p>
      </div>
    )
  }
}

export default App;
