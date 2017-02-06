import React from 'react'

import Answer from './Answer'

const Question = ({ questionData, onAnswerSelect }) => {

  const answers = questionData.answers.map( (answerData, index) => {
    return (
      <Answer
        key={ index }
        text={ answerData.text }
        score={ answerData.score }
        onSelect={ () => onAnswerSelect(index) }/>
      )
  })

  return (
    <div>
      <p>{ questionData.text }</p>
      <hr />
      <form>
        <div>{ answers }</div>
      </form>
    </div>
  )

}

export default Question
