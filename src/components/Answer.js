import React, { PropTypes } from 'react'

const Answer = ({ text, score }) => {

  return (
    <label className="radio-label">
      <input type="radio" name="answer"/> { text }
    </label>
  )

}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Answer
