import { combineReducers } from 'redux'

import game_state_reducer from './game_state_reducer'

const root_reducer = combineReducers({
  game_state: game_state_reducer
})

export default root_reducer
