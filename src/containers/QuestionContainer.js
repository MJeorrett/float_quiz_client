import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../redux/actions/questions_actions'

class QuestionContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    return (
      <div>
        <p>taking the quiz as {this.props.player_name}</p>
        <p>{ JSON.stringify( this.props.questions ) }</p>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    player_name: state.game_state.player_name,
    questions: state.questions.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch( fetchQuestions() )
  }
}

QuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer)

export default QuestionContainer
