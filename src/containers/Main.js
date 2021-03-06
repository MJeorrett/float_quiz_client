import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestionsIfNeeded } from '../redux/actions/questions_actions'
import { loadGameStateIfAny } from '../redux/actions/game_state_actions'
import * as selectors from '../selectors'

class Main extends React.Component {

  componentDidMount() {
    this.props.loadGameState()
    this.props.fetchQuestions()
  }

  componentWillReceiveProps( newProps ) {
    if ( newProps.isFinished && this.props.location.pathname !== 'results' ) {
      this.props.router.push('results')
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Float Cash Flow Quiz</h1>
        </div>
        <div className="main-container">
          { this.props.children }
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    isFinished: selectors.getIsFinished(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadGameState: () => dispatch( loadGameStateIfAny() ),
    fetchQuestions: () => dispatch( fetchQuestionsIfNeeded() )
  }
}

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default Main
