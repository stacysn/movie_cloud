import React, { Component } from "react";
import { Card, Row, Col, CardText, CardTitle, CardImg } from 'reactstrap';

class MovieCard extends Component {
  render() {
    return (
      <div> 
        <Row>
          <Col sm="4">
            <Card onClick={() => this.props.loadMovieCard}>
              <CardImg top width="50%" src={this.props.movie[2]} alt="Card image cap" />
              <CardTitle>{this.props.movie[0]}</CardTitle>
              <CardText>{this.props.movie[3]}</CardText>
              <CardText>Average Rating: {this.props.movie[4]}/10</CardText>
              <CardText>Language: {this.props.movie[5]}</CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieCard;