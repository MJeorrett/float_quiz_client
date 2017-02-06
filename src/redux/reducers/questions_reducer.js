import * as types from '../actions/types'

const defaultState = {
  is_fetching: false,
  all: [],
  max_score: null
}

const questions_reducer = ( state=defaultState, action ) => {
  switch ( action.type ) {
    case types.FETCH_QUESTIONS_STARTED:
      return Object.assign( {}, state, {
        is_fetching: true
      })
    case types.FETCH_QUESTIONS_SUCCESS:
      return Object.assign( {}, state, {
        is_fetching: false,
        all: action.payload.questions,
        max_score: action.payload.max_score
      })
    default:
      return state
  }
}

export default questions_reducer
