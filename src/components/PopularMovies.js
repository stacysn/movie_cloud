import React, { Component } from 'react';
import $ from 'jquery'


class PopularMovies extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieTitles: [],
      voteCount: null,
    }
    this.loadPopularMovies = this.loadPopularMovies.bind(this);
  }

  componentWillMount(){
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    let movieURL = `https://api.themoviedb.org/3/movie/popular?api_key=cd12a615a7e2e89322b83afb9bfc59ea&language=en-US&page=1`
    $.get(movieURL, (res) => {
      console.log("RES", res)
      let i = 0;
      while (i < 20) {
        this.setState({ movieTitles: [...this.state.movieTitles, res.results[i].title]});
        i++
      }
      console.log('movie titles', this.state.movieTitles)
    })
  }

  render() {
    const movies = this.state.movieTitles.map((item, key) => 
      <li key={item}>{item}</li>
    )
    return (
      <div>
        <h3> Popular Movies </h3>
        
          {movies}
        
      </div>
    )
  }
}

export default PopularMovies;