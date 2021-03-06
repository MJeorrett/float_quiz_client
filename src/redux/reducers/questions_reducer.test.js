import * as types from '../actions/types'
import { fetchQuestionsStarted, fetchQuestionsSuccess } from '../actions/questions_actions'
import questions_reducer from './questions_reducer'

it('should return initial state', () => {
  expect(
    questions_reducer( undefined, {} )
  ).toEqual({
    is_fetching: false,
    all: [],
    max_score: null
  })
})

it('should handle FETCH_QUESTIONS_STARTED action', () => {
  const oldState = {
    is_fetching: false,
    all: [],
    max_score: null
  }
  expect(
    questions_reducer( oldState, fetchQuestionsStarted() )
  ).toEqual({
    is_fetching: true,
    all: [],
    max_score: null
  })
})

it('should handle FETCH_QUESTIONS_SUCCESS action', () => {
  const oldState = {
    is_fetching: true,
    all: [],
    max_score: null
  }
  const questions = [
    { questionText: "question 1", answers:[
      { text: "Answer 1a", score: 20 },
      { text: "Answer 1b", score: 10 },
      { text: "Answer 1c", score: 0 },
    ]},
    { questionText: "question 2", answers:[
      { text: "Answer 2a", score: 20 },
      { text: "Answer 2b", score: 10 },
      { text: "Answer 2c", score: 0 },
    ]},
    { questionText: "question 3", answers:[
      { text: "Answer 3a", score: 20 },
      { text: "Answer 3b", score: 10 },
      { text: "Answer 3c", score: 0 },
    ]}
  ]
  expect(
    questions_reducer( oldState, fetchQuestionsSuccess(questions) )
  ).toEqual({
    is_fetching: false,
    all: questions,
    max_score: 60
  })
})
