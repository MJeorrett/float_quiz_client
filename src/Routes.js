import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './containers/Main'
import WelcomePageContainer from './containers/WelcomePageContainer'
import QuestionPageContainer from './containers/QuestionPageContainer'
import ResultsPageContainer from './containers/ResultsPageContainer'

export default (
  <Route path="/" component={ Main }>
    <IndexRoute component={ WelcomePageContainer }/>
    <Route path="questions" component={ QuestionPageContainer } />
    <Route path="results" component={ ResultsPageContainer } />
  </Route>
)
