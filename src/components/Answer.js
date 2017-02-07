import React, { PropTypes } from 'react'

const Answer = ({ text, score, selected, onSelect }) => {

  return (
    <label className="answer">
      <input
      type="radio"
      name="answer"
      checked={ selected }
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
