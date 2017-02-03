import React, { Component } from 'react'
import runtimeEnv from '@mars/heroku-js-runtime-env'

import './App.css';

class App extends Component {
  render() {
    const env_vars = runtimeEnv()
    return (
      <div>
        <h1>Welcome to the Float Cash Flow Quiz</h1>
        <p>environment variables: {env_vars}</p>
      </div>
    )
  }
}

export default App
