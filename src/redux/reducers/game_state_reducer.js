import * as types from '../actions/types'

const defaultState = {
  player_name: "",
  current_question_index: 0,
  total_score: 0,
  selected_answer_score: null
}

const game_state_reducer = ( state = defaultState, action ) => {
  switch( action.type ) {
    case types.SET_PLAYER_NAME:
      return Object.assign( {}, state, {
        player_name: action.payload
      })
    case types.NEXT_QUESTION:
      return Object.assign( {}, state, {
        current_question_index: state.current_question_index + 1,
        total_score: state.total_score + state.selected_answer_score,
        selected_answer_score: null
      })
    default:
      return state
  }
}

export default game_state_reducer
