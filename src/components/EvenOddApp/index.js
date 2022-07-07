// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevSate => ({count: prevSate.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const result = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg_color">
        <div className="bg-image">
          <h1>count {count}</h1>
          <p>Count is {result}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
