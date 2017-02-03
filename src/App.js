import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Main from './Main'
import Welcome from './components/Welcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
          <IndexRoute component={ Welcome }/>
        </Route>
      </Router>
    )
  }
}

export default App;
