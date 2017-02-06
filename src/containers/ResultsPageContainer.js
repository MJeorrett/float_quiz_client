import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

class ResultsPageContainer extends React.Component {

  render() {
    return (
      <div>
        <p>Thank you {this.props.playerName}</p>
        <p>You scored {this.props.totalScore} out of a possible {this.props.maxScore}</p>
        <button
          onClick={ () => browserHistory.push('/') }>
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

ResultsPageContainer = connect(
  mapStateToProps
)(ResultsPageContainer)

export default ResultsPageContainer
