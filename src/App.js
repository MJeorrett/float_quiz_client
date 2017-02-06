import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import root_reducer from './redux/reducers'

import routes from './app_routes'
import './App.css';

const store = createStore(
  root_reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
      </Provider>
    )
  }
}

export default App;
