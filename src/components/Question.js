import React from 'react'

const Question = ({ questionData }) => {

  const answers = questionData.answers.map( (answerData, index) => {
    return <p key={index}>{index}. {answerData.text}</p>
  })

  return (
    <div>
      <p>{ questionData.text }</p>
      <hr />
      <div>{ answers }</div>
    </div>
  )

}

export default Question
