import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestionsIfNeeded } from '../redux/actions/questions_actions'
import { setPlayerName, setCurrentQuestionIndex } from '../redux/actions/game_state_actions'
import { getPlayerName } from '../selectors'

import Welcome from '../components/Welcome'

class WelcomePageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  handleNextClicked = () => {
    this.props.resetCurrentQuestionIndex()
    this.props.router.push('questions')
  }

  render() {
    return <Welcome
      playerName={ this.props.playerName }
      onPlayerNameChange={ this.props.setPlayerName }
      onNextClick={ this.handleNextClicked }/>
  }

}

const mapStateToProps = state => {
  return { playerName: getPlayerName(state) }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchQuestions: () => dispatch( fetchQuestionsIfNeeded() ),
    setPlayerName: name => dispatch( setPlayerName(name) ),
    resetCurrentQuestionIndex: () => dispatch( setCurrentQuestionIndex(0) )
  }
}

WelcomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePageContainer)

export default WelcomePageContainer
