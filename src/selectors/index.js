import { createSelector } from 'reselect'

export const getGameState = state => state.game_state

const getQuestions = state => state.questions.all
export const getMaxScore = state => state.questions.max_score

export const getPlayerName = state => getGameState(state).player_name
const getCurrenQuestionIndex = state => getGameState(state).current_question_index
export const getTotalScore = state => getGameState(state).total_score
export const getIsFinished = state => getGameState(state).is_finished
export const getSelectedAnswerIndex = state => getGameState(state).selected_answer_index

const getLastQuestionIndex = createSelector(
  [ getQuestions ],
  ( questions ) => {
    return questions.length - 1
  }
)

export const getCurrentQuestion = createSelector(
  [ getQuestions, getCurrenQuestionIndex ],
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
