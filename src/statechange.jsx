import React, {Component} from "react";
import movies from "./Movies";
import { render } from "@testing-library/react";


class Chan extends Component {
    constructor(){
        super();
        this.setState= {
            searchValue : '',
            movies : movies
        };
    }

    onChange = (e)=>{
        this.setState({searchValue : e.target.value});
    }

    render(){
        const filter_movies = this.state.movies.filter(movie) => {
            return movie.title.toLowercase().includes(this.setState.searchValue.toLowerCase());
        }
    }
    

}
