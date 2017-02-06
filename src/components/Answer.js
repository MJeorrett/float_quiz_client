import React, { PropTypes } from 'react'

const Answer = ({ text, score, onSelect }) => {

  return (
    <label className="radio-label">
      <input
      type="radio"
      name="answer"
      onClick={ (ev) => ev.target.checked ? onSelect() : null }
      />
    { text }
    </label>
  )

}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Answer
