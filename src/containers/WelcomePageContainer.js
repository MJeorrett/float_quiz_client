import React from 'react'
import { connect } from 'react-redux'

import { fetchQuestionsIfNeeded } from '../redux/actions/questions_actions'
import { setPlayerName } from '../redux/actions/game_state_actions'

import Welcome from '../components/Welcome'

class WelcomePageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    return <Welcome onNextClick={ this.props.setUserName }/>
  }

}

const mapStateToProps = state => state
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchQuestions: () => dispatch( fetchQuestionsIfNeeded() ),
    setUserName: name => {
      dispatch( setPlayerName(name) )
      props.router.push('questions')
    }
  }
}

WelcomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePageContainer)

export default WelcomePageContainer
