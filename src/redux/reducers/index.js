import { combineReducers } from 'redux'

import game_state_reducer from './game_state_reducer'
import questions_reducer from './questions_reducer'

const root_reducer = combineReducers({
  game_state: game_state_reducer,
  questions: questions_reducer
})

export default root_reducer
