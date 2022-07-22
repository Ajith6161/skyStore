import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../index.css"
import Footer from "../../components/Footers/index.js";
import Movie from "../movie/index"
import { connect } from "react-redux";
import {
    getMovies, search
} from "../../actions";

class Welcome extends Component {
    state = {
        movieSelect: "",
        movieDatas: []
    };
    componentDidMount() {
        this.props.getMovies();
        this.props.search();
    }

    setStateOfParent = (newTitle) => {
        this.setState({ movieSelect: newTitle });
        const movieData = (this.props.state.movies).filter((value, index) => {
            return value.id == newTitle
        });
        this.setState({ movieDatas: movieData[0] })
    }

    render() {
        const { movieSelect, movieDatas } = this.state;
        const { movieName, movies } = this.props.state;

        return (
            <div className="margin-top-align">
                <div className="nav" >
                    <Navbar />
                    <div className="foter" style={{ marginTop: "15%" }} >
                        <Movie title={(window.location.pathname).replace("/","").replace("-"," ").replace("-"," ")} movies={movies} movieName={movieName} select={this.setStateOfParent} />
                    </div>
                </div>
                <div className="foter" style={{ marginTop: "5%" }} >
                    <Footer />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}
export default connect(mapStateToProps, {
    getMovies, search,
})(Welcome);