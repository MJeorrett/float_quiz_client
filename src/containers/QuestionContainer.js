import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { fetchQuestions } from '../redux/actions/questions_actions'
import { nextQuestion } from '../redux/actions/game_state_actions'

import Question from '../components/Question'

class QuestionContainer extends React.Component {

  constructor() {
    super()
    this.handleNextClicked = this.handleNextClicked.bind( this )
  }

  componentDidMount() {
    this.props.fetchQuestions()
  }

  handleNextClicked() {
    if ( this.props.onLastQuestion ) {
      browserHistory.push( 'results' )
    }
    else {
      this.props.nextQuestion()
    }
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
        <button onClick={ this.handleNextClicked }>Next</button>
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
