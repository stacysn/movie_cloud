import React, { Component } from 'react';
import './App.css';
import BodyContainer from './components/BodyContainer';
import Header from './head/Header';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isMovieCardShowing: false,
      isMainPageShowing: true,
      isSearchListShowing: false,
      searchKeyWords: '',
      listOfMovies: []
    }
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBackToHome = this.handleBackToHome.bind(this);
  }

  handleMovieSubmit = (e) => {
    e.preventDefault()
    let movieList  = `https://api.themoviedb.org/3/search/movie?api_key=cd12a615a7e2e89322b83afb9bfc59ea&language=en-US&query=${this.state.searchKeyWords}&page=1&include_adult=false`
    $.get(movieList, (res) => {
      let i = 0; 
      this.setState({ listOfMovies : [] }); // reset array to be empty so it won't populate other movies on submit
      while (i < res.results.length) {
        let movie = {};
        movie.title = res.results[i].title;
        movie.movieLinks = `https://api.themoviedb.org/3/movie/${res.results[i].id}?api_key=cd12a615a7e2e89322b83afb9bfc59ea&language=en-US`;
        movie.poster = `https://image.tmdb.org/t/p/w500${res.results[i].poster_path}`;
        movie.overview = res.results[i].overview;
        movie.voteAverage = res.results[i].vote_average;
        movie.origLang = res.results[i].original_language;
        let newVar = Object.values(movie)
        this.setState({ listOfMovies: [...this.state.listOfMovies, newVar]});
        i++;
      }
    })
    this.setState({isMovieCardShowing: !this.state.isMovieCardShowing});
    this.setState({isMainPageShowing: false });
    this.setState({isSearchListShowing: true });
  }

  handleChange(e) {
    this.setState({ searchKeyWords: e.target.value });
  }

  handleBackToHome(){
    this.setState({ isMainPageShowing: true });
    this.setState({ isSearchListShowing: false });
    this.setState({ isMovieCardShowing: false });
  }

  handleBackToSearchList(){
    this.setState({ isSearchListShowing: true });
    this.setState({ isMovieCardShowing: false });
    this.setState({ isMainPageShowing: false });
  }

  render() {
    return (
      <div className="App">
          <div>
            <Header isMainPageShowing={this.state.isMainPageShowing} 
                    searchKeyWords={this.state.searchKeyWords}
                    listOfMovies={this.state.listOfMovies}
                    handleChange={(e) => this.handleChange(e)}
                    handleMovieSubmit={(e) => this.handleMovieSubmit(e)}
                    handleBackToHome={() => this.handleBackToHome()}
                    handleBackToSearchList={() => this.handleBackToSearchList()}
                    isSearchListShowing={this.state.isSearchListShowing}
                    isMovieCardShowing={this.state.isMovieCardShowing}
                    >
            </Header>
            <BodyContainer isMainPageShowing={this.state.isMainPageShowing} 
                          searchKeyWords={this.state.searchKeyWords} 
                          listOfMovies={this.state.listOfMovies}
                          isSearchListShowing={this.state.isSearchListShowing}
                          isMovieCardShowing={this.state.isMovieCardShowing}>
            </BodyContainer>
          </div>
      </div>
    );
  }
}

export default App;
