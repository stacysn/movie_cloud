import React, { Component } from "react";
import { Card, Row, Col, CardTitle, CardImg} from 'reactstrap';
import MovieCard from './MovieCard';

class SearchList extends Component {
  constructor(props){
    super(props) 
    this.state = {
      loadCard: 1,
      movie: []
    }
  }

  loadMovieCard(movie) {
    this.setState({loadCard: 2});
    this.setState({ movie: movie});
  } 

  render() {
    if (this.state.loadCard === 1) {
      const movieList = this.props.listOfMovies.map((movieListItem, index) => {
        return (
          <div className='movie-list' key={index}>
            <Row>
              <Col sm="4">
                <Card className='card' onClick={() => this.loadMovieCard(movieListItem)}>
                  <CardImg top width="50%" src={movieListItem[2]} alt="Card image cap" />
                  <CardTitle>{movieListItem[0]}</CardTitle>
                </Card>
              </Col>
            </Row>
          </div>
        )
      })
      return (
        <div>
          { movieList }
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