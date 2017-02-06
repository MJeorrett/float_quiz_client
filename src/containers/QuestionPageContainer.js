import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { fetchQuestions } from '../redux/actions/questions_actions'
import { nextQuestion, setSelectedAnswerIndex } from '../redux/actions/game_state_actions'

import Question from '../components/Question'

class QuestionPageContainer extends React.Component {

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
      content = (
        <Question
          questionData={ this.props.currentQuestion }
          onAnswerSelect={ this.props.setSelectedAnswerIndex }/>
      )
    }

    return (
      <div>
        <p>taking the quiz as {this.props.player_name}</p>
        { content }
        <hr />
        <button
          onClick={ this.handleNextClicked }
          disabled={ this.props.selectedAnswerIndex === null }>
          Next
        </button>
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
    selectedAnswerIndex: state.game_state.selected_answer_index,
    onLastQuestion: currentQuestionIndex === lastQuestionIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch( fetchQuestions() ),
    nextQuestion: () => dispatch( nextQuestion() ),
    setSelectedAnswerIndex: index => dispatch( setSelectedAnswerIndex(index) )
  }
}

QuestionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPageContainer)

export default QuestionPageContainer
