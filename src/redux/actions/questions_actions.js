import * as types from './types'
import config from '../../config'

export function fetchQuestionsStarted() {
  return {
    type: types.FETCH_QUESTIONS_STARTED
  }
}

export function fetchQuestionsSuccess( questions ) {
  return {
    type: types.FETCH_QUESTIONS_SUCCESS,
    payload: questions
  }
}

export function fetchQuestions() {
  return function ( dispatch ) {
    dispatch( fetchQuestionsStarted() )
    return fetch( config.api_url )
      .then( res => res.json() )
      .then( json => dispatch( fetchQuestionsSuccess( json ) ) )
  }
}
