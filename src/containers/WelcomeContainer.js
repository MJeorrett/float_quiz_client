import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { setPlayerName } from '../redux/actions/game_state_actions'

import Welcome from '../components/Welcome'

class WelcomeContainer extends React.Component {

  render() {
    return <Welcome onNextClick={ this.props.setUserName }/>
  }

}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    setUserName: name => {
      dispatch( setPlayerName(name) )
      browserHistory.push('questions')
    }
  }
}

WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer)

export default WelcomeContainer
