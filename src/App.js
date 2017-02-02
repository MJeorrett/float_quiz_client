import React, { Component } from 'react'
import './App.css';

let currentEnvironment = "LOCAL"
if ( process.env.API_URL ) {
  currentEnvironment = "HEROKU"
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Float Cash Flow Quiz</h1>
        <p>currently running on {currentEnvironment}</p>
      </div>
    )
  }
}

export default App;
