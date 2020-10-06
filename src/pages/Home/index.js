import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css'; 

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {

            movies:[]

        };

        this.loadMovies = this.loadMovies.bind(this);
    }

    componentDidMount(){
        this.loadMovies();
    } 

    loadMovies(){
        let URL = "https://sujeitoprogramador.com/r-api/?api=filmes";

        fetch(URL)
        .then((result) => result.json())
        .then((json) => {
            this.setState({movies: json})
            console.log(json)
        });

    }

    render(){
        return(
            <div className = "container">
                <div className = "list-movies">
                    {this.state.movies.map((movie)=> {
                        return(
                            <article key ={movie.id}>
                            <strong> {movie.nome} </strong>
                            <img src={movie.foto} alt="cover"/>
                            <Link to={`/movie/${movie.id}`}> Enter </Link>
                            </article>
                        );
                    })}
                </div>

            </div>
        );
    }
}

export default Home;