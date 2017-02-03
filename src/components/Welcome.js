import React from 'react'

const WelcomeContainer = ({ onNextClick }) => {
  let nameInput
  return (
    <div>
      <h3>Welcome to the Float Cash Flow Quiz</h3>
      <form>
        <input
          ref={ node => nameInput = node }
          type="text"
          placeholder="Please enter your name" />
        <button
          onClick={ (ev) => {
            ev.preventDefault()
            onNextClick( nameInput.value )
          }}
        >Next</button>
      </form>
    </div>
  )
}

export default WelcomeContainer
