import * as types from './types'

export function setPlayerName( name ) {
  return {
    type: types.SET_PLAYER_NAME,
    payload: name
  }
}

export function setCurrentQuestionIndex( index ) {
  return {
    type: types.SET_CURRENT_QUESTION_INDEX,
    payload: index
  }
}

export function nextQuestion( name ) {
  return function( dispatch, getState ) {
    const nextQIndex = getState().game_state.current_question_index + 1
    return dispatch( setCurrentQuestionIndex(nextQIndex) )
  }
}

export function incrementTotalScore( amount ) {
  return {
    type: types.INCREMENT_TOTAL_SCORE,
    payload: amount
  }
}

export function setSelectedAnswerIndex( index ) {
  return {
    type: types.SET_SELECTED_ANSWER_INDEX,
    payload: index
  }
}
