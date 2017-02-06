import React from 'react'
import { connect } from 'react-redux'

import { loadGameStateIfAny } from '../redux/actions/game_state_actions'

class Main extends React.Component {

  componentDidMount() {
    this.props.loadGameState()
  }

  componentWillReceiveProps( newProps ) {
    if ( newProps.isFinished && this.props.location.pathname !== 'results' ) {
      this.props.router.push('results')
    }
  }

  render() {
    return (
      <div>
        <h1>Float Cash Flow Quiz</h1>
        { this.props.children }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    isFinished: state.game_state.is_finished
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadGameState: () => dispatch( loadGameStateIfAny() )
  }
}

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default Main
