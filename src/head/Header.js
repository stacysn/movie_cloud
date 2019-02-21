import React, { Component } from 'react'
import '../App.css';

class Header extends Component {
  render () {
    if (this.props.isMainPageShowing) {
      return (
        <header>
          <div className="search-bar">
            <form onSubmit={this.props.handleMovieSubmit}>
              <label>
                <h3> Search Movie: </h3>
                <input type="text" name="movieName" value={this.props.searchKeyWords} onChange={this.props.handleChange} />
              </label>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </header>
      )
    } else if (this.props.isMovieCardShowing) {
      return (
        <div>
          <button color="secondary" onClick={this.props.handleBackToHome}>Back to Main Page</button>
        </div>
      )
    }
    else {
      return (
        <div>
            <button onClick={this.props.handleBackToHome}>Back to Main Page</button>
          <div>
            <header>Searched for: "{this.props.searchKeyWords}"</header>
          </div>
        </div>
      )

    } 
  }
}

export default Header
