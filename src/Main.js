import React from 'react'

class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>Float Cash Flow Quiz</h1>
        { this.props.children }
      </div>
    )
  }

}

export default Main
