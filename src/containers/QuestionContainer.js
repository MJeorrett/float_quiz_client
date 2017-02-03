import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../redux/actions/questions_actions'

import Question from '../components/Question'

class QuestionContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    const currentQuestion = this.props.currentQuestion
    let content = <p>loading...</p>
    if ( currentQuestion ) {
      content = <Question questionData={ this.props.currentQuestion }/>
    }
    return (
      <div>
        <p>taking the quiz as {this.props.player_name}</p>
        { content }
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const questions = state.questions.questions
  const noOfQuestions = questions.length
  const currentQuestionNo = parseInt( ownProps.params.question_no, 10 )

  return {
    player_name: state.game_state.player_name,
    currentQuestion: questions[currentQuestionNo - 1],
    onLastQuestion: noOfQuestions === currentQuestionNo
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
