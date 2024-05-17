import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  lengthOfPhrase = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading"> Calculate the Letters you enter </h1>
          <label className="enter" htmlFor="phraseText">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="phraseText"
            className="search-input"
            placeholder="Enter the phrase"
            onChange={this.lengthOfPhrase}
            value={searchInput}
          />
          <br />
          <p className="button">No.of letters: {searchInput.length}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="stopwatch-img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
