import React, { Component } from 'react';
import './movie-info.css';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie() {
    const { id } = this.props.match.params;
    let URL = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`

    console.log(URL);
    fetch(URL)
      .then((result) => result.json())
      .then((json) => {
        this.setState({ movie: json })
        console.log(json)
      });
  }

  render() {
    return (
      <div className="movie-wrapper">
        <div className="movie-info">
          <h1> {this.state.movie.nome}</h1>
          <img src={this.state.movie.foto} alt="cover" />
          {this.state.movie > 0}{
            <h3>Sinopse</h3>
          }
          {this.state.movie.sinopse}
        </div>
      </div>
    );
  }
}

export default Movie;