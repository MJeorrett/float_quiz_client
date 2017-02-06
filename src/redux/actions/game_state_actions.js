import * as types from './types'
import * as keys from './local_storage_keys'

export function setPlayerName( name ) {
  localStorage.setItem( keys.PLAYER_NAME, name )
  return {
    type: types.SET_PLAYER_NAME,
    payload: name
  }
}

export function setCurrentQuestionIndex( index ) {
  localStorage.setItem( keys.CURRENT_QUESTION_INDEX, index )
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
  localStorage.setItem( keys.TOTAL_SCORE, score )
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

export function setIsFinished( isFinished ) {
  localStorage.setItem( keys.IS_FINISHED, isFinished )
  return {
    type: types.SET_IS_FINISHED,
    payload: isFinished
  }
}

export function loadGameStateIfAny() {
  return function( dispatch ) {
    const playerName = localStorage.getItem(keys.PLAYER_NAME)
    const currentQuestionIndex =
      localStorage.getItem( keys.CURRENT_QUESTION_INDEX )
    const totalScore = localStorage.getItem( keys.TOTAL_SCORE )
    if ( playerName ) dispatch( setPlayerName( playerName ) )
    if ( currentQuestionIndex ) {
      dispatch( setCurrentQuestionIndex( parseInt(currentQuestionIndex, 10) ) )
    }
    if ( totalScore ) dispatch( setTotalScore( parseInt(totalScore, 10) ) )
  }
}
