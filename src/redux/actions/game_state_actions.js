import * as types from './types'
import * as keys from './local_storage_keys'
import lsHelper from '../helpers/localStorageHelper'

export function setPlayerName( name ) {
  lsHelper.setItem( keys.PLAYER_NAME, name )
  return {
    type: types.SET_PLAYER_NAME,
    payload: name
  }
}

export function setCurrentQuestionIndex( index ) {
  lsHelper.setItem( keys.CURRENT_QUESTION_INDEX, index )
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
  lsHelper.setItem( keys.TOTAL_SCORE, score )
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
  lsHelper.setItem( keys.IS_FINISHED, isFinished )
  return {
    type: types.SET_IS_FINISHED,
    payload: isFinished
  }
}

export function loadGameStateIfAny() {
  return function( dispatch ) {

    const playerName = lsHelper.getItem(keys.PLAYER_NAME)
    const currentQuestionIndex =
      lsHelper.getItem( keys.CURRENT_QUESTION_INDEX )
    const totalScore = lsHelper.getItem( keys.TOTAL_SCORE )
    const isFinished = lsHelper.getItem( keys.IS_FINISHED )

    if ( playerName ) dispatch( setPlayerName(playerName) )
    if ( currentQuestionIndex ) {
      dispatch( setCurrentQuestionIndex(currentQuestionIndex) )
    }
    if ( totalScore ) dispatch( setTotalScore(totalScore) )
    if ( isFinished ) dispatch( setIsFinished(isFinished) )
  }
}

export function resetGameState() {
  return function( dispatch ) {
    dispatch( setCurrentQuestionIndex(0) )
    dispatch( setTotalScore(0) )
    dispatch( setIsFinished(false) )
  }
}
