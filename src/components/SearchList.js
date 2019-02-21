import React, { Component } from "react";
import { Card, CardImg} from 'reactstrap';
import MovieCard from './MovieCard';

// this component renders what movie keywords a user would like to search
class SearchList extends Component {
  constructor(props){
    super(props) 
    this.state = {
      loadCard: 1, // shows list of movies;
      movie: []
    }
  }

  loadMovieCard(movie) {
    this.setState({ loadCard: 2 }); // renders MovieCard component
    this.setState({ movie: movie });
  } 

  render() {
    if (this.state.loadCard === 1) {
      let oddMovies = []; // left column
      let evenMovies = []; // right column
      let oddMovieList = this.props.listOfMovies.map((movieListItem, index) => {
        if (index % 2) {
          return (
            <div className='movie-list' key={index}>
                <Card className='card' onClick={() => this.loadMovieCard(movieListItem)}>
                  <CardImg top width="50%" src={movieListItem[2]} alt="Card image cap" />
                </Card>                
            </div>
          )
        }
      })
      let evenMovieList = this.props.listOfMovies.map((movieListItem, index) => {
        if (!(index % 2)) {
          return (
            <div className='movie-list' key={index}>              
                <Card className='card' onClick={() => this.loadMovieCard(movieListItem)}>
                  <CardImg top width="50%" src={movieListItem[2]} alt="Card image cap" />
                </Card>                
            </div>
          )
        }
        })
        oddMovies.push(oddMovieList);
        evenMovies.push(evenMovieList);
        return (
          <div>
            <h2> Results for: {this.props.searchKeyWords}</h2>
            <div className='row'>
              <div className='col-sm-6'>{oddMovies}</div>
              <div className='col-sm-6'>{evenMovies}</div>
            </div>
          </div>
      )
    } 
     if (this.state.loadCard === 2) {
      return (
        <div>
          <MovieCard movie={this.state.movie}></MovieCard>
        </div>
      )
    }
  }
}

export default SearchList;