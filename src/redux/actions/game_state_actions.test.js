import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import lsHelper from '../helpers/localStorageHelper'
import * as types from './types'
import * as keys from './local_storage_keys'
import * as actions from './game_state_actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('nextQuestion', () => {

  beforeEach( () => {
    localStorage.clear()
  })

  it('should save player name in local storage', () => {
    actions.setPlayerName( "test name" )
    expect(
      lsHelper.getItem( keys.PLAYER_NAME )
    ).toEqual( "test name" )
  })

  it('should save current question index in local storage', () => {
    actions.setCurrentQuestionIndex( 2 )
    expect(
      lsHelper.getItem( keys.CURRENT_QUESTION_INDEX )
    ).toEqual( 2 )
  })

  it('should save total score', () => {
    actions.setTotalScore( 25 )
    expect(
      lsHelper.getItem( keys.TOTAL_SCORE )
    ).toEqual( 25 )
  })

  it('should save isFinished', () => {
    actions.setIsFinished( true )
    expect(
      lsHelper.getItem( keys.IS_FINISHED )
    ).toEqual( true )
  })

  it('should create SET_CURRENT_QUESTION_INDEX from nextQuestion call', () => {
    const store = mockStore({
      game_state: {
        current_question_index: 2
      }
    })

    store.dispatch( actions.nextQuestion() )
    expect(
      store.getActions()
    ).toEqual([
      { type: types.SET_CURRENT_QUESTION_INDEX, payload: 3 }
    ])
  })

  it('should loadGameStateIfAny', () => {
    lsHelper.setItem( keys.PLAYER_NAME, "test name" )
    lsHelper.setItem( keys.CURRENT_QUESTION_INDEX, 13 )
    lsHelper.setItem( keys.TOTAL_SCORE, 45 )
    lsHelper.setItem( keys.IS_FINISHED, true )

    const expectedActions = [
      { type: types.SET_PLAYER_NAME, payload: "test name" },
      { type: types.SET_CURRENT_QUESTION_INDEX, payload: 13 },
      { type: types.SET_TOTAL_SCORE, payload: 45 },
      { type: types.SET_IS_FINISHED, payload: true }
    ]

    const store = mockStore({
      game_state: {}
    })
    store.dispatch( actions.loadGameStateIfAny() )
    expect( store.getActions() ).toEqual( expectedActions )
  })

  it('should clear progress', () => {
    const expectedActions = [
      { type: types.SET_CURRENT_QUESTION_INDEX, payload: 0 },
      { type: types.SET_TOTAL_SCORE, payload: 0 },
      { type: types.SET_IS_FINISHED, payload: false }
    ]

    const store = mockStore({
      game_state: {}
    })
    store.dispatch( actions.resetGameState() )
    expect( store.getActions() ).toEqual( expectedActions )
  })

  it('should not send any actions if no state saved', () => {
    localStorage.clear()
    const store = mockStore({
      game_state: {}
    })
    store.dispatch( actions.loadGameStateIfAny() )
    expect( store.getActions() ).toEqual( [] )
  })
})
