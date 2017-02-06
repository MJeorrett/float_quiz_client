import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import nock from 'nock'

import config from '../../config'
import * as types from './types'
import { fetchQuestionsIfNeeded } from './questions_actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

function setUpNock( response ) {
  return nock('http://localhost:5000')
    .get('/v1?access_token=' + config.api_key)
    .reply( 200, response )
}

const questionsData = [
  { text: "Q1", answers: [
    { text: "Q1A1", score: 15 },
    { text: "Q1A2", score: 10 },
    { text: "Q1A3", score: 5 },
    { text: "Q1A4", score: 0 },
  ]},
  { text: "Q2", answers: [
    { text: "Q2A1", score: 15 },
    { text: "Q2A2", score: 10 },
    { text: "Q2A3", score: 5 },
    { text: "Q2A4", score: 0 },
  ]}
]

describe('fetchQuestionsIfNeeded', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  it('should dispatch actions when no existing questions', () => {

    const expectedActions = [
      { type: types.FETCH_QUESTIONS_STARTED },
      {
        type: types.FETCH_QUESTIONS_SUCCESS,
        payload: {
          max_score: 30,
          questions: questionsData
        }
      }
    ]
    setUpNock( questionsData )
    const store = mockStore({
      questions: { questions: [] }
    })
    return store.dispatch( fetchQuestionsIfNeeded() )
      .then( () => {
        expect( store.getActions() ).toEqual( expectedActions )
      })
  })

  it('should not fetch questions if they exist', () => {
    const expectedActions = []
    const questionsApi = setUpNock({})
    const store = mockStore({
      questions: { questions: questionsData }
    })
    return store.dispatch( fetchQuestionsIfNeeded() )
      .then( () => {
        expect( store.getActions() ).toEqual( [] )
        expect( questionsApi.isDone() ).toEqual( false )
      })
  })
})
