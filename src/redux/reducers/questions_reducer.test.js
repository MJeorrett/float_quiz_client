import * as types from '../actions/types'
import { fetchQuestionsStarted } from '../actions/questions_actions'
import questions_reducer from './questions_reducer'

it('should return initial state', () => {
  expect(
    questions_reducer( undefined, {} )
  ).toEqual({
    isFetching: false,
    questions: []
  })
})

it('should handle fetch questions started', () => {
  const oldState = {
    isFetching: false,
    questions: []
  }
  expect(
    questions_reducer( oldState, fetchQuestionsStarted() )
  ).toEqual({
    isFetching: true,
    questions: []
  })
})
