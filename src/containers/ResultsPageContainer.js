import React from 'react'
import { connect } from 'react-redux'

import { resetGameState } from '../redux/actions/game_state_actions'

class ResultsPageContainer extends React.Component {

  handleTryAgainClick = () => {
    this.props.resetGameState()
    this.props.router.push('/')
  }

  render() {
    return (
      <div>
        <p>Thank you {this.props.playerName}</p>
        <p>You scored {this.props.totalScore} out of a possible {this.props.maxScore}</p>
        <button
          onClick={ this.handleTryAgainClick }>
          Try Again
        </button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    playerName: state.game_state.player_name,
    totalScore: state.game_state.total_score,
    maxScore: state.questions.max_score
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
