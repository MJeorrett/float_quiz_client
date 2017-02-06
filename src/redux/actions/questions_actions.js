import fetch from 'isomorphic-fetch'

import * as types from './types'
import config from '../../config'

export function fetchQuestionsStarted() {
  return {
    type: types.FETCH_QUESTIONS_STARTED
  }
}

export function fetchQuestionsSuccess( questions ) {
  const scoreValues = questions[0].answers.map( answer => answer.score )
  const maxScoreValue = Math.max(...scoreValues)
  return {
    type: types.FETCH_QUESTIONS_SUCCESS,
    payload: {
      questions,
      max_score: maxScoreValue * questions.length
    }
  }
}

function fetchQuestions() {
  return function ( dispatch ) {
    dispatch( fetchQuestionsStarted() )
    return fetch( config.api_url )
      .then( res => res.json() )
      .then( json => dispatch( fetchQuestionsSuccess( json ) ) )
  }
}

export function fetchQuestionsIfNeeded() {
  return function ( dispatch, getState ) {
    if ( getState().questions.questions.length === 0 ) {
      return dispatch( fetchQuestions() )
    }
    else {
      return Promise.resolve()
    }
  }
}
