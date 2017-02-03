import * as types from '../actions/types'

const defaultState = {
  player_name: ""
}

const game_state_reducer = ( state = defaultState, action ) => {
  switch( action.type ) {
    case types.SET_PLAYER_NAME:
      return Object.assign( {}, state, {
        player_name: action.payload
      })
    default:
      return state
  }
}

export default game_state_reducer
