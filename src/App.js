import React, { Component } from 'react';
import './App.css';
import PopularMovies from './components/PopularMovies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <PopularMovies></PopularMovies>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
