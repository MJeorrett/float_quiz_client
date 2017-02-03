import { setPlayerName, nextQuestion } from '../actions/game_state_actions'
import game_state_reducer from './game_state_reducer'

it('should return default state', () => {
  expect(
    game_state_reducer( undefined, {} )
  ).toEqual({
    player_name: "",
    current_question_no: 1
  })
})

it('should handle SET_PLAYER_NAME action', () => {
  const oldState = {
    player_name: "old player name",
    current_question_no: 1
  }
  expect(
    game_state_reducer( oldState, setPlayerName( "new name" ) )
  ).toEqual({
    player_name: "new name",
    current_question_no: 1
  })
})

it('should handle NEXT_QUESTION action', () => {
  const oldState = {
    player_name: "David Bowie",
    current_question_no: 1,
  }
  expect(
    game_state_reducer( oldState, nextQuestion() )
  ).toEqual({
    player_name: "David Bowie",
    current_question_no: 2
  })
})
