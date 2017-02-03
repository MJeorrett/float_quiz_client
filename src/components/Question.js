import React from 'react'

import Answer from './Answer'

const Question = ({ questionData }) => {

  const answers = questionData.answers.map( (answerData, index) => {
    return (
      <Answer
        key={ index }
        text={ answerData.text }
        score={ answerData.score }/>
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
