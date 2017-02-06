import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as types from './types'
import * as keys from './local_storage_keys'
import {
  setPlayerName,
  setCurrentQuestionIndex,
  setTotalScore,
  nextQuestion
} from './game_state_actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('nextQuestion', () => {

  beforeEach( () => {
    localStorage.clear()
  })

  it('should save player name in local storage', () => {
    setPlayerName( "test name" )
    expect(
      localStorage.getItem( keys.PLAYER_NAME )
    ).toEqual( "test name" )
  })

  it('should save current question index in local storage', () => {
    setCurrentQuestionIndex( 2 )
    expect(
      localStorage.getItem( keys.CURRENT_QUESTION_INDEX )
    ).toEqual( "2" )
  })

  it('should save total score', () => {
    setTotalScore( 25 )
    expect(
      localStorage.getItem( keys.TOTAL_SCORE )
    ).toEqual( "25" )
  })

  it('should create SET_CURRENT_QUESTION_INDEX from nextQuestion call', () => {
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
})
