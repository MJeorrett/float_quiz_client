import React from 'react'

const Welcome = () => {
  let nameInput
  return (
    <div>
      <h3>Welcome to the Float Cash Flow Quiz</h3>
      <form>
        <input
          ref={ node => nameInput = node }
          type="text"
          placeholder="Please enter your name" />
        <button onClick={ (ev) => {
            ev.preventDefault()
            console.log("name entered:", nameInput.value)
          }
        }>Next</button>
      </form>
    </div>
  )
}

export default Welcome
