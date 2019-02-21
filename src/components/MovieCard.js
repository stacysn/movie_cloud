import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className='row'> 
        <div className='col-sm-6'>            
          <img top width="50%" src={this.props.movie[2]} alt="Card cap" />
        </div>
        <div className='col-sm-6'>
          <h1>{this.props.movie[0]}</h1>
          <h2>{this.props.movie[3]}</h2>
          <h3>Average Rating: {this.props.movie[4]}/10</h3>
          <h3>Language: {this.props.movie[5]}</h3>
        </div>
      </div>
    );
  }
}

export default MovieCard;