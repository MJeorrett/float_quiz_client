import { setPlayerName } from '../actions/game_state_actions'
import game_state_reducer from './game_state_reducer'

it('should return default state', () => {
  expect(
    game_state_reducer( undefined, {} )
  ).toEqual({
    player_name: ""
  })
})

it('should handle SET_PLAYER_NAME action', () => {
  const oldState = {
    player_name: "old player name"
  }
  expect(
    game_state_reducer( oldState, setPlayerName( "new name" ) )
  ).toEqual(
    {
      player_name: "new name"
    }
  )
})
