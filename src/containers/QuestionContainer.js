import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestions } from '../redux/actions/questions_actions'
import { nextQuestion } from '../redux/actions/game_state_actions'

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
        <hr />
        <button onClick={ this.props.nextQuestion }>Next</button>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const questions = state.questions.questions
  const currentQuestionIndex = state.game_state.current_question_index
  const lastQuestionIndex = questions.length - 1

  return {
    player_name: state.game_state.player_name,
    currentQuestion: questions[currentQuestionIndex],
    onLastQuestion: currentQuestionIndex === lastQuestionIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch( fetchQuestions() ),
    nextQuestion: () => dispatch( nextQuestion() )
  }
}

QuestionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer)

export default QuestionContainer
