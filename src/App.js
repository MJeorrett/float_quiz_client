import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import root_reducer from './redux/reducers'

import Main from './Main'
import WelcomePageContainer from './containers/WelcomePageContainer'
import QuestionPageContainer from './containers/QuestionPageContainer'
import ResultsPageContainer from './containers/ResultsPageContainer'
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
        <Router history={ browserHistory }>
          <Route path="/" component={ Main }>
            <IndexRoute component={ WelcomePageContainer }/>
            <Route path="questions" component={ QuestionPageContainer } />
            <Route path="results" component={ ResultsPageContainer } />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App;
