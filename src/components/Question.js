import React, { PropTypes } from 'react'

import Answer from './Answer'

const Question = ({ questionData, selectedAnswerIndex, onAnswerSelect }) => {

  const answers = questionData.answers.map( (answerData, index) => {
    return (
      <Answer
        key={ index }
        text={ answerData.text }
        score={ answerData.score }
        selected={ index === selectedAnswerIndex }
        onSelect={ () => onAnswerSelect(index) }/>
      )
  })

  return (
    <div>
      <h3>{ questionData.text }</h3>
      <hr />
      <form>
        <div>{ answers }</div>
      </form>
    </div>
  )

}

const answerPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

Question.propTypes = {
  questionData: PropTypes.shape({
    text: PropTypes.string,
    answers: PropTypes.arrayOf(answerPropType).isRequired
  }).isRequired,
  selectedAnswerIndex: PropTypes.number,
  onAnswerSelect: PropTypes.func.isRequired
}

export default Question
