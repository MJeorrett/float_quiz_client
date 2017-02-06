import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as types from './types'
import { nextQuestion } from './game_state_actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

it('should create SET_CURRENT_QUESTION_INDEX from nextQuestion', () => {
  const store = mockStore({
    game_state: {
      current_question_index: 2
    }
  })

  store.dispatch( nextQuestion() )
  expect(
    store.getActions()
  ).toEqual([
    { type: types.SET_CURRENT_QUESTION_INDEX, payload: 3 }
  ])
})
