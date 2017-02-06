import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { fetchQuestionsIfNeeded } from '../redux/actions/questions_actions'
import {
  setSelectedAnswerIndex,
  incrementTotalScore,
  nextQuestion,
  setIsFinished
} from '../redux/actions/game_state_actions'

import Question from '../components/Question'

class QuestionPageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  handleNextClicked = () => {
    this.props.incrementTotalScore( this.props.selectedAnswerScore )

    if ( this.props.onLastQuestion ) {
      this.props.setFinished()
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
          selectedAnswerIndex={ this.props.selectedAnswerIndex }
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
        <p>Current score:{this.props.totalScore}</p>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const questions = state.questions.questions
  const currentQuestionIndex = state.game_state.current_question_index
  const currentQuestion = questions[currentQuestionIndex]
  const lastQuestionIndex = questions.length - 1
  const selectedAnswerIndex = state.game_state.selected_answer_index
  let selectedAnswerScore = null
  if ( selectedAnswerIndex !== null) {
    selectedAnswerScore = currentQuestion.answers[selectedAnswerIndex].score
  }

  return {
    player_name: state.game_state.player_name,
    currentQuestion,
    selectedAnswerIndex,
    selectedAnswerScore,
    totalScore: state.game_state.total_score,
    onLastQuestion: currentQuestionIndex === lastQuestionIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch( fetchQuestionsIfNeeded() ),
    setSelectedAnswerIndex: index => dispatch( setSelectedAnswerIndex(index) ),
    incrementTotalScore: score => dispatch( incrementTotalScore(score) ),
    nextQuestion: () => dispatch( nextQuestion() ),
    setFinished: () => dispatch( setIsFinished(true) )
  }
}

QuestionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPageContainer)

export default QuestionPageContainer
