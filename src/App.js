import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import root_reducer from './redux/reducers'

import Main from './Main'
import WelcomeContainer from './containers/WelcomeContainer'
import './App.css';

const store = createStore( root_reducer )

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ Main }>
            <IndexRoute component={ WelcomeContainer }/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App;
