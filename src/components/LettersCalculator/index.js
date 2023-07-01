// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const lettersCount = searchInput.length
    return (
      <div className="app-bg-container">
        <div>
          <h1>
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <div className="input">
            <label htmlFor="abc">Enter the phrase</label>
            <input
              id="abc"
              type="text"
              value={searchInput}
              placeholder="Enter the phrase"
              onChange={this.updateSearchInput}
            />
          </div>
          <p>No.of letters: {lettersCount}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
