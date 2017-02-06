import * as types from '../actions/types'

const defaultState = {
  isFetching: false,
  questions: [],
  max_score: null
}

const questions_reducer = ( state=defaultState, action ) => {
  switch ( action.type ) {
    case types.FETCH_QUESTIONS_STARTED:
      return Object.assign( {}, state, {
        isFetching: true
      })
    case types.FETCH_QUESTIONS_SUCCESS:
      return Object.assign( {}, state, {
        isFetching: false,
        questions: action.payload.questions,
        max_score: action.payload.max_score
      })
    default:
      return state
  }
}

export default questions_reducer
