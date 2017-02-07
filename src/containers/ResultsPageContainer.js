import React from 'react'
import { connect } from 'react-redux'

import { resetGameState } from '../redux/actions/game_state_actions'
import * as selectors from '../selectors'

class ResultsPageContainer extends React.Component {

  handleTryAgainClick = () => {
    this.props.resetGameState()
    this.props.router.push('/')
  }

  render() {
    return (
      <div>
        <div className="content">
          <h3>Thank you {this.props.playerName}!</h3>
          <h3>You scored {this.props.totalScore} out of a possible {this.props.maxScore}</h3>
        </div>
        <nav>
          <button
            onClick={ this.handleTryAgainClick }>
            Try Again
          </button>
        </nav>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    playerName: selectors.getPlayerName(state),
    totalScore: selectors.getTotalScore(state),
    maxScore: selectors.getMaxScore(state)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    resetGameState: () => dispatch( resetGameState() )
  }
}

ResultsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPageContainer)

export default ResultsPageContainer
