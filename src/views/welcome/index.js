import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import "../../index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../components/Footers/index.js";
import ReactCarousel from "../ReactCarosal/ReactCarousel";
import Movie from "../movie/index"
import { connect } from "react-redux";
import {
  getMovies,
} from "../../actions";

class Welcome extends Component {
  state = {
    text: [],
    movies: [],
    images: []
  };
  componentDidMount(){
    this.props.getMovies();
  }
  render() {
    const { movies, text } = this.state;
    return (
      <div className="margin-top-align">
        <Navbar />
        <ReactCarousel />
        <Movie movies={this.props.state.movies}/>
        <Footer />
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
  getMovies,
})(Welcome);