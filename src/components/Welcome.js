import React, { PropTypes } from 'react'

const WelcomeContainer = ({ playerName, onPlayerNameChange, onNextClick }) => {
  return (
    <div>
      <h3>Welcome to the Float Cash Flow Quiz</h3>
      <form>
        <input
          type="text"
          placeholder="Please enter your name"
          value={ playerName }
          onChange={ (ev) => onPlayerNameChange( ev.target.value ) }/>
        <button
          onClick={ (ev) => {
            ev.preventDefault()
            onNextClick()
          }}
        >Next</button>
      </form>
    </div>
  )
}

WelcomeContainer.propTypes = {
  plyayerName: PropTypes.string,
  onPlayerNameChange: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
}

export default WelcomeContainer
