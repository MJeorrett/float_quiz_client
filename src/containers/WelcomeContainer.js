import React from 'react'
import { connect } from 'react-redux'

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
    setUserName: name => dispatch( setPlayerName(name) )
  }
}

WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer)

export default WelcomeContainer
