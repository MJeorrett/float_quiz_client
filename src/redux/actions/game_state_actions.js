import * as types from './types'

const PLAYER_NAME_KEY = 'playerName'
const CURRENT_QUESTION_INDEX_KEY = 'currentQuestionIndex'
const TOTAL_SCORE_KEY = 'totalScoreKey'

export function setPlayerName( name ) {
  localStorage.setItem( PLAYER_NAME_KEY, name )
  return {
    type: types.SET_PLAYER_NAME,
    payload: name
  }
}

export function setCurrentQuestionIndex( index ) {
  localStorage.setItem( CURRENT_QUESTION_INDEX_KEY, index )
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

export function setTotalScore( score ) {
  localStorage.setItem( TOTAL_SCORE_KEY, score )
  return {
    type: types.SET_TOTAL_SCORE,
    payload: score
  }
}

export function incrementTotalScore( amount ) {
  return function( dispatch, getState ) {
    const newTotalScore = getState().game_state.total_score + amount
    return dispatch( setTotalScore(newTotalScore) )
  }
}

export function setSelectedAnswerIndex( index ) {
  return {
    type: types.SET_SELECTED_ANSWER_INDEX,
    payload: index
  }
}
