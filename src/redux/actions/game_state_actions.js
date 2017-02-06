import * as types from './types'

export function setPlayerName( name ) {
  return {
    type: types.SET_PLAYER_NAME,
    payload: name
  }
}

export function nextQuestion( name ) {
  return {
    type: types.NEXT_QUESTION
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
