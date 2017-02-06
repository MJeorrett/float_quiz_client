import * as types from '../actions/types'

const defaultState = {
  player_name: "",
  current_question_index: 0,
  total_score: 0,
  selected_answer_index: null,
  is_finished: false
}

const game_state_reducer = ( state = defaultState, action ) => {
  switch( action.type ) {
    case types.SET_PLAYER_NAME:
      return Object.assign( {}, state, {
        player_name: action.payload
      })
    case types.SET_SELECTED_ANSWER_INDEX:
      return Object.assign( {}, state, {
        selected_answer_index: action.payload
      })
    case types.SET_TOTAL_SCORE:
      return Object.assign( {}, state, {
        total_score: action.payload
      })
    case types.SET_CURRENT_QUESTION_INDEX:
      return Object.assign( {}, state, {
        current_question_index: action.payload,
        selected_answer_index: null
      })
    case types.SET_IS_FINISHED:
      return Object.assign( {}, state, {
        is_finished: action.payload
      })
    default:
      return state
  }
}

export default game_state_reducer
