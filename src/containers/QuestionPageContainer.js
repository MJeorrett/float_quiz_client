import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestionsIfNeeded } from '../redux/actions/questions_actions'
import {
  setSelectedAnswerIndex,
  incrementTotalScore,
  nextQuestion,
  setIsFinished
} from '../redux/actions/game_state_actions'
import * as selectors from '../selectors'

import Question from '../components/Question'

class QuestionPageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  handleNextClicked = () => {
    this.props.incrementTotalScore( this.props.selectedAnswerScore )

    if ( this.props.onLastQuestion ) {
      this.props.setFinished()
      this.props.router.push( 'results' )
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

const mapStateToProps = state => {
  return {
    player_name: selectors.getPlayerName(state),
    currentQuestion: selectors.getCurrentQuestion(state),
    selectedAnswerIndex: selectors.getSelectedAnswerIndex(state),
    selectedAnswerScore: selectors.getSelectedAnswerScore(state),
    totalScore: selectors.getTotalScore(state),
    onLastQuestion: selectors.getOnLastQuestion(state)
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
