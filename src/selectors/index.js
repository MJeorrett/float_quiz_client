import { createSelector } from 'reselect'

const getGameState = state => state.game_state
const getQuestions = state => state.questions

const getAllQuestions = state => getQuestions(state).all
export const getMaxScore = state => getQuestions(state).max_score

const getCurrenQuestionIndex = state => getGameState(state).current_question_index
export const getPlayerName = state => getGameState(state).player_name
export const getTotalScore = state => getGameState(state).total_score
export const getIsFinished = state => getGameState(state).is_finished
export const getSelectedAnswerIndex = state => getGameState(state).selected_answer_index

export const getAreQuestionsLoaded = createSelector(
  [ getQuestions, getAllQuestions ],
  ( questionsState, questions ) => {
    return questions.length > 0 && !questionsState.is_fetching
  }
)

const getLastQuestionIndex = createSelector(
  [ getAllQuestions ],
  ( questions ) => {
    return questions.length - 1
  }
)

export const getCurrentQuestion = createSelector(
  [ getAllQuestions, getCurrenQuestionIndex ],
  ( questions, currentQuestionIndex ) => {
    return questions[currentQuestionIndex]
  }
)

export const getSelectedAnswerScore = createSelector(
  [ getCurrentQuestion, getSelectedAnswerIndex ],
  ( currentQuestion, selectedAnswerIndex ) => {
    if ( selectedAnswerIndex !== null ) {
      return currentQuestion.answers[selectedAnswerIndex].score
    }
    return null
  }
)

export const getOnLastQuestion = createSelector(
  [ getLastQuestionIndex, getCurrenQuestionIndex ],
  ( lastQuestionIndex, currentQuestionIndex ) => {
    return lastQuestionIndex === currentQuestionIndex
  }
)
