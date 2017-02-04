import { setPlayerName, nextQuestion, setSelectedAnswerScore } from '../actions/game_state_actions'
import game_state_reducer from './game_state_reducer'

it('should return default state', () => {
  expect(
    game_state_reducer( undefined, {} )
  ).toEqual({
    player_name: "",
    current_question_index: 0,
    total_score: 0,
    selected_answer_score: null
  })
})

it('should handle SET_PLAYER_NAME action', () => {
  const oldState = {
    player_name: "old player name",
    current_question_index: 1,
    total_score: 0,
    selected_answer_score: null
  }
  expect(
    game_state_reducer( oldState, setPlayerName( "new name" ) )
  ).toEqual({
    player_name: "new name",
    current_question_index: 1,
    total_score: 0,
    selected_answer_score: null
  })
})

it('should handle SET_SELECTED_ANSWER_SCORE', () => {
  const oldState = {
    player_name: "player name",
    current_question_index: 4,
    total_score: 20,
    selected_answer_score: null
  }
  expect(
    game_state_reducer( oldState, setSelectedAnswerScore( 15 ) )
  ).toEqual({
    player_name: "player name",
    current_question_index: 4,
    total_score: 20,
    selected_answer_score: 15
  })
})

it('should handle NEXT_QUESTION action', () => {
  const oldState = {
    player_name: "David Bowie",
    current_question_index: 3,
    total_score: 10,
    selected_answer_score: 15
  }
  expect(
    game_state_reducer( oldState, nextQuestion() )
  ).toEqual({
    player_name: "David Bowie",
    current_question_index: 4,
    total_score: 25,
    selected_answer_score: null
  })
})
