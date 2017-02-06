import {
  setPlayerName,
  setSelectedAnswerIndex,
  setTotalScore,
  setCurrentQuestionIndex,
  setIsFinished
} from '../actions/game_state_actions'

import game_state_reducer from './game_state_reducer'

it('should return default state', () => {
  expect(
    game_state_reducer( undefined, {} )
  ).toEqual({
    player_name: "",
    current_question_index: 0,
    total_score: 0,
    selected_answer_index: null,
    isFinished: false
  })
})

it('should handle SET_PLAYER_NAME action', () => {
  const oldState = {
    player_name: "old player name",
    current_question_index: 1,
    total_score: 0,
    selected_answer_index: null,
    isFinished: false
  }
  expect(
    game_state_reducer( oldState, setPlayerName( "new name" ) )
  ).toEqual({
    player_name: "new name",
    current_question_index: 1,
    total_score: 0,
    selected_answer_index: null,
    isFinished: false
  })
})

it('should handle SET_SELECTED_ANSWER_INDEX', () => {
  const oldState = {
    player_name: "player name",
    current_question_index: 4,
    total_score: 20,
    selected_answer_index: null,
    isFinished: false,
    isFinished: false
  }
  expect(
    game_state_reducer( oldState, setSelectedAnswerIndex( 2 ) )
  ).toEqual({
    player_name: "player name",
    current_question_index: 4,
    total_score: 20,
    selected_answer_index: 2,
    isFinished: false
  })
})

it('should handle SET_TOTAL_SCORE', () => {
  const oldState = {
    player_name: "player name",
    current_question_index: 4,
    total_score: 20,
    selected_answer_index: null,
    isFinished: false
  }
  expect(
    game_state_reducer( oldState, setTotalScore(30) )
  ).toEqual({
    player_name: "player name",
    current_question_index: 4,
    total_score: 30,
    selected_answer_index: null,
    isFinished: false
  })
})

it('should handle SET_CURRENT_QUESTION_INDEX', () => {
  const oldState = {
    player_name: "David Bowie",
    current_question_index: 3,
    total_score: 10,
    selected_answer_index: 2,
    isFinished: false
  }
  expect(
    game_state_reducer( oldState, setCurrentQuestionIndex(4) )
  ).toEqual({
    player_name: "David Bowie",
    current_question_index: 4,
    total_score: 10,
    selected_answer_index: null,
    isFinished: false
  })
})

it('should handle SET_IS_FINISHED', () => {
  const oldState = {
    player_name: "David Bowie",
    current_question_index: 3,
    total_score: 10,
    selected_answer_index: 2,
    isFinished: false
  }
  expect(
    game_state_reducer( oldState, setIsFinished(true) )
  ).toEqual({
    player_name: "David Bowie",
    current_question_index: 3,
    total_score: 10,
    selected_answer_index: 2,
    isFinished: true
  })
})
