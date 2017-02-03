import * as types from './types'

export function setPlayerName( name ) {
  return {
    type: types.SET_PLAYER_NAME,
    payload: name
  }
}
