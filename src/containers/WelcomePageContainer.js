import React from 'react'
import { connect } from 'react-redux'

import { setPlayerName, setCurrentQuestionIndex } from '../redux/actions/game_state_actions'
import { getPlayerName, getPlayerNameIsValid } from '../selectors'

import Welcome from '../components/Welcome'

class WelcomePageContainer extends React.Component {

  handleNextClicked = () => {
    this.props.resetCurrentQuestionIndex()
    this.props.router.push('questions')
  }

  render() {
    return (
      <div className='content'>
        <Welcome
          playerName={ this.props.playerName }
          onPlayerNameChange={ this.props.setPlayerName }
          onNextClick={ this.handleNextClicked }
          startEnabled={ this.props.playerNameIsValid }/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    playerName: getPlayerName(state),
    playerNameIsValid: getPlayerNameIsValid(state)
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    setPlayerName: name => dispatch( setPlayerName(name) ),
    resetCurrentQuestionIndex: () => dispatch( setCurrentQuestionIndex(0) )
  }
}

WelcomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePageContainer)

export default WelcomePageContainer
