import * as types from '../actions/types'

const defaultState = {
  isFetching: false,
  questions: {},
  questionIds: []
}

const questions_reducer = ( state=defaultState, action ) => {
  switch ( action.type ) {
    case types.FETCH_QUESTIONS_STARTED:
      return Object.assign( {}, state, {
        isFetching: true
      })
    default:
      return state
  }
}

export default questions_reducer
