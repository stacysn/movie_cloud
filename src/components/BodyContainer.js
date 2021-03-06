import React, { Component } from 'react';
import MovieCard from './MovieCard';
import SearchList from './SearchList';
import $ from 'jquery'
import { Card, Row, CardImg } from 'reactstrap';

class BodyContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      isCardNotClicked: true,
      movie: [],
      page: null // null is main page; 1 is MovieCard 
    }
    this.loadPopularMovies = this.loadPopularMovies.bind(this);
    this.goBackToMain = this.goBackToMain.bind(this);
  }

  componentWillMount(){
    this.loadPopularMovies();
  }

  loadPopularMovies () {
    let movieURL = `https://api.themoviedb.org/3/movie/popular?api_key=cd12a615a7e2e89322b83afb9bfc59ea&language=en-US&page=1`;
    $.get(movieURL, (res) => {
      let i = 0;
      while (i < 20) {
        let movie = {};
        movie.title = res.results[i].title;
        movie.movieLinks = `https://api.themoviedb.org/3/movie/${res.results[i].id}?api_key=cd12a615a7e2e89322b83afb9bfc59ea&language=en-US`;
        movie.poster = `https://image.tmdb.org/t/p/w500${res.results[i].poster_path}`;
        movie.overview = res.results[i].overview;
        movie.voteAverage = res.results[i].vote_average;
        movie.origLang = res.results[i].original_language;
        let newVar = Object.values(movie)
        this.setState({ movies: [...this.state.movies, newVar]});
        i++;
      }
    })
  }

  loadMovieCard(movie) {
    this.setState({ isCardNotClicked: !this.state.isCardNotClicked });
    this.state.page = 1;
    this.state.movie = movie;
  }

  goBackToMain() {
    this.setState({ isCardNotClicked: !this.state.isCardNotClicked });
    this.setState({ page: null });
    this.setState({ movie: null });
  }
  
  render() {
    // landing page with list of popular movies
    if (this.props.isMainPageShowing && this.state.isCardNotClicked && this.state.page === null){
      let oddMovies = []; // left column
      let evenMovies = []; // right column
      let popularOddMovies = this.state.movies.map((movie, index) => {
        if (index % 2) {
          return (
            <div className='movie-list' key={index}>
              <Row id={movie.id}>
                  <Card body id={movie.id} onClick={() => this.loadMovieCard(movie)} >
                    <CardImg top width="50%" src={movie[2]} alt="Card image cap" />
                  </Card>
              </Row>
            </div>
          )
        }
      }) 
      let popularEvenMovies = this.state.movies.map((movie, index) => {
        if (!(index % 2)) {
          return (
            <div className='movie-list' key={index}>
              <Row id={movie.id}>
                  <Card body id={movie.id} onClick={() => this.loadMovieCard(movie)} >
                  <CardImg top width="50%" src={movie[2]} alt="Card image cap" />
                  </Card>     
              </Row>
            </div>
          )
        }
      }) 
      oddMovies.push(popularOddMovies);
      evenMovies.push(popularEvenMovies);
      return (
        <div>
          
            <div className="search-bar">
              <form onSubmit={this.props.handleMovieSubmit}>
                <label>
                  <h3> Search Movie: </h3>
                  <input type="text" name="movieName" value={this.props.searchKeyWords} onChange={this.props.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
              </form>
            </div>      
          
          <div>
            <h2>Today's Popular Movies</h2>
            <div  className='row'>
              <div className='col-sm-6'> { oddMovies } </div>
              <div className='col-sm-6'> { evenMovies } </div> 

            </div>
          </div>
        </div>
      )
    } 
    // individual movie clicked
    if (this.state.movie && this.state.page === 1) {
      return (
        <div>
          <button onClick={() => this.goBackToMain()}>Back</button>
          <MovieCard movie={this.state.movie} ></MovieCard>
        </div>
      )
    }
    // search list
    if (this.props.isSearchListShowing === true) {
      return (
        <div>
          <button onClick={this.props.handleBackToHome}>Back to Main Page</button>
          <SearchList movie={this.state.movie} 
                      searchKeyWords={this.props.searchKeyWords} 
                      listOfMovies={this.props.listOfMovies}>
          </SearchList>
        </div>
      )
    }
  }
}

export default BodyContainer;
