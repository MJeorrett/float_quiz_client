import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as types from './types'
import * as keys from './local_storage_keys'
import {
  setPlayerName,
  setCurrentQuestionIndex,
  setTotalScore,
  nextQuestion,
  loadGameStateIfAny
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

  it('should loadGameStateIfAny', () => {
    localStorage.setItem( keys.PLAYER_NAME, "test name" )
    localStorage.setItem( keys.CURRENT_QUESTION_INDEX, 13 )
    localStorage.setItem( keys.TOTAL_SCORE, 45 )

    const expectedActions = [
      { type: types.SET_PLAYER_NAME, payload: "test name" },
      { type: types.SET_CURRENT_QUESTION_INDEX, payload: 13 },
      { type: types.SET_TOTAL_SCORE, payload: 45 }
    ]

    const store = mockStore({
      game_state: {}
    })
    store.dispatch( loadGameStateIfAny() )
    expect( store.getActions() ).toEqual( expectedActions )
  })

  it('should not send any actions if no state saved', () => {
    localStorage.clear()
    const store = mockStore({
      game_state: {}
    })
    store.dispatch( loadGameStateIfAny() )
    expect( store.getActions() ).toEqual( [] )
  })
})
