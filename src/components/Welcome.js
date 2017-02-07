import React, { PropTypes } from 'react'

const WelcomeContainer = ({
  playerName,
  startEnabled,
  onPlayerNameChange,
  onNextClick
}) => {
  return (
    <div>
      <h3>Welcome to the Float Cash Flow Quiz</h3>
      <form id="name-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={ playerName }
          onChange={ (ev) => onPlayerNameChange( ev.target.value ) }/>
        <button
          className="start-btn"
          disabled={ !startEnabled }
          onClick={ (ev) => {
            ev.preventDefault()
            onNextClick()
          }}
        >Start</button>
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
