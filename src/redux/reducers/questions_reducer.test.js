import * as types from '../actions/types'
import { fetchQuestionsStarted } from '../actions/questions_actions'
import questions_reducer from './questions_reducer'

it('should return initial state', () => {
  expect(
    questions_reducer( undefined, {} )
  ).toEqual({
    isFetching: false,
    questions: {},
    questionIds: []
  })
})

it('should handle fetch questions started', () => {
  const oldState = {
    isFetching: false,
    questions: { q1: "something" },
    questionIds: [ 'q1' ]
  }
  expect(
    questions_reducer( oldState, fetchQuestionsStarted() )
  ).toEqual({
    isFetching: true,
    questions: { q1: "something" },
    questionIds: [ 'q1' ]
  })
})
