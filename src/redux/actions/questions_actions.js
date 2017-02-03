import * as types from './types'

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
