import React from 'react'
import { connect } from 'react-redux'

class QuestionContainer extends React.Component {

  render() {
    return <p>taking the quiz as {this.props.player_name}</p>
  }

}

const mapStateToProps = state => state.game_state

QuestionContainer = connect(
  mapStateToProps
)(QuestionContainer)

export default QuestionContainer
