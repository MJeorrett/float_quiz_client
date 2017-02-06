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

export function fetchQuestions() {
  return function ( dispatch ) {
    dispatch( fetchQuestionsStarted() )
    return fetch( config.api_url )
      .then( res => res.json() )
      .then( json => dispatch( fetchQuestionsSuccess( json ) ) )
  }
}
